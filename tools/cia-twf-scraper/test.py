from bs4 import BeautifulSoup
import glob
import os
import json

base_dir = 'C:/Users/ashmit.khadka/Documents/Projects/Tools/cia-twf-scraper/html'
data = {}

def parser(query):
    result = soup
    for q in query:
        if len(q) > 2: result = (result.find_all(q[0], {q[1]: q[2]}))[q[3]]
        else: result = (result.find_all(q[0]))[q[1]]
        if result is None: return False
    return result.text.strip()      

def getPage(page):

    soup = BeautifulSoup(open(page,"r",encoding='utf-8'), "html.parser")  

    name = parser([
        ['div', 'class', 'question sas_med', 0],
        ['span', 'class', 'region', 0],
        ])
    
    data[name] = {}

    data[name]['introduction'] = (parser([
        ['div', 'class', 'category_data subfield text', 0],
        ['p', 0]
        ]))

    #Geography
    data[name]['location'] = parser([
        ['div', 'id', 'field-location',0],
        ['div', 'class', 'category_data subfield text',0],
        ])
    data[name]['area_total'] = parser([
        ['div', 'id', 'field-area',0],
        ['div', 'class', 'category_data subfield numeric',0],
        ['span', 'class', 'subfield-number',0]
        ])
    data[name]['area_land'] = parser([
        ['div', 'id', 'field-area',0], 
        ['div', 'class', 'category_data subfield numeric',1], 
        ['span', 'class', 'subfield-number',0]
        ])

    data[name]['area_water'] = parser([
        ['div', 'id', 'field-area',0],
        ['div', 'class', 'category_data subfield numeric',2],
        ['span', 'class', 'subfield-number',0],
        ])

    data[name]['climate'] = parser([
        ['div', 'id', 'field-climate',0],
        ['div', 'class', 'category_data subfield text',0],
        ])

    data[name]['terrain'] = parser([
        ['div', 'id', 'field-terrain',0],
        ['div', 'class', 'category_data subfield text',0],
        ])

    data[name]['natural_resources'] = parser([
        ['div', 'id', 'field-natural-resources',0],
        ['div', 'class', 'category_data subfield text',0],
        ])

    #Society
    data[name]['population'] = parser([
        ['div', 'id', 'field-population',0],
        ['div', 'class', 'category_data subfield numeric',0],
        ['span', 'class', 'subfield-number',0],
        ])

    data[name]['ethnic'] = parser([
        ['div', 'id', 'field-ethnic-groups',0],
        ['div', 'class', 'category_data subfield text',0],
        ])

    data[name]['language'] = parser([
        ['div', 'id', 'field-languages',0],
        ['div', 'class', 'category_data subfield text',0],
        ])

    data[name]['religion'] = parser([
        ['div', 'id', 'field-religions',0],
        ['div', 'class', 'category_data subfield text',0],
        ])

    data[name]['population_py'] = ''
    try:
        soup.find('img', {'alt' : 'population pyramid'})['src']
    except:
        data[name]['population_py'] = False

    data[name]['GDP_OER'] = parser([
        ['div', 'id', 'field-gdp-official-exchange-rate',0],
        ['div', 'class', 'category_data subfield numeric',0],
        ['span', 'class', 'subfield-number',0],
        ])

    data[name]['GDP_PP'] = parser([
        ['div', 'id', 'field-gdp-per-capita-ppp',0],
        ['div', 'class', 'category_data subfield historic',0],
        ['span', 'class', 'subfield-number',0],
        ])

    print(name)


soup = BeautifulSoup(open("sample.html","r",encoding='utf-8'), "html.parser")

getPage('C:/Users/ashmit.khadka/Documents/Projects/Tools/cia-twf-scraper/html/ae.html')

'''
for file in os.listdir(base_dir):
    filename = base_dir + '/' + file
    print(filename)
    getPage(filename)


with open('data.txt', 'w') as outfile:
    json.dump(data, outfile)
'''