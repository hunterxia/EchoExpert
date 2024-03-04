# import requests
# from bs4 import BeautifulSoup
# import json
# import re

# def clean_title(title):
#     return title.replace('[HTML][HTML] ', '').replace('[PDF][PDF] ', '').replace('[BOOK][B] ', '')

# def clean_co_authors(co_authors):
#     if co_authors.startswith('\u2026,'):
#         co_authors = co_authors.replace('\u2026,', '', 1)
#     parts = co_authors.split('\u2026')
#     cleaned_authors = parts[0]
#     cleaned_authors = re.sub(r'\u00a0.*', '', cleaned_authors).strip()
#     return cleaned_authors

# def fetch_papers(professor_name):
#     base_url = "https://scholar.google.com/scholar"
#     search_query = f"{base_url}?q={professor_name}"
#     papers = []

#     response = requests.get(search_query)
#     soup = BeautifulSoup(response.content, 'html.parser')

#     for paper in soup.find_all('div', class_='gs_ri'):
#         title_element = paper.find('h3', class_='gs_rt')
#         title = clean_title(title_element.text)
#         link = title_element.a['href'] if title_element.a else 'No link available'
#         citations = paper.find('div', class_='gs_fl').find_all('a')[2].text
#         co_authors = clean_co_authors(paper.find('div', class_='gs_a').text)

#         papers.append({
#             "title": title,
#             "link": link,
#             "citations": citations,
#             "co_authors": co_authors
#         })

#     return papers

# def fetch_all_professors_papers(json_file_path, output_json_file_path):
#     try:
#         with open(json_file_path, 'r') as file:
#             professors_data = json.load(file)

#         all_papers = {}

#         for professor in professors_data:
#             professor_name = professor['name']
#             print(f"Fetching papers for: {professor_name}")  # Debugging print statement
#             papers = fetch_papers(professor_name)
#             print(f"Papers found: {len(papers)}")  # Debugging print statement
#             all_papers[professor_name] = papers

#         with open(output_json_file_path, 'w') as file:
#             json.dump(all_papers, file, indent=4)

#         return f"All professors' papers saved to {output_json_file_path}"
#     except (FileNotFoundError, json.JSONDecodeError, requests.RequestException) as e:
#         return f"Error processing the request: {e}"

# result = fetch_all_professors_papers("../app/data/experts_data.json", "../app/data/experts_citation.json")
# print(result)

# Complete code including all the functionalities

import requests
from bs4 import BeautifulSoup
import json
import re

def clean_title(title):
    return title.replace('[HTML][HTML] ', '').replace('[PDF][PDF] ', '').replace('[BOOK][B] ', '')

def clean_co_authors(co_authors):
    if co_authors.startswith('\u2026,'):
        co_authors = co_authors.replace('\u2026,', '', 1)
    parts = co_authors.split('\u2026')
    cleaned_authors = parts[0]
    cleaned_authors = re.sub(r'\u00a0.*', '', cleaned_authors).strip()
    return cleaned_authors

def fetch_profile_papers(user_id, max_papers=100):
    base_url = f"https://scholar.google.com/citations?user={user_id}&hl=en"
    papers = []

    try:
        headers = {'User-Agent': 'Mozilla/5.0'}
        response = requests.get(base_url, headers=headers)
        response.raise_for_status()
        soup = BeautifulSoup(response.content, 'html.parser')

        for paper in soup.find_all('tr', class_='gsc_a_tr'):
            title_element = paper.find('a', class_='gsc_a_at')
            title = title_element.text if title_element else 'No title available'
            link = "https://scholar.google.com" + title_element['data-href'] if title_element else 'No link available'

            author_element = paper.find('div', class_='gs_gray')
            authors = author_element.text if author_element else 'No authors available'

            papers.append({
                "title": title,
                "link": link,
                "authors": authors
            })

            if len(papers) >= max_papers:
                break

    except requests.RequestException as e:
        print(f"Request failed: {e}")

    return papers

def fetch_papers(professor_email):
    base_url = "https://scholar.google.com/scholar"
    search_query = f"{base_url}?q={professor_email}"
    papers = []

    response = requests.get(search_query)
    soup = BeautifulSoup(response.content, 'html.parser')

    for paper in soup.find_all('div', class_='gs_ri'):
        title_element = paper.find('h3', class_='gs_rt')
        title = clean_title(title_element.text)
        link = title_element.a['href'] if title_element.a else 'No link available'
        citations = paper.find('div', class_='gs_fl').find_all('a')[2].text
        co_authors = clean_co_authors(paper.find('div', class_='gs_a').text)

        papers.append({
            "title": title,
            "link": link,
            "citations": citations,
            "co_authors": co_authors
        })

    return papers

def extract_user_id_from_search(professor_email):
    base_url = "https://scholar.google.com/scholar"
    search_query = f"{base_url}?q={professor_email}"
    user_id = None

    try:
        response = requests.get(search_query)
        soup = BeautifulSoup(response.content, 'html.parser')

        user_profile_link = soup.find('a', href=re.compile(r'/citations\?user=.+&hl=en'))
        if user_profile_link:
            user_id_match = re.search(r'user=([\w-]+)', user_profile_link['href'])
            if user_id_match:
                user_id = user_id_match.group(1)
    except requests.RequestException as e:
        print(f"Error fetching user ID: {e}")

    return user_id

def fetch_all_professors_papers(json_file_path, output_json_file_path):
    try:
        with open(json_file_path, 'r') as file:
            professors_data = json.load(file)

        all_papers = {}

        for professor in professors_data:
            professor_name = professor['name']
            professor_email = professor['email']
            print(f"Fetching papers for: {professor_name}")

            user_id = extract_user_id_from_search(professor_email)
            if user_id:
                papers = fetch_profile_papers(user_id)
            else:
                papers = fetch_papers(professor_email)

            print(f"Papers found: {len(papers)}")
            all_papers[professor_name] = papers

        with open(output_json_file_path, 'w') as file:
            json.dump(all_papers, file, indent=4)

        return f"All professors' papers saved to {output_json_file_path}"
    except (FileNotFoundError, json.JSONDecodeError, requests.RequestException) as e:
        return f"Error processing the request: {e}"

# Uncomment the line below to run the function and fetch papers
result = fetch_all_professors_papers("../app/data/experts_data.json", "../app/data/experts_citation.json")
print(result)


