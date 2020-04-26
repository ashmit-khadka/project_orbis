from bs4 import BeautifulSoup
import urllib.request
import glob
import os
import json
import ntpath
import re


base_dir = 'C:/Users/ashmit.khadka/Documents/Projects/tools/cia-twf-scraper/html'
img_base_dir_flags = 'assets/flags_2/'
url_base_dir_flags = 'https://www.cia.gov/library/publications/the-world-factbook/attachments/flags/'
img_base_dir_location = 'assets/locations/'
url_base_dir_location = 'https://www.cia.gov/library/publications/the-world-factbook/attachments/locator-maps/'
audio_base_dir_anthem = 'assets/anthems/'
url_base_dir_anthem = 'https://www.cia.gov/library/publications/the-world-factbook/attachments/audios/original'

data = {}
soup = ''
id = 0

def getText(parent):
    return ''.join(parent.find_all(text=True, recursive=False)).strip()

def getNumber(string):
    print(string)

    try:
        string = re.sub('[$,]', '', string)
        number = float(re.search(r'(\d+(?:\.\d+)?)', string).group())
        if ('million' in string): number = number * 1000000
        elif ('billion' in string): number = number * 1000000000
        return round(number)
    except:
        print('error' + string)
        return 0

def parser(query, isNum=False):
    result = soup
    for q in query:
        if len(q) > 2: result = (result.find_all(q[0], {q[1]: q[2]}))[q[3]]
        else: result = (result.find_all(q[0]))[q[1]]
        if result is None: return False
    if isNum: return getNumber(getText(result))
    return getText(result)    

def getPage(page, id):

    global soup
    soup = BeautifulSoup(open(page,"r",encoding='utf-8'), "html.parser")  
    
    name = parser([
        ['span', 'class', 'region', 0],
        ])

    data[name] = {}

    data[name]['MetaData'] = {} 

    data[name]['MetaData']['id'] = id    
    
    data[name]['MetaData']['name'] = name

    src = ntpath.basename(soup.find('div', {'class': 'flagBox'}).find('img')['src'])
    #urllib.request.urlretrieve(url_base_dir_flags + src, img_base_dir_flags + src)
    data[name]['MetaData']['img_flag'] = "require('../assets/flags_2/" + src + "')"
    src = ntpath.basename(soup.find('div', {'class': 'locatorBox'}).find('img')['src'])
    #urllib.request.urlretrieve(url_base_dir_location + src, img_base_dir_location + src)
    data[name]['MetaData']['img_location'] = "require('../assets/locations/" + src + "')"


    data[name]['Introduction'] = {} 

    data[name]['Introduction']['Introduction'] = (parser([
        ['div', 'id', 'field-background', 0],
        ['div', 'class', 'category_data subfield text', 0],
        ]))


    #Government

    data[name]['Government'] = {} 

    data[name]['Government']['Name (Long)'] = (parser([
        ['div', 'id', 'field-country-name', 0],
        ['div', 'class', 'category_data subfield text', 0],
        ]))

    
    #Local Name (long)
    data[name]['Government']['Local Name (long)'] = (parser([
        ['div', 'id', 'field-country-name', 0],
        ['div', 'class', 'category_data subfield text', 2],
        ]))
    #Etymology
    data[name]['Government']['Etymology'] = (parser([
        ['div', 'id', 'field-capital', 0],
        ['div', 'class', 'category_data note', 0],
        ]))

    #Government Type
    data[name]['Government']['Government Type'] = (parser([
        ['div', 'id', 'field-government-type', 0],
        ['div', 'class', 'category_data subfield text', 0],
        ]))

    #Capital
    data[name]['Government']['Capital'] = (parser([
        ['div', 'id', 'field-capital', 0],
        ['div', 'class', 'category_data subfield text', 0],
        ]))

    #Independence
    data[name]['Government']['Independence'] = (parser([
        ['div', 'id', 'field-independence', 0],
        ['div', 'class', 'category_data subfield text', 0],
        ]))    

    #National Holiday
    data[name]['Government']['National Holiday'] = (parser([
        ['div', 'id', 'field-national-holiday', 0],
        ['div', 'class', 'category_data subfield text', 0],
        ]))

    #Chief of State
    data[name]['Government']['Chief of State'] = (parser([
        ['div', 'id', 'field-executive-branch', 0],
        ['div', 'class', 'category_data subfield text', 0],
        ]))

    #Head of Government
    data[name]['Government']['Head of Government'] = (parser([
        ['div', 'id', 'field-executive-branch', 0],
        ['div', 'class', 'category_data subfield text', 1],
        ]))

    #Economy
    data[name]['Economy'] = {} 


    data[name]['Economy']['Introduction'] = (parser([
        ['div', 'id', 'field-economy-overview', 0],
        ['div', 'class', 'category_data subfield text', 0],
        ['p',0]
        ]))

    #GDP (official exchange rate)
    data[name]['Economy']['GDP (official exchange rate)'] = (parser([
        ['div', 'id', 'field-gdp-official-exchange-rate', 0],
        ['div', 'class', 'category_data subfield numeric', 0],
        ['span', 'class', 'subfield-number', 0],
        ], True))

    #GDP (purchasing power parity)
    data[name]['Economy']['GDP (purchasing power parity)'] = (parser([
        ['div', 'id', 'field-gdp-purchasing-power-parity', 0],
        ['div', 'class', 'category_data subfield historic', 0],
        ['span', 'class', 'subfield-number', 0],
        ], True))

    #GDP Per Capita (PPP)
    data[name]['Economy']['GDP Per Capita (PPP)'] = (parser([
        ['div', 'id', 'field-gdp-per-capita-ppp', 0],
        ['div', 'class', 'category_data subfield historic', 0],
        ['span', 'class', 'subfield-number', 0],
        ], True))

    #Gross National Saving
    data[name]['Economy']['Gross National Saving'] = (parser([
        ['div', 'id', 'field-gross-national-saving', 0],
        ['div', 'class', 'category_data subfield historic', 0],
        ['span', 'class', 'subfield-number', 0],
        ], True))

    #GDP composition - ag
    data[name]['Economy']['GDP composition - ag'] = (parser([
        ['div', 'id', 'field-gdp-composition-by-sector-of-origin', 0],
        ['div', 'class', 'category_data subfield numeric', 0],
        ['span', 'class', 'subfield-number', 0],
        ]))

    #GDP composition - in
    data[name]['Economy']['GDP composition - in'] = (parser([
        ['div', 'id', 'field-gdp-composition-by-sector-of-origin', 0],
        ['div', 'class', 'category_data subfield numeric', 1],
        ['span', 'class', 'subfield-number', 0],
        ]))

    #GDP composition - se
    data[name]['Economy']['GDP composition - se'] = (parser([
        ['div', 'id', 'field-gdp-composition-by-sector-of-origin', 0],
        ['div', 'class', 'category_data subfield numeric', 2],
        ['span', 'class', 'subfield-number', 0],
        ]))

    #Industries
    data[name]['Economy']['Industries'] = (parser([
        ['div', 'id', 'field-industries', 0],
        ['div', 'class', 'category_data subfield text', 0],
        ]))

    #Public Debt
    data[name]['Economy']['Public Debt'] = (parser([
        ['div', 'id', 'field-public-debt', 0],
        ['span', 'class', 'subfield-number', 0],
        ], True))


    #Inflaction Rate
    data[name]['Economy']['Inflaction Rate'] = (parser([
        ['div', 'id', 'field-inflation-rate-consumer-prices', 0],
        ['span', 'class', 'subfield-number', 0],
        ], True))

    #Current Account Balance
    data[name]['Economy']['Current Account Balance'] = (parser([
        ['div', 'id', 'field-current-account-balance', 0],
        ['span', 'class', 'subfield-number', 0],
        ], True))
        
    #Exports
    data[name]['Economy']['Exports'] = (parser([
        ['div', 'id', 'field-exports', 0],
        ['span', 'class', 'subfield-number', 0],
        ], True))

    #Exports Partners
    data[name]['Economy']['Exports Partners'] = (parser([
        ['div', 'id', 'field-exports-partners', 0],
        ['div', 'class', 'category_data subfield text', 0],
        ]))


    #Exports Commodities
    data[name]['Economy']['Exports Commodities'] = (parser([
        ['div', 'id', 'field-exports-commodities', 0],
        ['div', 'class', 'category_data subfield text', 0],
        ]))

    


    #src = ntpath.basename(soup.find('div', {'class': 'category_data attachment'}).find('audio')['src'])
    #urllib.request.urlretrieve('https://www.cia.gov/library/publications/the-world-factbook/attachments/audios/original/NP.mp3?1538604757', audio_base_dir_anthem + 'test.mp3')
   






#getPage('C:/Users/ashmit.khadka/Documents/Projects/mobile/project_orbis/tools/cia-twf-scraper/html/np.html',1)


for file in os.listdir(base_dir):
    filename = base_dir + '/' + file
    id += 1
    print(filename)
    getPage(filename, id)




with open('database/test.js', 'w') as outfile: 
    data = json.dumps(data)
    data = data.replace("\"require", "require")
    data = data.replace("')\"", "')")
    data = ('const db = '+ data + '\nexport default db')
    outfile.write(data)


#urllib.request.urlretrieve("https://www.cia.gov/library/publications/the-world-factbook/attachments/flags/NP-flag.gif", "assets/flags_2/00000001.gif")
