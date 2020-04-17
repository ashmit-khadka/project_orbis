from bs4 import BeautifulSoup
import urllib.request

base_url = 'https://www.cia.gov/library/publications/the-world-factbook/'
base_dir = 'C:/Users/ashmit.khadka/Documents/Projects/Tools/cia-twf-scraper/html/'
soup = BeautifulSoup(open("sample.html","r",encoding='utf-8'), "html.parser")
data = (soup.find('select', {'id' : 'search-place'})).find_all('option')

for c in data:
    if (c['value'] and c['value'].startswith('../')):
        url = base_url + c['value'][3:]
        filename = base_dir + c['value'][8:]
        print(filename)
        request = urllib.request.Request(url)
        response = urllib.request.urlopen(request)
        with open(filename, "w", encoding="utf-8") as file:
            file.write(response.read().decode('utf-8'))
