from bs4 import BeautifulSoup
import requests
import json

def fetch_news_stories(url, professor_name):
    """
    Fetches news stories from a given URL where a specific Northwestern University professor is mentioned.

    Args:
    url (str): The URL of the website to scrape.
    professor_name (str): The name of the professor to search for.

    Returns:
    list: A list of dictionaries, each containing the title, URL, and date of a news story.
    """
    try:
        response = requests.get(url)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')

        news_stories = []

        # Assuming each news story is contained in a 'div' with class 'story'
        for story in soup.find_all('div', class_='story'):
            story_text = story.get_text()
            if professor_name.lower() in story_text.lower():
                title_tag = story.find('h4')
                title = title_tag.get_text(strip=True) if title_tag else "No Title"
                link = title_tag.find('a')['href'] if title_tag and title_tag.find('a') else "No URL"
                date = story.find('div', class_='date').get_text(strip=True) if story.find('div', class_='date') else "No Date"
                news_stories.append({'title': title, 'url': link, 'date': date})
        print("news_stories", news_stories)

        # Saving the data to a JSON file
        # with open('../app/data/experts_news.json', 'w') as file:
        #     json.dump({"professor": professor_name, "news": news_stories}, file, indent=4)

        # return f"News stories saved to news_stories.json"

    except requests.RequestException as e:
        return f"Error fetching data from the URL: {e}"

    return news_stories

    

# Example usage of the modified function
# result = fetch_news_stories("https://www.ipr.northwestern.edu/news/media-mentions.html", "Craig Garthwaite")
# print(result)


def fetch_all_professors_news_stories(url, json_file_path):
    try:
        with open(json_file_path, 'r') as file:
            professors_data = json.load(file)


        all_news_stories = {}

        for professor in professors_data:
            professor_name = professor['name']
            print(f"Fetching news stories for: {professor_name}")  # Debugging print statement
            print(type(professor_name))
            news_stories = fetch_news_stories(url, str(professor_name))
            print(f"News stories found: {news_stories}")  # Debugging print statement
            all_news_stories[professor_name] = news_stories

        with open('../app/data/experts_news.json', 'w') as file:
            json.dump(all_news_stories, file, indent=4)

        return "All professors' news stories saved to all_professors_news_stories.json"
    except (FileNotFoundError, json.JSONDecodeError, requests.RequestException) as e:
        return f"Error processing the request: {e}"

# Example usage of the function


result = fetch_all_professors_news_stories("https://www.ipr.northwestern.edu/news/media-mentions.html", "../app/data/experts_data.json")
print(result)

