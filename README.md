# To run the program : node Knowyourlocation.js > AboutYourLocation.pdf

Program to get general information about your location including distance from Airport, Railway Station
and list of nearby public amenities using browser automation through Puppeteer, here we scrap data from Google Maps.
Input location string is given by user and output is in "AboutYourLocation.pdf"

Output when input string (location) is "parimala trinity apartment, bangalore":
<code><pre>
Below you wil find the data regarding public amenities near your desired location: Parimala trinity Apartment, bangalore

        Approx. Distance from your location to Airport is 47.8 km
        

        Approx. Distance from your location to Railway Station is 20.5 km
        
Details of (top 5) Schools are below:
┌─────────┬──────────────────────────────────────────────────────┐
│ (index) │                         Name                         │
├─────────┼──────────────────────────────────────────────────────┤
│    0    │                'New Horizon Gurukul'                 │
│    1    │     'Orchids The International School, Panathur'     │
│    2    │ 'VIBGYOR Roots and Rise School, Panathur, Bengaluru' │
│    3    │             'Geetanjali Olympaid School'             │
│    4    │              'VIDYA VIKAS HIGH SCHOOL'               │
└─────────┴──────────────────────────────────────────────────────┘
Details of (top 5) Colleges are below:
┌─────────┬───────────────────────────────────────────┐
│ (index) │                   Name                    │
├─────────┼───────────────────────────────────────────┤
│    0    │   'New Horizon College of Engineering'    │
│    1    │               'Aet College'               │
│    2    │ 'Patel Institute of Science & Management' │
│    3    │      'The Oxford College of Science'      │
│    4    │    'New Horizon College Marathahalli'     │
└─────────┴───────────────────────────────────────────┘
Details of (top 5) Library are below:
┌─────────┬──────────────────────────────────────────────┐
│ (index) │                     Name                     │
├─────────┼──────────────────────────────────────────────┤
│    0    │ 'New Horizon College Of Engineering Library' │
│    1    │              'Hangout Library'               │
│    2    │                 'Just Books'                 │
│    3    │            'JustBooks Bellandur'             │
│    4    │             'Panchayat Library'              │
└─────────┴──────────────────────────────────────────────┘
Details of (top 5) Hospitals are below:
┌─────────┬───────────────────────────────────┐
│ (index) │               Name                │
├─────────┼───────────────────────────────────┤
│    0    │         'M.G.A Hospital'          │
│    1    │ 'Maya Multi Speciality Hospital'  │
│    2    │   'Lions Airport City Hospital'   │
│    3    │            'Hospital'             │
│    4    │ 'Aayug Multi Speciality Hospital' │
└─────────┴───────────────────────────────────┘
Details of (top 5) malls & shopping center are below:
┌─────────┬──────────────────────┐
│ (index) │         Name         │
├─────────┼──────────────────────┤
│    0    │   'Kemp Fort Mall'   │
│    1    │ 'Bangalore Central'  │
│    2    │ 'Phoenix Marketcity' │
│    3    │   'Virginia Mall'    │
│    4    │  'Park Square mall'  │
└─────────┴──────────────────────┘
Details of (top 5) restaurants are below:
┌─────────┬─────────────────────────┐
│ (index) │          Name           │
├─────────┼─────────────────────────┤
│    0    │        'AJ-125'         │
│    1    │ 'Zafron the resto cafe' │
│    2    │ 'Jalsa Gold Restaurant' │
│    3    │         'Nook'          │
│    4    │ 'Float Rooftop Lounge'  │
└─────────┴─────────────────────────┘
Details of (top 5) Bus stand are below:
┌─────────┬───────────────────────┐
│ (index) │         Name          │
├─────────┼───────────────────────┤
│    0    │ 'New Horizon College' │
│    1    │   'Kadabisanahalli'   │
│    2    │   'Kadabisanahalli'   │
│    3    │      'Panathur'       │
│    4    │   'TSRTC Bus Stop'    │
└─────────┴───────────────────────┘
Details of (top 5) Parks are below:
┌─────────┬─────────────────┐
│ (index) │      Name       │
├─────────┼─────────────────┤
│    0    │ "Jogger's Park" │
│    1    │ 'Nisarga Park'  │
│    2    │     'Park'      │
│    3    │ 'Quarters Park' │
│    4    │ 'Jogging Park'  │
└─────────┴─────────────────┘
</code></pre>
