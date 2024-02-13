import requests
from bs4 import BeautifulSoup
import json
import uuid


def fetch_experts(url):
    # Send an HTTP request to the given URL
    response = requests.get(url)
    
    # Check if the request was successful
    if response.status_code == 200:
        # Parse the HTML content
        soup = BeautifulSoup(response.content, 'html.parser')
        
    # Find all expert entries
        expert_entries = soup.find_all('div', class_='search-result')

        # List to hold all extracted expert data
        experts_list = []

        # Iterate through each expert entry and extract the information
        for expert in expert_entries:
            # Extracting the image source attribute
            image = expert.find('img')['src']

            # Extracting the name
            name = expert.find('h2').text.strip()

            # Extracting the email
            email = expert.find('li', class_='email').find('a')['href'].replace('mailto:', '').strip()

            # Extracting the school name
            school = expert.find('div', class_='school').text.strip()

            # Extracting the title/position
            title = expert.find('div', class_='title').text.strip()

            # Extracting the field
            fields = [field.text.strip() for field in expert.find_all('a', class_='expert-field')]

            # Extracting the focus areas
            focus_areas = [focus.text.strip() for focus in expert.find_all('a', class_='expert-focus')]

            expert_id = str(uuid.uuid4())

            # Adding the extracted data to the list
            experts_list.append({
                'id': expert_id,
                'name': name,
                'email': email,
                'school': school,
                'title': title,
                'fields': fields,
                'focus_areas': focus_areas,
                'image_src': "https://news.northwestern.edu"+ image
            })

        return experts_list
    else:
        # Handle request errors
        print("Failed to retrieve the webpage")
        return None

def main():
    base_url = 'https://news.northwestern.edu/for-journalists/faculty-experts/browse'
    all_experts = []

    # Looping through 43 pages, incrementing the 'start' parameter by 10 each time
    for page in range(43):
        start_value = page * 10
        page_url = f"{base_url}?start={start_value}"
        experts = fetch_experts(page_url)
        
        if experts:
            all_experts.extend(experts)

    # Save all the data to a JSON file
    with open('../app/data/experts_all.json', 'w') as jsonfile:
        json.dump(all_experts, jsonfile, indent=4)

if __name__ == "__main__":
    main()