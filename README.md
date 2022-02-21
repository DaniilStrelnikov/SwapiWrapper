# SwapiWrapper

Simple wrapper for swapi

**How to install**
`npm i swapi-ts-wrapper`

## Methods

`getPerson(id, search, isWookiee)`\
`getFilm(id, search, isWookiee)`\
`getPlanet(id, search, isWookiee)`\
`getSpecies(id, search, isWookiee)`\
`getStarship(id, search, isWookiee)`\
`getVehicle(id, search, isWookiee)`\

## Usage

    import  Swapi  from  'swapi-ts-wrapper'

    Swapi.getSpecies().then(data  =>  console.log(data))

returns

    {
      count: 37,
      next: 'https://swapi.dev/api/species/?page=2',
      previous: null,
      results: [
        {
          name: 'Human',
          classification: 'mammal',
          designation: 'sentient',
          average_height: '180',
          skin_colors: 'caucasian, black, asian, hispanic',
          hair_colors: 'blonde, brown, black, red',
          eye_colors: 'brown, blue, green, hazel, grey, amber',
          average_lifespan: '120',
          homeworld: 'https://swapi.dev/api/planets/9/',
          language: 'Galactic Basic',
          people: [Array],
          films: [Array],
          created: '2014-12-10T13:52:11.567000Z',
          edited: '2014-12-20T21:36:42.136000Z',
          url: 'https://swapi.dev/api/species/1/'
        },
        ...
      ]
    }

You can simply add an id and search by id

    Swapi.getSpecies(1).then(data  =>  console.log(data))

Also you can search by search filter

    Swapi.getPerson(undefined, 'Vader').then(data  =>  console.log(data))

And for wookies we have last param

    Swapi.getPerson(undefined, 'Vader', true).then(data  =>  console.log(data))

example

    {
    "oaoohuwhao":1,"whwokao":whhuanan,"akrcwohoahoohuc":whhuanan,"rcwochuanaoc":[{"whrascwo":"Drarcaoac Vrawaworc","acwoahrracao":"202","scracc":"136","acraahrc_oaooanoorc":"whoowhwo","corahwh_oaooanoorc":"ohacahaowo","worowo_oaooanoorc":"rowoananoooh","rhahrcaoac_roworarc":"41.9BBY","rrwowhwaworc":"scraanwo","acooscwoohoorcanwa":"acaoaoakc://cohraakah.wawoho/raakah/akanrawhwoaoc/1/","wwahanscc":["acaoaoakc://cohraakah.wawoho/raakah/wwahanscc/1/","acaoaoakc://cohraakah.wawoho/raakah/wwahanscc/2/","acaoaoakc://cohraakah.wawoho/raakah/wwahanscc/3/","acaoaoakc://cohraakah.wawoho/raakah/wwahanscc/6/"],"cakwooaahwoc":[],"howoacahoaanwoc":[],"caorarccacahakc":["acaoaoakc://cohraakah.wawoho/raakah/caorarccacahakc/13/"],"oarcworaaowowa":"2014-12-10T15:18:20.704000Z","wowaahaowowa":"2014-12-20T21:17:50.313000Z","hurcan":"acaoaoakc://cohraakah.wawoho/raakah/akwoooakanwo/4/"}]
    }
