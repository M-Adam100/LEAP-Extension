const restrictedBrands = [
    {
        "Name": "inc."
    },
    {
        "Name": "mpdirect"
    },
    {
        "Name": "plushland"
    },
    {
        "Name": "1 Body"
    },
    {
        "Name": "1-2-3 taking a bath"
    },
    {
        "Name": "100% pure"
    },
    {
        "Name": "1Easylife"
    },
    {
        "Name": "21st century"
    },
    {
        "Name": "21st century healthcare"
    },
    {
        "Name": "220 volt electronics"
    },
    {
        "Name": "2nd skin (by spenco)"
    },
    {
        "Name": "2xhome"
    },
    {
        "Name": "3 Musketeers"
    },
    {
        "Name": "360 cookware"
    },
    {
        "Name": "3:00 pm"
    },
    {
        "Name": "3d lite"
    },
    {
        "Name": "3d-one"
    },
    {
        "Name": "3dflip"
    },
    {
        "Name": "3dmini"
    },
    {
        "Name": "3dtote"
    },
    {
        "Name": "3dtwo"
    },
    {
        "Name": "3dzyre"
    },
    {
        "Name": "3M"
    },
    {
        "Name": "3M Littmann"
    },
    {
        "Name": "3skulls paintball"
    },
    {
        "Name": "47 BRAND"
    },
    {
        "Name": "5 Gum"
    },
    {
        "Name": "9lives"
    },
    {
        "Name": "A Mug To Keep"
    },
    {
        "Name": "A Mug To Keep TM"
    },
    {
        "Name": "A World of Deals"
    },
    {
        "Name": "a&e cage"
    },
    {
        "Name": "abani"
    },
    {
        "Name": "abba patio"
    },
    {
        "Name": "Abercrombie & Fitch"
    },
    {
        "Name": "absorbine"
    },
    {
        "Name": "accessoryxpert"
    },
    {
        "Name": "ace"
    },
    {
        "Name": "acebayou"
    },
    {
        "Name": "Acer"
    },
    {
        "Name": "acme united corporat"
    },
    {
        "Name": "action"
    },
    {
        "Name": "activeflow"
    },
    {
        "Name": "activision"
    },
    {
        "Name": "activision inc."
    },
    {
        "Name": "acu-hoop"
    },
    {
        "Name": "adecco"
    },
    {
        "Name": "aden & anais"
    },
    {
        "Name": "aden + anais"
    },
    {
        "Name": "Adidas"
    },
    {
        "Name": "adidas Originals"
    },
    {
        "Name": "adobe"
    },
    {
        "Name": "adorn home essentials"
    },
    {
        "Name": "adspec"
    },
    {
        "Name": "Adt"
    },
    {
        "Name": "adventure force"
    },
    {
        "Name": "advil"
    },
    {
        "Name": "Aerobie"
    },
    {
        "Name": "Aerocore"
    },
    {
        "Name": "africa's best"
    },
    {
        "Name": "After Inked"
    },
    {
        "Name": "agptek"
    },
    {
        "Name": "Ahava"
    },
    {
        "Name": "Aidance Skincare"
    },
    {
        "Name": "aim distribution"
    },
    {
        "Name": "Air Dragon"
    },
    {
        "Name": "air force one air conditioning"
    },
    {
        "Name": "air locker"
    },
    {
        "Name": "aircraft technical publishers"
    },
    {
        "Name": "airplus"
    },
    {
        "Name": "airwaves"
    },
    {
        "Name": "akg"
    },
    {
        "Name": "akg acoustics"
    },
    {
        "Name": "akg pro audio"
    },
    {
        "Name": "alaffia"
    },
    {
        "Name": "alaska airlines"
    },
    {
        "Name": "alcochill"
    },
    {
        "Name": "ALEKO"
    },
    {
        "Name": "alessi"
    },
    {
        "Name": "aleve"
    },
    {
        "Name": "alex perez"
    },
    {
        "Name": "Alex Toys"
    },
    {
        "Name": "Alexander McQueen"
    },
    {
        "Name": "alfresco heating"
    },
    {
        "Name": "Align"
    },
    {
        "Name": "all balls"
    },
    {
        "Name": "all star dogs"
    },
    {
        "Name": "All-Clad"
    },
    {
        "Name": "all-in-one"
    },
    {
        "Name": "alldays"
    },
    {
        "Name": "allegra"
    },
    {
        "Name": "allflex"
    },
    {
        "Name": "allibert home"
    },
    {
        "Name": "allibert outdoor"
    },
    {
        "Name": "allied precision industries"
    },
    {
        "Name": "Allieroo"
    },
    {
        "Name": "alm productions"
    },
    {
        "Name": "Alo"
    },
    {
        "Name": "Alonea"
    },
    {
        "Name": "Altoids"
    },
    {
        "Name": "Always"
    },
    {
        "Name": "always alldays"
    },
    {
        "Name": "always discreet"
    },
    {
        "Name": "always envive"
    },
    {
        "Name": "ambi pur"
    },
    {
        "Name": "ambi pur/febreze"
    },
    {
        "Name": "AMCO"
    },
    {
        "Name": "American Angler"
    },
    {
        "Name": "american classics"
    },
    {
        "Name": "american colloid company"
    },
    {
        "Name": "american colloid companyã\\u0082â®"
    },
    {
        "Name": "american colloid companyâ®"
    },
    {
        "Name": "American Eagle Outfitters"
    },
    {
        "Name": "AMERICAN GIRL"
    },
    {
        "Name": "american needle"
    },
    {
        "Name": "american standard"
    },
    {
        "Name": "american welding society"
    },
    {
        "Name": "americas drive-in corp. / sonic corp. & subsidiaries"
    },
    {
        "Name": "ames walker"
    },
    {
        "Name": "amiclubwear.com"
    },
    {
        "Name": "aminco"
    },
    {
        "Name": "AMMENS"
    },
    {
        "Name": "ammex"
    },
    {
        "Name": "Amope"
    },
    {
        "Name": "amscan"
    },
    {
        "Name": "amvolt"
    },
    {
        "Name": "amway corporation"
    },
    {
        "Name": "amybug's attic"
    },
    {
        "Name": "analogman guitar effects"
    },
    {
        "Name": "anastasia beverly"
    },
    {
        "Name": "anastasia beverly hills"
    },
    {
        "Name": "Ancheer"
    },
    {
        "Name": "andis"
    },
    {
        "Name": "angel soft"
    },
    {
        "Name": "angela laframboise"
    },
    {
        "Name": "animal supply company"
    },
    {
        "Name": "animed"
    },
    {
        "Name": "Anki"
    },
    {
        "Name": "ANN WILLIAMS GROUP"
    },
    {
        "Name": "Anna Sui"
    },
    {
        "Name": "annenberg media"
    },
    {
        "Name": "annin flagmakers"
    },
    {
        "Name": "anolon"
    },
    {
        "Name": "ansr"
    },
    {
        "Name": "antikal"
    },
    {
        "Name": "antler king"
    },
    {
        "Name": "antler king trophy prdct"
    },
    {
        "Name": "anusol"
    },
    {
        "Name": "anyray"
    },
    {
        "Name": "aosom"
    },
    {
        "Name": "Apara"
    },
    {
        "Name": "Apec"
    },
    {
        "Name": "APEX TOOL GROUP"
    },
    {
        "Name": "api"
    },
    {
        "Name": "Apple"
    },
    {
        "Name": "aqua clear"
    },
    {
        "Name": "aqua culture"
    },
    {
        "Name": "aqua dog"
    },
    {
        "Name": "aqua signal"
    },
    {
        "Name": "Aquafina"
    },
    {
        "Name": "aquaphor"
    },
    {
        "Name": "aquasol"
    },
    {
        "Name": "AquaSpa"
    },
    {
        "Name": "Aquatopia"
    },
    {
        "Name": "ar15.com"
    },
    {
        "Name": "aravon"
    },
    {
        "Name": "Arctic Chill"
    },
    {
        "Name": "areo home"
    },
    {
        "Name": "Ariel"
    },
    {
        "Name": "ARKSEN"
    },
    {
        "Name": "ARM & HAMMER"
    },
    {
        "Name": "armani"
    },
    {
        "Name": "Armor All"
    },
    {
        "Name": "arres"
    },
    {
        "Name": "arrow"
    },
    {
        "Name": "arrow shed"
    },
    {
        "Name": "Art Naturals"
    },
    {
        "Name": "art of shaving"
    },
    {
        "Name": "artcraft lighting"
    },
    {
        "Name": "artika"
    },
    {
        "Name": "ashleigh talbot"
    },
    {
        "Name": "askorubeads"
    },
    {
        "Name": "Aspen pet"
    },
    {
        "Name": "assassin's creed"
    },
    {
        "Name": "AstrA"
    },
    {
        "Name": "astro pneumatic tool"
    },
    {
        "Name": "astro pneumatic tool co."
    },
    {
        "Name": "Asus"
    },
    {
        "Name": "atari"
    },
    {
        "Name": "atlantic research and marketing (a.r.m.s.)"
    },
    {
        "Name": "atomic"
    },
    {
        "Name": "attwood"
    },
    {
        "Name": "atvimports"
    },
    {
        "Name": "Audio Technica"
    },
    {
        "Name": "augason farms"
    },
    {
        "Name": "augusta sportswear"
    },
    {
        "Name": "auromere"
    },
    {
        "Name": "ausonia"
    },
    {
        "Name": "AUSSIE"
    },
    {
        "Name": "austin city limits/klru"
    },
    {
        "Name": "Australian Gold"
    },
    {
        "Name": "australian made campaign limited"
    },
    {
        "Name": "authentic brands group llc"
    },
    {
        "Name": "autoline industries"
    },
    {
        "Name": "Ava"
    },
    {
        "Name": "Avalon Organics"
    },
    {
        "Name": "aveeno"
    },
    {
        "Name": "Avenger"
    },
    {
        "Name": "avery"
    },
    {
        "Name": "Avon"
    },
    {
        "Name": "axis"
    },
    {
        "Name": "Axis International"
    },
    {
        "Name": "ayudã­n"
    },
    {
        "Name": "az"
    },
    {
        "Name": "Azar Displays"
    },
    {
        "Name": "azo"
    },
    {
        "Name": "ã\\u0091a pancha"
    },
    {
        "Name": "b&g beautiful gardener"
    },
    {
        "Name": "b. c. broncos"
    },
    {
        "Name": "Babe lash"
    },
    {
        "Name": "baby alive"
    },
    {
        "Name": "Baby Bullet"
    },
    {
        "Name": "baby fanatic"
    },
    {
        "Name": "baby moments"
    },
    {
        "Name": "baby pixel"
    },
    {
        "Name": "baby shade"
    },
    {
        "Name": "Baby Touch"
    },
    {
        "Name": "Baby Trend"
    },
    {
        "Name": "BabyBjorn"
    },
    {
        "Name": "babybum"
    },
    {
        "Name": "babyliss"
    },
    {
        "Name": "BaBylissPRO"
    },
    {
        "Name": "Bacati"
    },
    {
        "Name": "BackJoy"
    },
    {
        "Name": "bad air spongeâ®"
    },
    {
        "Name": "bad boy brands"
    },
    {
        "Name": "bad monkey productions"
    },
    {
        "Name": "Badger Basket"
    },
    {
        "Name": "Baire Bottles"
    },
    {
        "Name": "Balance"
    },
    {
        "Name": "balancefrom"
    },
    {
        "Name": "Baldessarini"
    },
    {
        "Name": "Balega"
    },
    {
        "Name": "Bali"
    },
    {
        "Name": "balisto"
    },
    {
        "Name": "Ballarini"
    },
    {
        "Name": "bally pinball fun"
    },
    {
        "Name": "balm cosmetics"
    },
    {
        "Name": "BanDai"
    },
    {
        "Name": "barbar"
    },
    {
        "Name": "barbie"
    },
    {
        "Name": "bare essentials cosmetics"
    },
    {
        "Name": "baretraps"
    },
    {
        "Name": "Bargain Max Decals"
    },
    {
        "Name": "bargain paradise corp"
    },
    {
        "Name": "barnett research and computer imaging"
    },
    {
        "Name": "Baseboard Buddy"
    },
    {
        "Name": "Baume & Mercier"
    },
    {
        "Name": "Baxter"
    },
    {
        "Name": "BAYER"
    },
    {
        "Name": "bayou classic"
    },
    {
        "Name": "BÉABA"
    },
    {
        "Name": "beach body"
    },
    {
        "Name": "Bean Products"
    },
    {
        "Name": "bears vs babies"
    },
    {
        "Name": "Beats"
    },
    {
        "Name": "Beats By Dre"
    },
    {
        "Name": "BEAU JARDIN"
    },
    {
        "Name": "Beautify"
    },
    {
        "Name": "Beautyrest"
    },
    {
        "Name": "bedding by treasure2 (treasure2)"
    },
    {
        "Name": "beginagain"
    },
    {
        "Name": "beistle"
    },
    {
        "Name": "Belkin"
    },
    {
        "Name": "bell helicopter textron inc."
    },
    {
        "Name": "bella"
    },
    {
        "Name": "belleze"
    },
    {
        "Name": "Bellezza"
    },
    {
        "Name": "Belovedkai"
    },
    {
        "Name": "bemis"
    },
    {
        "Name": "Benchmade"
    },
    {
        "Name": "Benefiber"
    },
    {
        "Name": "bengoo"
    },
    {
        "Name": "bentwood bassinet"
    },
    {
        "Name": "berg bag company"
    },
    {
        "Name": "berghoff"
    },
    {
        "Name": "best buy bones"
    },
    {
        "Name": "Best Choice Products"
    },
    {
        "Name": "best friends by sheri"
    },
    {
        "Name": "best gate"
    },
    {
        "Name": "best of best"
    },
    {
        "Name": "best view"
    },
    {
        "Name": "BESTOMZ"
    },
    {
        "Name": "better homes & gardens"
    },
    {
        "Name": "Better Housewares"
    },
    {
        "Name": "better life"
    },
    {
        "Name": "betterbody foods"
    },
    {
        "Name": "Beurer"
    },
    {
        "Name": "bibbity"
    },
    {
        "Name": "BiC"
    },
    {
        "Name": "Big Boy"
    },
    {
        "Name": "Big G"
    },
    {
        "Name": "Big Joe"
    },
    {
        "Name": "Big League Chew"
    },
    {
        "Name": "Big Mouth"
    },
    {
        "Name": "Big Red"
    },
    {
        "Name": "bigbigmall"
    },
    {
        "Name": "bigeloil"
    },
    {
        "Name": "bill lawrence products"
    },
    {
        "Name": "bill owen-cowboy artist"
    },
    {
        "Name": "Billy Jealousy"
    },
    {
        "Name": "bilobil"
    },
    {
        "Name": "bilt-rite orthr. & safety inc"
    },
    {
        "Name": "bimeda"
    },
    {
        "Name": "binitiva"
    },
    {
        "Name": "bino products llc"
    },
    {
        "Name": "Bintopia"
    },
    {
        "Name": "bio pureoils"
    },
    {
        "Name": "bio-therapeutic"
    },
    {
        "Name": "Bioderma"
    },
    {
        "Name": "Bioganix"
    },
    {
        "Name": "BIOLAGE"
    },
    {
        "Name": "biomat"
    },
    {
        "Name": "biore"
    },
    {
        "Name": "Birkenstock"
    },
    {
        "Name": "bitty boomers"
    },
    {
        "Name": "Black & Decker"
    },
    {
        "Name": "BLACK DIAMOND"
    },
    {
        "Name": "black mountain"
    },
    {
        "Name": "black off"
    },
    {
        "Name": "blackpoint engineering llc"
    },
    {
        "Name": "blackweb"
    },
    {
        "Name": "blanco"
    },
    {
        "Name": "bleacher creatures"
    },
    {
        "Name": "Blend-a-dent"
    },
    {
        "Name": "Blend-A-med"
    },
    {
        "Name": "blendax"
    },
    {
        "Name": "blenderbottle"
    },
    {
        "Name": "blinc"
    },
    {
        "Name": "BLISS"
    },
    {
        "Name": "blitzburgh sports"
    },
    {
        "Name": "blizzard entertainment"
    },
    {
        "Name": "blondo"
    },
    {
        "Name": "bloomberg l.p."
    },
    {
        "Name": "Blooming Baby"
    },
    {
        "Name": "Blooming Bath"
    },
    {
        "Name": "blue buffalo"
    },
    {
        "Name": "Blue Diamond Almonds"
    },
    {
        "Name": "blue dolphin distributors"
    },
    {
        "Name": "blue wave"
    },
    {
        "Name": "boba"
    },
    {
        "Name": "BODUM"
    },
    {
        "Name": "body back"
    },
    {
        "Name": "Body Glove"
    },
    {
        "Name": "body shop"
    },
    {
        "Name": "boehringer-mastitis tubes"
    },
    {
        "Name": "boelter"
    },
    {
        "Name": "boelter brands"
    },
    {
        "Name": "bogs"
    },
    {
        "Name": "BOGZON"
    },
    {
        "Name": "Bold"
    },
    {
        "Name": "bond mfg p"
    },
    {
        "Name": "bondhus corp."
    },
    {
        "Name": "bonide"
    },
    {
        "Name": "bonide products inc p"
    },
    {
        "Name": "bonjour"
    },
    {
        "Name": "bonnie's plants"
    },
    {
        "Name": "BonNoces"
    },
    {
        "Name": "bonux"
    },
    {
        "Name": "Booda"
    },
    {
        "Name": "Boomer"
    },
    {
        "Name": "boone"
    },
    {
        "Name": "Boppin Baby"
    },
    {
        "Name": "boppy"
    },
    {
        "Name": "BORGHESE"
    },
    {
        "Name": "Born Free"
    },
    {
        "Name": "bosch"
    },
    {
        "Name": "Bose"
    },
    {
        "Name": "boss"
    },
    {
        "Name": "boss gloves"
    },
    {
        "Name": "boss manufacturing p"
    },
    {
        "Name": "boss office products"
    },
    {
        "Name": "botanic choice"
    },
    {
        "Name": "bottle your love"
    },
    {
        "Name": "Bounce"
    },
    {
        "Name": "Bounty"
    },
    {
        "Name": "bovidr laboratories"
    },
    {
        "Name": "bra baby"
    },
    {
        "Name": "bradley caldwell inc"
    },
    {
        "Name": "bragg"
    },
    {
        "Name": "bragg live food products (haddon house is our distributor)"
    },
    {
        "Name": "braggs"
    },
    {
        "Name": "Brait"
    },
    {
        "Name": "Bramli"
    },
    {
        "Name": "branford"
    },
    {
        "Name": "brass bullet"
    },
    {
        "Name": "Braun"
    },
    {
        "Name": "braun oral-b"
    },
    {
        "Name": "Bravo Sports"
    },
    {
        "Name": "brax"
    },
    {
        "Name": "brax ltd"
    },
    {
        "Name": "Breeze"
    },
    {
        "Name": "brenda franklin"
    },
    {
        "Name": "BREVILLE"
    },
    {
        "Name": "breyer"
    },
    {
        "Name": "Brian Smith"
    },
    {
        "Name": "briarwood"
    },
    {
        "Name": "briarwood lane"
    },
    {
        "Name": "brica"
    },
    {
        "Name": "Brieftons"
    },
    {
        "Name": "Bright Starts"
    },
    {
        "Name": "brio"
    },
    {
        "Name": "brita"
    },
    {
        "Name": "Britax"
    },
    {
        "Name": "british phonographic industry limited"
    },
    {
        "Name": "broad bay cotton"
    },
    {
        "Name": "broadway basketeers"
    },
    {
        "Name": "broan-nutone"
    },
    {
        "Name": "brock beauty"
    },
    {
        "Name": "brondell"
    },
    {
        "Name": "bronze gallery"
    },
    {
        "Name": "brooks"
    },
    {
        "Name": "Brookstone"
    },
    {
        "Name": "brother"
    },
    {
        "Name": "bruce lee enterprises"
    },
    {
        "Name": "BRUNO BANANI"
    },
    {
        "Name": "bruntmor"
    },
    {
        "Name": "Brussel's Bonsai"
    },
    {
        "Name": "brybelly"
    },
    {
        "Name": "brylane home"
    },
    {
        "Name": "bsi"
    },
    {
        "Name": "bsi products"
    },
    {
        "Name": "btexpert"
    },
    {
        "Name": "BTG"
    },
    {
        "Name": "bti tools"
    },
    {
        "Name": "Bubble Tape"
    },
    {
        "Name": "bubblebum"
    },
    {
        "Name": "buddy & friends"
    },
    {
        "Name": "buena vista home entertainment"
    },
    {
        "Name": "buffalo bills"
    },
    {
        "Name": "bug me video inc."
    },
    {
        "Name": "bully"
    },
    {
        "Name": "bulova"
    },
    {
        "Name": "bumbleride inc."
    },
    {
        "Name": "Bump"
    },
    {
        "Name": "Burberry"
    },
    {
        "Name": "Burt'S Bees"
    },
    {
        "Name": "bush industries"
    },
    {
        "Name": "bushnell performance optics and tasco sales pty ltd."
    },
    {
        "Name": "butfulake"
    },
    {
        "Name": "butter London"
    },
    {
        "Name": "Butterfly"
    },
    {
        "Name": "buxom buxom"
    },
    {
        "Name": "bwthynbach"
    },
    {
        "Name": "c & i collectables"
    },
    {
        "Name": "C-color"
    },
    {
        "Name": "C.CTN"
    },
    {
        "Name": "c.r. laurence"
    },
    {
        "Name": "Cable Matters"
    },
    {
        "Name": "cacit"
    },
    {
        "Name": "cafe bustelo"
    },
    {
        "Name": "cake boss"
    },
    {
        "Name": "Calcium"
    },
    {
        "Name": "california costumes"
    },
    {
        "Name": "California Straws"
    },
    {
        "Name": "Callaway"
    },
    {
        "Name": "Calphalon"
    },
    {
        "Name": "calphalonâ®"
    },
    {
        "Name": "CALVIN KLEIN"
    },
    {
        "Name": "Camay"
    },
    {
        "Name": "cambay linens"
    },
    {
        "Name": "cameraquest"
    },
    {
        "Name": "camp chef"
    },
    {
        "Name": "campus images"
    },
    {
        "Name": "canadian standards association"
    },
    {
        "Name": "cane & austin"
    },
    {
        "Name": "CANON"
    },
    {
        "Name": "canon cameras"
    },
    {
        "Name": "canopy couture"
    },
    {
        "Name": "canyon dancer motorcycle products"
    },
    {
        "Name": "capezio"
    },
    {
        "Name": "car-freshner corporation"
    },
    {
        "Name": "caravelle designed by bulova"
    },
    {
        "Name": "caraya"
    },
    {
        "Name": "cardinal health"
    },
    {
        "Name": "cards against humanity"
    },
    {
        "Name": "cards against humanity llc"
    },
    {
        "Name": "caresâ®"
    },
    {
        "Name": "CARGO"
    },
    {
        "Name": "Carhartt"
    },
    {
        "Name": "caricia"
    },
    {
        "Name": "carmen's vintage collections"
    },
    {
        "Name": "carmix-gps"
    },
    {
        "Name": "carolina herrera"
    },
    {
        "Name": "carrington farms"
    },
    {
        "Name": "carter's"
    },
    {
        "Name": "carterâ\\u0080\\u0099s"
    },
    {
        "Name": "Cartier"
    },
    {
        "Name": "cascade"
    },
    {
        "Name": "Cascade Mountain Tech"
    },
    {
        "Name": "cascadian farm"
    },
    {
        "Name": "casey's distributing"
    },
    {
        "Name": "CASIO"
    },
    {
        "Name": "casper sleep"
    },
    {
        "Name": "castle creations"
    },
    {
        "Name": "cat tails"
    },
    {
        "Name": "cat-sip"
    },
    {
        "Name": "catan"
    },
    {
        "Name": "CAUDALIE"
    },
    {
        "Name": "CBD Daily"
    },
    {
        "Name": "cc boardds"
    },
    {
        "Name": "Cel-Fi"
    },
    {
        "Name": "celebrate a holiday"
    },
    {
        "Name": "Celebrations"
    },
    {
        "Name": "celeep"
    },
    {
        "Name": "Celestron"
    },
    {
        "Name": "central - super pet/pets intl"
    },
    {
        "Name": "century novelty"
    },
    {
        "Name": "chalk & vermilion fine arts"
    },
    {
        "Name": "champion"
    },
    {
        "Name": "champion (not champion power equipment)"
    },
    {
        "Name": "champion barbell"
    },
    {
        "Name": "champion cutting tool"
    },
    {
        "Name": "champion life"
    },
    {
        "Name": "champion sports"
    },
    {
        "Name": "champion treasures"
    },
    {
        "Name": "championship home accessories"
    },
    {
        "Name": "CHANEL"
    },
    {
        "Name": "changeaway"
    },
    {
        "Name": "channie's brand"
    },
    {
        "Name": "Char-Broil"
    },
    {
        "Name": "charles cook"
    },
    {
        "Name": "charles products"
    },
    {
        "Name": "Charmin"
    },
    {
        "Name": "chaz dean studio"
    },
    {
        "Name": "Cheer"
    },
    {
        "Name": "chef land"
    },
    {
        "Name": "chef's cuisine"
    },
    {
        "Name": "cheff"
    },
    {
        "Name": "Chefman"
    },
    {
        "Name": "Chemex"
    },
    {
        "Name": "chevron"
    },
    {
        "Name": "CHI"
    },
    {
        "Name": "Chicco"
    },
    {
        "Name": "Chico"
    },
    {
        "Name": "Child of Mine"
    },
    {
        "Name": "chill-o"
    },
    {
        "Name": "Chloé"
    },
    {
        "Name": "chocolate fountains"
    },
    {
        "Name": "chosen foods"
    },
    {
        "Name": "Christina Aguilera"
    },
    {
        "Name": "Chuckit!"
    },
    {
        "Name": "church"
    },
    {
        "Name": "Cierto"
    },
    {
        "Name": "ciftoys"
    },
    {
        "Name": "CINDY CRAWFORD"
    },
    {
        "Name": "cinedigm"
    },
    {
        "Name": "Circulon"
    },
    {
        "Name": "circus by sam edelman"
    },
    {
        "Name": "cisco"
    },
    {
        "Name": "cisco independent"
    },
    {
        "Name": "CITIZEN"
    },
    {
        "Name": "Clairol"
    },
    {
        "Name": "Clairol Professional"
    },
    {
        "Name": "clairsonic"
    },
    {
        "Name": "Claritin"
    },
    {
        "Name": "clarks shoes"
    },
    {
        "Name": "classic accessories"
    },
    {
        "Name": "classic video l.l.c."
    },
    {
        "Name": "clayful creations"
    },
    {
        "Name": "clean & clear"
    },
    {
        "Name": "ClearMax"
    },
    {
        "Name": "clementine design"
    },
    {
        "Name": "clicgear"
    },
    {
        "Name": "Click N' Play"
    },
    {
        "Name": "climb cart"
    },
    {
        "Name": "CLINIQUE"
    },
    {
        "Name": "cloanto italia srl"
    },
    {
        "Name": "cloche couture trademark"
    },
    {
        "Name": "clorox"
    },
    {
        "Name": "clorox petcare"
    },
    {
        "Name": "Cloud 9"
    },
    {
        "Name": "Cloud B"
    },
    {
        "Name": "CloudPets"
    },
    {
        "Name": "cmaxer"
    },
    {
        "Name": "co-sleeper"
    },
    {
        "Name": "CO-Z"
    },
    {
        "Name": "Coach"
    },
    {
        "Name": "cobra electronics"
    },
    {
        "Name": "cold steel"
    },
    {
        "Name": "coldwater creek inc."
    },
    {
        "Name": "Coleman"
    },
    {
        "Name": "colgate"
    },
    {
        "Name": "college covers"
    },
    {
        "Name": "college flags and banners co."
    },
    {
        "Name": "college team trains"
    },
    {
        "Name": "collegiate pulse"
    },
    {
        "Name": "colnagoâ®"
    },
    {
        "Name": "color doctor"
    },
    {
        "Name": "Color WOW"
    },
    {
        "Name": "colorama"
    },
    {
        "Name": "Colorbasket"
    },
    {
        "Name": "ColorpHlex"
    },
    {
        "Name": "colosseum athletics"
    },
    {
        "Name": "COLUMBIA"
    },
    {
        "Name": "combat brand"
    },
    {
        "Name": "combat brands"
    },
    {
        "Name": "combat sports"
    },
    {
        "Name": "COMET"
    },
    {
        "Name": "Comfify"
    },
    {
        "Name": "comfort height"
    },
    {
        "Name": "comfort products"
    },
    {
        "Name": "comfort research"
    },
    {
        "Name": "Comfort Zone"
    },
    {
        "Name": "comfortme"
    },
    {
        "Name": "comfy cubs"
    },
    {
        "Name": "comfy feet"
    },
    {
        "Name": "Comie"
    },
    {
        "Name": "command"
    },
    {
        "Name": "community coffee"
    },
    {
        "Name": "comotomo"
    },
    {
        "Name": "Competition Clutch"
    },
    {
        "Name": "Comtrex"
    },
    {
        "Name": "COMWINN"
    },
    {
        "Name": "concept one accessories"
    },
    {
        "Name": "conixo"
    },
    {
        "Name": "contemporary home living"
    },
    {
        "Name": "contender fight sports"
    },
    {
        "Name": "continental airlines"
    },
    {
        "Name": "continental enterprises"
    },
    {
        "Name": "contour brands"
    },
    {
        "Name": "contours baby"
    },
    {
        "Name": "Converse"
    },
    {
        "Name": "cool air"
    },
    {
        "Name": "cool mobility - johanson nominees pty."
    },
    {
        "Name": "Coola"
    },
    {
        "Name": "copco"
    },
    {
        "Name": "coquetry clubwear"
    },
    {
        "Name": "CoreTex"
    },
    {
        "Name": "CorningWare"
    },
    {
        "Name": "Cornucopia"
    },
    {
        "Name": "cosanti originals by paolo soleri"
    },
    {
        "Name": "cosmic pet"
    },
    {
        "Name": "cosmic pet products"
    },
    {
        "Name": "costco"
    },
    {
        "Name": "costume agent"
    },
    {
        "Name": "COTTON CRAFT"
    },
    {
        "Name": "cottonelle"
    },
    {
        "Name": "couch coat"
    },
    {
        "Name": "cougar"
    },
    {
        "Name": "counterart"
    },
    {
        "Name": "country collectibles"
    },
    {
        "Name": "Cover Girl"
    },
    {
        "Name": "Crabtree & Evelyn"
    },
    {
        "Name": "cradler"
    },
    {
        "Name": "Craft-Tastic"
    },
    {
        "Name": "craftmade"
    },
    {
        "Name": "CRAFTSMAN"
    },
    {
        "Name": "crane usa"
    },
    {
        "Name": "crank chop"
    },
    {
        "Name": "Crayola"
    },
    {
        "Name": "crazy aaron's"
    },
    {
        "Name": "creative carvings by monte"
    },
    {
        "Name": "creative converting"
    },
    {
        "Name": "creative knitwear"
    },
    {
        "Name": "creative outdoor distributor / cod usa"
    },
    {
        "Name": "Creativity For Kids"
    },
    {
        "Name": "creeks end crochet"
    },
    {
        "Name": "creme savers"
    },
    {
        "Name": "crest"
    },
    {
        "Name": "cricut"
    },
    {
        "Name": "criswell embroidery & design"
    },
    {
        "Name": "crock-pot"
    },
    {
        "Name": "Crocs"
    },
    {
        "Name": "crosman"
    },
    {
        "Name": "Crow Canyon Home"
    },
    {
        "Name": "crucial vacuum"
    },
    {
        "Name": "CS"
    },
    {
        "Name": "cse games"
    },
    {
        "Name": "csi"
    },
    {
        "Name": "cuffdadyy"
    },
    {
        "Name": "cufflinks"
    },
    {
        "Name": "Cuisinart"
    },
    {
        "Name": "cult cosmetics"
    },
    {
        "Name": "Cupture"
    },
    {
        "Name": "Curad"
    },
    {
        "Name": "Curver"
    },
    {
        "Name": "Cushy Form"
    },
    {
        "Name": "cushy straps"
    },
    {
        "Name": "Custpromo"
    },
    {
        "Name": "cut-heal"
    },
    {
        "Name": "cutco cutlery corporation"
    },
    {
        "Name": "cutecolors.com"
    },
    {
        "Name": "cynthia dakin"
    },
    {
        "Name": "Cypress Collectibles"
    },
    {
        "Name": "d'addario"
    },
    {
        "Name": "daddy knows best"
    },
    {
        "Name": "DadGear"
    },
    {
        "Name": "dallas cowboys"
    },
    {
        "Name": "Dandy Blend"
    },
    {
        "Name": "danes-r-us great dane & pet art"
    },
    {
        "Name": "daniel bingham design studio"
    },
    {
        "Name": "danielson"
    },
    {
        "Name": "danner"
    },
    {
        "Name": "danner manufacturing"
    },
    {
        "Name": "danskin"
    },
    {
        "Name": "danworkshop.com"
    },
    {
        "Name": "dap"
    },
    {
        "Name": "darice"
    },
    {
        "Name": "darn tough"
    },
    {
        "Name": "Dash"
    },
    {
        "Name": "dash/daz"
    },
    {
        "Name": "dassault systemes s.a."
    },
    {
        "Name": "data professionals"
    },
    {
        "Name": "dave fant company of arkansas inc"
    },
    {
        "Name": "dave's discount motors"
    },
    {
        "Name": "DAVEY"
    },
    {
        "Name": "david barton"
    },
    {
        "Name": "david navarro"
    },
    {
        "Name": "davidson photography"
    },
    {
        "Name": "Dawn"
    },
    {
        "Name": "Dax"
    },
    {
        "Name": "day & night"
    },
    {
        "Name": "dã©kor (diaper dekor)"
    },
    {
        "Name": "db sonic"
    },
    {
        "Name": "DDF"
    },
    {
        "Name": "ddi"
    },
    {
        "Name": "Dead Sea"
    },
    {
        "Name": "deborah lippman"
    },
    {
        "Name": "decker manufacturing"
    },
    {
        "Name": "decobros or deco brothers"
    },
    {
        "Name": "decorx"
    },
    {
        "Name": "deflecto"
    },
    {
        "Name": "Dell"
    },
    {
        "Name": "della"
    },
    {
        "Name": "delphi technologies"
    },
    {
        "Name": "DELTA CHILDREN"
    },
    {
        "Name": "Delta Faucet"
    },
    {
        "Name": "deluxe comfort"
    },
    {
        "Name": "Demeyere"
    },
    {
        "Name": "denco sports luggage"
    },
    {
        "Name": "denis wick"
    },
    {
        "Name": "dennis east"
    },
    {
        "Name": "dental expert"
    },
    {
        "Name": "DENY Designs"
    },
    {
        "Name": "department 56 accessory"
    },
    {
        "Name": "derma e"
    },
    {
        "Name": "Dermalogica"
    },
    {
        "Name": "Dermorganic"
    },
    {
        "Name": "des"
    },
    {
        "Name": "desert equestrian inc"
    },
    {
        "Name": "design toscano"
    },
    {
        "Name": "designer habitat"
    },
    {
        "Name": "destineer"
    },
    {
        "Name": "Detoxify"
    },
    {
        "Name": "devacurl"
    },
    {
        "Name": "devilbiss"
    },
    {
        "Name": "DeWalt"
    },
    {
        "Name": "dial vision"
    },
    {
        "Name": "dick harrell"
    },
    {
        "Name": "DICKIES"
    },
    {
        "Name": "DIESEL"
    },
    {
        "Name": "dimplex (u.k.)"
    },
    {
        "Name": "dingo"
    },
    {
        "Name": "dirt devil"
    },
    {
        "Name": "Discovery Kids"
    },
    {
        "Name": "discreet"
    },
    {
        "Name": "disguise"
    },
    {
        "Name": "disney"
    },
    {
        "Name": "disneyâ®/pixarâ®"
    },
    {
        "Name": "distributoys"
    },
    {
        "Name": "Divine LEDs"
    },
    {
        "Name": "dixie"
    },
    {
        "Name": "Dji"
    },
    {
        "Name": "Dkny"
    },
    {
        "Name": "dms international"
    },
    {
        "Name": "dna diagnostics center"
    },
    {
        "Name": "Dockers"
    },
    {
        "Name": "doctor's associates inc. dba subway"
    },
    {
        "Name": "DoctorCare Plus"
    },
    {
        "Name": "dodot"
    },
    {
        "Name": "dog not gone"
    },
    {
        "Name": "doggie bow ties"
    },
    {
        "Name": "doggination"
    },
    {
        "Name": "dogswell"
    },
    {
        "Name": "dolby laboratories inc. (â\\u0080\\u009Cdolbyâ\\u0080\\u009D)"
    },
    {
        "Name": "Dolce & gabbana"
    },
    {
        "Name": "domu brands"
    },
    {
        "Name": "donegal bay"
    },
    {
        "Name": "dOTERRA"
    },
    {
        "Name": "doublemint"
    },
    {
        "Name": "Dove"
    },
    {
        "Name": "Dove Bar"
    },
    {
        "Name": "DOVE Chocolate"
    },
    {
        "Name": "doze"
    },
    {
        "Name": "dozen egg"
    },
    {
        "Name": "dpcd"
    },
    {
        "Name": "dr denese"
    },
    {
        "Name": "dr tobia"
    },
    {
        "Name": "Dr. Brandt"
    },
    {
        "Name": "dr. brown's bpa free deluxe gift set"
    },
    {
        "Name": "Dr. Denese"
    },
    {
        "Name": "dr. denese (also known as skinscience)"
    },
    {
        "Name": "dr. dennis gross"
    },
    {
        "Name": "dr. dennis gross skin care"
    },
    {
        "Name": "dr. gross"
    },
    {
        "Name": "dr. tobia"
    },
    {
        "Name": "dramamine"
    },
    {
        "Name": "dream furniture"
    },
    {
        "Name": "dream on me"
    },
    {
        "Name": "dreambone"
    },
    {
        "Name": "dreamcontroller"
    },
    {
        "Name": "dreamgear"
    },
    {
        "Name": "dreamshop14"
    },
    {
        "Name": "Dreamspa"
    },
    {
        "Name": "Dreft"
    },
    {
        "Name": "Dremel"
    },
    {
        "Name": "dressthatman.com"
    },
    {
        "Name": "driftaway"
    },
    {
        "Name": "droll yankees"
    },
    {
        "Name": "dropcrate llc"
    },
    {
        "Name": "Dryel"
    },
    {
        "Name": "DryGuy"
    },
    {
        "Name": "DTX International"
    },
    {
        "Name": "Dualit"
    },
    {
        "Name": "Duchess"
    },
    {
        "Name": "duchess (by lambs and ivy)"
    },
    {
        "Name": "duck"
    },
    {
        "Name": "duck covers"
    },
    {
        "Name": "duck house"
    },
    {
        "Name": "duke of pearl llc"
    },
    {
        "Name": "dulcolax"
    },
    {
        "Name": "dunham"
    },
    {
        "Name": "DUNHILL"
    },
    {
        "Name": "Dunkin Donuts"
    },
    {
        "Name": "duofold"
    },
    {
        "Name": "duomat"
    },
    {
        "Name": "duraflex"
    },
    {
        "Name": "duralon"
    },
    {
        "Name": "durvent"
    },
    {
        "Name": "durvet"
    },
    {
        "Name": "durvet - flea and tick  d"
    },
    {
        "Name": "durvet - flea and tick d"
    },
    {
        "Name": "durvet - happy hen    d"
    },
    {
        "Name": "durvet - happy hen d"
    },
    {
        "Name": "durvet - pet            d"
    },
    {
        "Name": "durvet - pet d"
    },
    {
        "Name": "durvet inc              d"
    },
    {
        "Name": "durvet inc d"
    },
    {
        "Name": "durvet/equine           d"
    },
    {
        "Name": "durvet/equine d"
    },
    {
        "Name": "Dymatize"
    },
    {
        "Name": "dymo"
    },
    {
        "Name": "dynamic resource group"
    },
    {
        "Name": "Dynamo"
    },
    {
        "Name": "dynarex"
    },
    {
        "Name": "dynasty"
    },
    {
        "Name": "Dynatrap"
    },
    {
        "Name": "Dyson"
    },
    {
        "Name": "e.i. du pont de nemours and company"
    },
    {
        "Name": "e3"
    },
    {
        "Name": "ea"
    },
    {
        "Name": "eagle creek enterprises - tim cox fine art"
    },
    {
        "Name": "eagle mfg"
    },
    {
        "Name": "eagles wings"
    },
    {
        "Name": "eames office - lucia eames"
    },
    {
        "Name": "earth body"
    },
    {
        "Name": "earth pan"
    },
    {
        "Name": "Earth Rated"
    },
    {
        "Name": "earth's best"
    },
    {
        "Name": "EarthLite"
    },
    {
        "Name": "eastland"
    },
    {
        "Name": "easton sports inc"
    },
    {
        "Name": "easy spirit"
    },
    {
        "Name": "easy street"
    },
    {
        "Name": "easygo nativity"
    },
    {
        "Name": "eaton brothers corp."
    },
    {
        "Name": "ecco"
    },
    {
        "Name": "ECLIPSE"
    },
    {
        "Name": "Eco Breeze"
    },
    {
        "Name": "Eco Defense"
    },
    {
        "Name": "Ecopure"
    },
    {
        "Name": "Edenpure"
    },
    {
        "Name": "edgestar"
    },
    {
        "Name": "edison nation"
    },
    {
        "Name": "efi live limited co."
    },
    {
        "Name": "EGO"
    },
    {
        "Name": "egoz"
    },
    {
        "Name": "eiko"
    },
    {
        "Name": "elecktroplate"
    },
    {
        "Name": "electro-harmonix effects"
    },
    {
        "Name": "electronic arts"
    },
    {
        "Name": "Elegant Comfort"
    },
    {
        "Name": "elektroplate"
    },
    {
        "Name": "Elf on the shelf"
    },
    {
        "Name": "elite k9"
    },
    {
        "Name": "Elizabeth Arden"
    },
    {
        "Name": "ellen betrix"
    },
    {
        "Name": "ellieâ\\u0080\\u0099s best"
    },
    {
        "Name": "ember candles"
    },
    {
        "Name": "emerald pet"
    },
    {
        "Name": "emergen-c"
    },
    {
        "Name": "emi-jay"
    },
    {
        "Name": "Eminence"
    },
    {
        "Name": "emraw"
    },
    {
        "Name": "enclume"
    },
    {
        "Name": "Energizer"
    },
    {
        "Name": "Enfamil"
    },
    {
        "Name": "Engel"
    },
    {
        "Name": "environ skin care pty ltd"
    },
    {
        "Name": "enzymatic therapy"
    },
    {
        "Name": "eo products"
    },
    {
        "Name": "Ephoto"
    },
    {
        "Name": "epic coolers"
    },
    {
        "Name": "epic deluxe"
    },
    {
        "Name": "epicurian discovery"
    },
    {
        "Name": "Epilady"
    },
    {
        "Name": "EPSON"
    },
    {
        "Name": "Eqùate"
    },
    {
        "Name": "equinox"
    },
    {
        "Name": "equus"
    },
    {
        "Name": "Era"
    },
    {
        "Name": "ErgoBaby"
    },
    {
        "Name": "erica skadsen/organic"
    },
    {
        "Name": "erligpowht"
    },
    {
        "Name": "esc"
    },
    {
        "Name": "Escada"
    },
    {
        "Name": "escudo"
    },
    {
        "Name": "esecure"
    },
    {
        "Name": "Espressione"
    },
    {
        "Name": "Essex"
    },
    {
        "Name": "essick air"
    },
    {
        "Name": "essie"
    },
    {
        "Name": "ëštêê láúdêr"
    },
    {
        "Name": "esvit c"
    },
    {
        "Name": "ETEKCITY"
    },
    {
        "Name": "ethical dog"
    },
    {
        "Name": "ethical pets"
    },
    {
        "Name": "etienne aigner ag"
    },
    {
        "Name": "etrailer.com"
    },
    {
        "Name": "EUFORA"
    },
    {
        "Name": "euro cuisine"
    },
    {
        "Name": "euro-pro shark"
    },
    {
        "Name": "eurostyle"
    },
    {
        "Name": "eurotech photographics"
    },
    {
        "Name": "eurovit"
    },
    {
        "Name": "evax"
    },
    {
        "Name": "evelots"
    },
    {
        "Name": "evenflo"
    },
    {
        "Name": "ever after high"
    },
    {
        "Name": "ever clean"
    },
    {
        "Name": "evergreen enterprises"
    },
    {
        "Name": "evestrel"
    },
    {
        "Name": "evitol"
    },
    {
        "Name": "Evolutionize"
    },
    {
        "Name": "evolve"
    },
    {
        "Name": "evolved"
    },
    {
        "Name": "evolved habitats"
    },
    {
        "Name": "evolved industries"
    },
    {
        "Name": "excalibur"
    },
    {
        "Name": "excedrin"
    },
    {
        "Name": "EXCEL"
    },
    {
        "Name": "excel mist"
    },
    {
        "Name": "excel white"
    },
    {
        "Name": "excelvan"
    },
    {
        "Name": "exceptional home zoo"
    },
    {
        "Name": "exclu"
    },
    {
        "Name": "exclusive home"
    },
    {
        "Name": "exclusively dog"
    },
    {
        "Name": "exclusively pet inc"
    },
    {
        "Name": "exel products"
    },
    {
        "Name": "experience"
    },
    {
        "Name": "exploding kittens"
    },
    {
        "Name": "exploding kittens lp"
    },
    {
        "Name": "EXTRA"
    },
    {
        "Name": "extra professional"
    },
    {
        "Name": "extra professional white"
    },
    {
        "Name": "eyeblack"
    },
    {
        "Name": "eyeko"
    },
    {
        "Name": "EZ Change"
    },
    {
        "Name": "ez shelf - the best closet organizer - tube technology"
    },
    {
        "Name": "ez-access"
    },
    {
        "Name": "ezShade"
    },
    {
        "Name": "f&f furniture group"
    },
    {
        "Name": "Fab"
    },
    {
        "Name": "fabjob.com"
    },
    {
        "Name": "fabriika"
    },
    {
        "Name": "facelift ent. inc"
    },
    {
        "Name": "fair & white/fair and white"
    },
    {
        "Name": "Fairy"
    },
    {
        "Name": "fame master"
    },
    {
        "Name": "fan creations"
    },
    {
        "Name": "fan mats"
    },
    {
        "Name": "fanatics authentic"
    },
    {
        "Name": "Fancyus"
    },
    {
        "Name": "fanimation"
    },
    {
        "Name": "fanmat"
    },
    {
        "Name": "fanmats"
    },
    {
        "Name": "fanpans"
    },
    {
        "Name": "fans with pride"
    },
    {
        "Name": "fantape"
    },
    {
        "Name": "Fantasy Fields"
    },
    {
        "Name": "fashion polish"
    },
    {
        "Name": "fat brain toys"
    },
    {
        "Name": "FatBoy"
    },
    {
        "Name": "fathead"
    },
    {
        "Name": "fca us llc"
    },
    {
        "Name": "FCTRY"
    },
    {
        "Name": "Febreze"
    },
    {
        "Name": "federal express corporation (fedex)"
    },
    {
        "Name": "federation against copyright theft (fact) ltd"
    },
    {
        "Name": "fein"
    },
    {
        "Name": "feit electric"
    },
    {
        "Name": "Felina"
    },
    {
        "Name": "feline pine"
    },
    {
        "Name": "FELLOWES"
    },
    {
        "Name": "Femmesil"
    },
    {
        "Name": "fender musical instruments corporation"
    },
    {
        "Name": "Ferragamo"
    },
    {
        "Name": "ferret company"
    },
    {
        "Name": "fever alert"
    },
    {
        "Name": "fgci"
    },
    {
        "Name": "fgm ventures llc dba petpost"
    },
    {
        "Name": "FH Group"
    },
    {
        "Name": "FHI"
    },
    {
        "Name": "fiesta"
    },
    {
        "Name": "fiesta kitchenware"
    },
    {
        "Name": "filtrete"
    },
    {
        "Name": "finedine"
    },
    {
        "Name": "Fingerlings"
    },
    {
        "Name": "finish"
    },
    {
        "Name": "finish line"
    },
    {
        "Name": "finley home"
    },
    {
        "Name": "fire cam"
    },
    {
        "Name": "fire house neon llc"
    },
    {
        "Name": "firefield"
    },
    {
        "Name": "firefield/sightmark"
    },
    {
        "Name": "first act"
    },
    {
        "Name": "first aid only"
    },
    {
        "Name": "FIRST ALERT"
    },
    {
        "Name": "FirstKitchen"
    },
    {
        "Name": "fisher price"
    },
    {
        "Name": "Fisher-Price"
    },
    {
        "Name": "fisll"
    },
    {
        "Name": "FITBIT"
    },
    {
        "Name": "fitdeck"
    },
    {
        "Name": "fitindex"
    },
    {
        "Name": "fitness brands inc./direct entertainment media group"
    },
    {
        "Name": "FIVE OCEANS"
    },
    {
        "Name": "five star"
    },
    {
        "Name": "Fixodent"
    },
    {
        "Name": "flagpole to go"
    },
    {
        "Name": "Flash"
    },
    {
        "Name": "flea beater"
    },
    {
        "Name": "flex seal"
    },
    {
        "Name": "Flexibrace"
    },
    {
        "Name": "FlexiSnake"
    },
    {
        "Name": "FLIP ZEE GIRLS"
    },
    {
        "Name": "Flipazoo"
    },
    {
        "Name": "flonase"
    },
    {
        "Name": "flossy chews"
    },
    {
        "Name": "flow zone"
    },
    {
        "Name": "Fluocaril"
    },
    {
        "Name": "flying eagle"
    },
    {
        "Name": "Flyte"
    },
    {
        "Name": "foam fanatics"
    },
    {
        "Name": "foco"
    },
    {
        "Name": "fold'n store"
    },
    {
        "Name": "folgers"
    },
    {
        "Name": "Fonus"
    },
    {
        "Name": "foodsaver"
    },
    {
        "Name": "football fanatics"
    },
    {
        "Name": "footprints publishings inc."
    },
    {
        "Name": "for bare feet"
    },
    {
        "Name": "force factor"
    },
    {
        "Name": "Ford Motor Company"
    },
    {
        "Name": "Forearm Forklift"
    },
    {
        "Name": "forever collectibles"
    },
    {
        "Name": "formosa"
    },
    {
        "Name": "FORMUFIT"
    },
    {
        "Name": "fortex"
    },
    {
        "Name": "fortress industries llc"
    },
    {
        "Name": "Fossil"
    },
    {
        "Name": "four-oaksfarmventures"
    },
    {
        "Name": "fox (twentieth century fox film corporation)"
    },
    {
        "Name": "fox outdoor"
    },
    {
        "Name": "fox run"
    },
    {
        "Name": "franklin"
    },
    {
        "Name": "Franklin Electronic"
    },
    {
        "Name": "franklin sports"
    },
    {
        "Name": "Fred & Friends"
    },
    {
        "Name": "Frederic Fekkai"
    },
    {
        "Name": "Freedent"
    },
    {
        "Name": "fremont die"
    },
    {
        "Name": "fresh"
    },
    {
        "Name": "fresh step"
    },
    {
        "Name": "FRESH WAVE"
    },
    {
        "Name": "freshware"
    },
    {
        "Name": "frette"
    },
    {
        "Name": "Frieling"
    },
    {
        "Name": "frogg toggs"
    },
    {
        "Name": "from the heart"
    },
    {
        "Name": "front yard originals"
    },
    {
        "Name": "frontyard originals"
    },
    {
        "Name": "FROZEN"
    },
    {
        "Name": "Frye"
    },
    {
        "Name": "fsk"
    },
    {
        "Name": "fuelbelt"
    },
    {
        "Name": "fujifilm"
    },
    {
        "Name": "fujikura composites"
    },
    {
        "Name": "fun express"
    },
    {
        "Name": "fUNKO"
    },
    {
        "Name": "funtime"
    },
    {
        "Name": "furby connect"
    },
    {
        "Name": "FURminator"
    },
    {
        "Name": "furreal"
    },
    {
        "Name": "FurReal friends"
    },
    {
        "Name": "future play"
    },
    {
        "Name": "G & F Products"
    },
    {
        "Name": "g-iii sports"
    },
    {
        "Name": "g.a.p."
    },
    {
        "Name": "gabor fitness"
    },
    {
        "Name": "gabrialla"
    },
    {
        "Name": "Gabriela Sabatini"
    },
    {
        "Name": "GALA"
    },
    {
        "Name": "GALAXY"
    },
    {
        "Name": "galaxy bubbles"
    },
    {
        "Name": "galaxy honeycomb crisp"
    },
    {
        "Name": "galaxy minstrels"
    },
    {
        "Name": "Gama"
    },
    {
        "Name": "game day outfitters"
    },
    {
        "Name": "game time"
    },
    {
        "Name": "gamebot by laltitude llc"
    },
    {
        "Name": "gameday boots"
    },
    {
        "Name": "gameday outfitters"
    },
    {
        "Name": "games"
    },
    {
        "Name": "gamewear"
    },
    {
        "Name": "Garden Joy"
    },
    {
        "Name": "Gardenite"
    },
    {
        "Name": "GARMIN"
    },
    {
        "Name": "GARNIER"
    },
    {
        "Name": "garry winogrand photography"
    },
    {
        "Name": "gator cases"
    },
    {
        "Name": "gatsby"
    },
    {
        "Name": "gaylord entertainment company"
    },
    {
        "Name": "GE"
    },
    {
        "Name": "Gear Ultimate"
    },
    {
        "Name": "gearwrench"
    },
    {
        "Name": "gecko grip gloves"
    },
    {
        "Name": "gecko grip gloves/verde river products"
    },
    {
        "Name": "GEERTOP"
    },
    {
        "Name": "gefu spirelli spiral slicer"
    },
    {
        "Name": "gemmy"
    },
    {
        "Name": "General Motors"
    },
    {
        "Name": "generic"
    },
    {
        "Name": "genuine kids"
    },
    {
        "Name": "GEORGE"
    },
    {
        "Name": "georgia pacific corp."
    },
    {
        "Name": "georgie girl australia"
    },
    {
        "Name": "georgio armani"
    },
    {
        "Name": "gerber"
    },
    {
        "Name": "Getty"
    },
    {
        "Name": "getty / karibu"
    },
    {
        "Name": "gevalia"
    },
    {
        "Name": "ghirardelli"
    },
    {
        "Name": "gianna rose atelelier"
    },
    {
        "Name": "Giantex"
    },
    {
        "Name": "gibson"
    },
    {
        "Name": "Gillette"
    },
    {
        "Name": "gimbo"
    },
    {
        "Name": "ginger ridge div. of"
    },
    {
        "Name": "ginna rose atelelier"
    },
    {
        "Name": "GINSU"
    },
    {
        "Name": "glad"
    },
    {
        "Name": "Glide"
    },
    {
        "Name": "global restricted brands"
    },
    {
        "Name": "globe turner"
    },
    {
        "Name": "glytone"
    },
    {
        "Name": "gmv productions"
    },
    {
        "Name": "Go Nutrients"
    },
    {
        "Name": "go plus"
    },
    {
        "Name": "go rhino"
    },
    {
        "Name": "go rhino!"
    },
    {
        "Name": "Goal Zero"
    },
    {
        "Name": "goddess"
    },
    {
        "Name": "godefroy eyebrow tint"
    },
    {
        "Name": "godinger"
    },
    {
        "Name": "gofit"
    },
    {
        "Name": "Gogo"
    },
    {
        "Name": "gojo"
    },
    {
        "Name": "gold coast"
    },
    {
        "Name": "Golden Bell"
    },
    {
        "Name": "golden sheeps"
    },
    {
        "Name": "Goldfaden MD"
    },
    {
        "Name": "good earth"
    },
    {
        "Name": "goodnites"
    },
    {
        "Name": "Google"
    },
    {
        "Name": "gorilla supply"
    },
    {
        "Name": "gottlieb development llc"
    },
    {
        "Name": "gq electronics"
    },
    {
        "Name": "grabber warmers"
    },
    {
        "Name": "GRACO"
    },
    {
        "Name": "Graham Webb"
    },
    {
        "Name": "grand lodge fraternal order of police"
    },
    {
        "Name": "grandelashmd"
    },
    {
        "Name": "grandma moses properties company"
    },
    {
        "Name": "graphics technology hk limited"
    },
    {
        "Name": "graydog woodenware"
    },
    {
        "Name": "great american products"
    },
    {
        "Name": "great arrivals"
    },
    {
        "Name": "Great Value"
    },
    {
        "Name": "green bay packers"
    },
    {
        "Name": "Green Gobbler"
    },
    {
        "Name": "Green Mountain Coffee"
    },
    {
        "Name": "green sprouts"
    },
    {
        "Name": "greeting pen"
    },
    {
        "Name": "gretsch company"
    },
    {
        "Name": "grey pneumatic"
    },
    {
        "Name": "Grill Kings"
    },
    {
        "Name": "grill valueparts"
    },
    {
        "Name": "grillhogs"
    },
    {
        "Name": "grillpro"
    },
    {
        "Name": "GrimmSpeed"
    },
    {
        "Name": "grip tex"
    },
    {
        "Name": "gronomics"
    },
    {
        "Name": "groove life"
    },
    {
        "Name": "grow green"
    },
    {
        "Name": "GrowGreen"
    },
    {
        "Name": "guard dog"
    },
    {
        "Name": "GUCCI"
    },
    {
        "Name": "güérláíñ"
    },
    {
        "Name": "guess and marciano brands"
    },
    {
        "Name": "gulfstream tropical aquarium"
    },
    {
        "Name": "gummi savers"
    },
    {
        "Name": "Gummygoods"
    },
    {
        "Name": "Gund"
    },
    {
        "Name": "guthy-renker corporation"
    },
    {
        "Name": "h&b oils center"
    },
    {
        "Name": "H2O Mop X5"
    },
    {
        "Name": "haines"
    },
    {
        "Name": "hall of fame sports"
    },
    {
        "Name": "HALLMARK"
    },
    {
        "Name": "hallmark party express"
    },
    {
        "Name": "HAMILTON BEACH"
    },
    {
        "Name": "hamilton beach brands"
    },
    {
        "Name": "handstands"
    },
    {
        "Name": "hanes"
    },
    {
        "Name": "hangtime"
    },
    {
        "Name": "Happy Baby"
    },
    {
        "Name": "happy family"
    },
    {
        "Name": "happy howie's"
    },
    {
        "Name": "harbinger"
    },
    {
        "Name": "Harley-Davidson"
    },
    {
        "Name": "harmony line"
    },
    {
        "Name": "harry potter"
    },
    {
        "Name": "hartz"
    },
    {
        "Name": "Harvil"
    },
    {
        "Name": "hasbro"
    },
    {
        "Name": "hasbro gaming"
    },
    {
        "Name": "hat trick openers"
    },
    {
        "Name": "Hatchimals"
    },
    {
        "Name": "hauspanther"
    },
    {
        "Name": "Hbo"
    },
    {
        "Name": "hde"
    },
    {
        "Name": "healthy pet - litter"
    },
    {
        "Name": "Heart To Heart"
    },
    {
        "Name": "Heinz"
    },
    {
        "Name": "heirs and estate of peter william ham"
    },
    {
        "Name": "helena chemicals"
    },
    {
        "Name": "hello"
    },
    {
        "Name": "hemingweigh"
    },
    {
        "Name": "hemp seed"
    },
    {
        "Name": "herbal clean"
    },
    {
        "Name": "Herbivore"
    },
    {
        "Name": "herbs"
    },
    {
        "Name": "herdlife"
    },
    {
        "Name": "heritage metalwork"
    },
    {
        "Name": "heritage metalworks"
    },
    {
        "Name": "heritage pewter"
    },
    {
        "Name": "herm sprenger"
    },
    {
        "Name": "hero decks"
    },
    {
        "Name": "herofiber"
    },
    {
        "Name": "Herschel"
    },
    {
        "Name": "herschel supply co"
    },
    {
        "Name": "hewlett-packard company (hp ink & toner)"
    },
    {
        "Name": "hi wash"
    },
    {
        "Name": "hi-tor"
    },
    {
        "Name": "hickory hardware"
    },
    {
        "Name": "higear design"
    },
    {
        "Name": "hill's science diet"
    },
    {
        "Name": "hillsdale"
    },
    {
        "Name": "hillstock collection"
    },
    {
        "Name": "hilton herbs ltd"
    },
    {
        "Name": "himalayan glow"
    },
    {
        "Name": "hitachi"
    },
    {
        "Name": "hks europe ltd"
    },
    {
        "Name": "hmk"
    },
    {
        "Name": "hoberman designs"
    },
    {
        "Name": "hollister"
    },
    {
        "Name": "Holy Stone"
    },
    {
        "Name": "Homall"
    },
    {
        "Name": "HOME ACCENTS"
    },
    {
        "Name": "Home basics"
    },
    {
        "Name": "home concept inc"
    },
    {
        "Name": "Home Dynamix"
    },
    {
        "Name": "Home Styles"
    },
    {
        "Name": "homeconcept"
    },
    {
        "Name": "homeopet"
    },
    {
        "Name": "homeopet llc"
    },
    {
        "Name": " llc"
    },
    {
        "Name": "Homesafe"
    },
    {
        "Name": "homestyles"
    },
    {
        "Name": "Homewell"
    },
    {
        "Name": "honest baby"
    },
    {
        "Name": "HONEY-CAN-DO"
    },
    {
        "Name": "honeywell"
    },
    {
        "Name": "honeywell ceiling fans"
    },
    {
        "Name": "HOOVER"
    },
    {
        "Name": "hori"
    },
    {
        "Name": "hormel"
    },
    {
        "Name": "hot wheels"
    },
    {
        "Name": "hotbuckles"
    },
    {
        "Name": "Hotelspa"
    },
    {
        "Name": "house of troy"
    },
    {
        "Name": "household essentials"
    },
    {
        "Name": "houselabels"
    },
    {
        "Name": "hovac"
    },
    {
        "Name": "hoverboards"
    },
    {
        "Name": "Howard Elliot"
    },
    {
        "Name": "Howard Leight"
    },
    {
        "Name": "howard miller"
    },
    {
        "Name": "HP"
    },
    {
        "Name": "hps"
    },
    {
        "Name": "hub-city-sports"
    },
    {
        "Name": "Hubba Bubba"
    },
    {
        "Name": "Hue"
    },
    {
        "Name": "huggalugs north america"
    },
    {
        "Name": "huggies"
    },
    {
        "Name": "hugo boss"
    },
    {
        "Name": "hugs not drugs"
    },
    {
        "Name": "huigou"
    },
    {
        "Name": "hunter"
    },
    {
        "Name": "hurricane"
    },
    {
        "Name": "hy cite corporation"
    },
    {
        "Name": "hy-c"
    },
    {
        "Name": "HYDRO FLASK"
    },
    {
        "Name": "HydroPeptide"
    },
    {
        "Name": "hylak"
    },
    {
        "Name": "Hyper Tough"
    },
    {
        "Name": "hypertough"
    },
    {
        "Name": "hyshier"
    },
    {
        "Name": "Hyzrz"
    },
    {
        "Name": "I Coloniali"
    },
    {
        "Name": "ice2o"
    },
    {
        "Name": "Icebreaker"
    },
    {
        "Name": "ICEtrekkers"
    },
    {
        "Name": "ICOLOR"
    },
    {
        "Name": "iCooker"
    },
    {
        "Name": "iCorer"
    },
    {
        "Name": "ideal"
    },
    {
        "Name": "ideal."
    },
    {
        "Name": "idylc homes kona"
    },
    {
        "Name": "ihome"
    },
    {
        "Name": "ike & zelda"
    },
    {
        "Name": "ikee designs"
    },
    {
        "Name": "ikitchenplus"
    },
    {
        "Name": "ILLUME"
    },
    {
        "Name": "illy"
    },
    {
        "Name": "Image"
    },
    {
        "Name": "imaginext"
    },
    {
        "Name": "Imeshbean"
    },
    {
        "Name": "immucell corp"
    },
    {
        "Name": "imperial"
    },
    {
        "Name": "imperial international"
    },
    {
        "Name": "Implus"
    },
    {
        "Name": "imported horse & supply"
    },
    {
        "Name": "INFANTINO"
    },
    {
        "Name": "infasil"
    },
    {
        "Name": "Infinity Sun"
    },
    {
        "Name": "inlifine"
    },
    {
        "Name": "innovacyn inc.     d"
    },
    {
        "Name": "innovacyn inc. d"
    },
    {
        "Name": "innovations"
    },
    {
        "Name": "innovative textiles inc."
    },
    {
        "Name": "innovera"
    },
    {
        "Name": "insert knowledge here"
    },
    {
        "Name": "InStyler"
    },
    {
        "Name": "Inteletool"
    },
    {
        "Name": "Intenze"
    },
    {
        "Name": "Interdesign"
    },
    {
        "Name": "Interlink Products"
    },
    {
        "Name": "international giftware corporation igx"
    },
    {
        "Name": "International Playthings"
    },
    {
        "Name": "intervallo"
    },
    {
        "Name": "intervet inc / merck"
    },
    {
        "Name": "intervet panacur"
    },
    {
        "Name": "INTEX"
    },
    {
        "Name": "Intrinsics"
    },
    {
        "Name": "intuit"
    },
    {
        "Name": "ipana"
    },
    {
        "Name": "iPower"
    },
    {
        "Name": "iq implant devices"
    },
    {
        "Name": "IQAir"
    },
    {
        "Name": "Irobot"
    },
    {
        "Name": "irwin"
    },
    {
        "Name": "irwin tools"
    },
    {
        "Name": "isoplus"
    },
    {
        "Name": "iSpring"
    },
    {
        "Name": "It Works"
    },
    {
        "Name": "ita-med co."
    },
    {
        "Name": "itâ\\u0080\\u0099s a 10"
    },
    {
        "Name": "iTouchless"
    },
    {
        "Name": "ixtreme"
    },
    {
        "Name": "j adryan"
    },
    {
        "Name": "j. america"
    },
    {
        "Name": "J.A. Henckels"
    },
    {
        "Name": "j.l. childress"
    },
    {
        "Name": "j.s. hanger"
    },
    {
        "Name": "ja henckels"
    },
    {
        "Name": "Jabra"
    },
    {
        "Name": "Jack Black"
    },
    {
        "Name": "jacket4bikes"
    },
    {
        "Name": "jaclin dunne"
    },
    {
        "Name": "jam"
    },
    {
        "Name": "jam industries"
    },
    {
        "Name": "JAM Paper & Envelope"
    },
    {
        "Name": "jam paper and envelope"
    },
    {
        "Name": "James Bond"
    },
    {
        "Name": "Jane Iredale"
    },
    {
        "Name": "Jansport"
    },
    {
        "Name": "Japonesque"
    },
    {
        "Name": "jar"
    },
    {
        "Name": "jarden"
    },
    {
        "Name": "jarden sports licensing"
    },
    {
        "Name": "JARROW FORMULAS"
    },
    {
        "Name": "jarrow formulas"
    },
    {
        "Name": "jasco"
    },
    {
        "Name": "jbl"
    },
    {
        "Name": "jel sert"
    },
    {
        "Name": "jenkins"
    },
    {
        "Name": "jenkins enterprises"
    },
    {
        "Name": "jergens"
    },
    {
        "Name": "jet"
    },
    {
        "Name": "jet®"
    },
    {
        "Name": "jezebel and paramour"
    },
    {
        "Name": "jf sports canada"
    },
    {
        "Name": "Jif"
    },
    {
        "Name": "jim pace magic"
    },
    {
        "Name": "jin better"
    },
    {
        "Name": "jl childress"
    },
    {
        "Name": "jlika"
    },
    {
        "Name": "jmdl toys"
    },
    {
        "Name": "jo condrill"
    },
    {
        "Name": "jo jo designs"
    },
    {
        "Name": "Jo Malone"
    },
    {
        "Name": "jobri"
    },
    {
        "Name": "JOCKEY"
    },
    {
        "Name": "JOHN DEERE"
    },
    {
        "Name": "John Frieda"
    },
    {
        "Name": "john timberland"
    },
    {
        "Name": "johnny b."
    },
    {
        "Name": "Jojo"
    },
    {
        "Name": "jojospring"
    },
    {
        "Name": "joking hazard"
    },
    {
        "Name": "Joon"
    },
    {
        "Name": "Jordan"
    },
    {
        "Name": "jordan design studio"
    },
    {
        "Name": "Joseph Joseph"
    },
    {
        "Name": "joseph rorie"
    },
    {
        "Name": "jostar"
    },
    {
        "Name": "Jouer"
    },
    {
        "Name": "joyx"
    },
    {
        "Name": "jrm licensing"
    },
    {
        "Name": "js&m sales & marketing inc."
    },
    {
        "Name": "judastice"
    },
    {
        "Name": "Juice Beauty"
    },
    {
        "Name": "JUICY COUTURE"
    },
    {
        "Name": "Juicy Fruit"
    },
    {
        "Name": "Julep"
    },
    {
        "Name": "jun xuan"
    },
    {
        "Name": "jurassic world"
    },
    {
        "Name": "jurassipet"
    },
    {
        "Name": "Just One You"
    },
    {
        "Name": "Juvale"
    },
    {
        "Name": "jw pet"
    },
    {
        "Name": "Kalencom"
    },
    {
        "Name": "Kandoo"
    },
    {
        "Name": "Kanex"
    },
    {
        "Name": "kansas city chiefs"
    },
    {
        "Name": "kanto"
    },
    {
        "Name": "karcher (u.k.)"
    },
    {
        "Name": "Karibu"
    },
    {
        "Name": "karin maki"
    },
    {
        "Name": "kaskey kids"
    },
    {
        "Name": "kason industries"
    },
    {
        "Name": "KATE SPADE"
    },
    {
        "Name": "kazaira"
    },
    {
        "Name": "keds"
    },
    {
        "Name": "Keen"
    },
    {
        "Name": "keep me clean"
    },
    {
        "Name": "KEKU"
    },
    {
        "Name": "KENDAL"
    },
    {
        "Name": "Kendama USA"
    },
    {
        "Name": "kenmore"
    },
    {
        "Name": "Kenneth cole"
    },
    {
        "Name": "Kenroy Home"
    },
    {
        "Name": "kent nutrition group-bsf"
    },
    {
        "Name": "kentucky wildcats"
    },
    {
        "Name": "kera therapy"
    },
    {
        "Name": "kerafiber europe limited"
    },
    {
        "Name": "Keter"
    },
    {
        "Name": "kettle foods ltd"
    },
    {
        "Name": "Keurig"
    },
    {
        "Name": "keyhole garden beds"
    },
    {
        "Name": "keystone technologies"
    },
    {
        "Name": "kichler"
    },
    {
        "Name": "kid connection"
    },
    {
        "Name": "Kiddopotamus"
    },
    {
        "Name": "kidkraft"
    },
    {
        "Name": "kidsembrace"
    },
    {
        "Name": "kidtastic"
    },
    {
        "Name": "kiehlâ\\u0080\\u0099s"
    },
    {
        "Name": "Kilner"
    },
    {
        "Name": "KIND Bars"
    },
    {
        "Name": "king baby studio"
    },
    {
        "Name": "king canopy"
    },
    {
        "Name": "KINGSTON"
    },
    {
        "Name": "kiniart studios"
    },
    {
        "Name": "kirkland"
    },
    {
        "Name": "kirkland science labs"
    },
    {
        "Name": "KIRKLAND SIGNATURE"
    },
    {
        "Name": "kiss my face"
    },
    {
        "Name": "KitchCo"
    },
    {
        "Name": "KITCHEN AID"
    },
    {
        "Name": "kitchen basics"
    },
    {
        "Name": "Kitchen Supreme"
    },
    {
        "Name": "KitchenAid"
    },
    {
        "Name": "kitchenplus"
    },
    {
        "Name": "kleenex"
    },
    {
        "Name": "kleinn automotive accessories"
    },
    {
        "Name": "klew"
    },
    {
        "Name": "KLIPSCH"
    },
    {
        "Name": "klorane"
    },
    {
        "Name": "Klymit"
    },
    {
        "Name": "Knox"
    },
    {
        "Name": "kohler"
    },
    {
        "Name": "kohler genuine parts"
    },
    {
        "Name": "Kohzie"
    },
    {
        "Name": "kolder"
    },
    {
        "Name": "KONA"
    },
    {
        "Name": "kong"
    },
    {
        "Name": "konica minolta"
    },
    {
        "Name": "Korres"
    },
    {
        "Name": "KOVOT"
    },
    {
        "Name": "kreg tool"
    },
    {
        "Name": "kronemann design studio pty. ltd. - house of kronemann usa"
    },
    {
        "Name": "ks"
    },
    {
        "Name": "Kudos"
    },
    {
        "Name": "Kukident"
    },
    {
        "Name": "kurt adler"
    },
    {
        "Name": "Kuteck"
    },
    {
        "Name": "kyolic"
    },
    {
        "Name": "Kyser"
    },
    {
        "Name": "l'equipe"
    },
    {
        "Name": "L'Oréal"
    },
    {
        "Name": "l.o.l surprise!"
    },
    {
        "Name": "l.o.l. surprise!"
    },
    {
        "Name": "La Bella Donna"
    },
    {
        "Name": "la boutique de bacchus"
    },
    {
        "Name": "la chemise lacoste sa"
    },
    {
        "Name": "la'khan"
    },
    {
        "Name": "lacosta"
    },
    {
        "Name": "LACOSTE"
    },
    {
        "Name": "lactiv"
    },
    {
        "Name": "ladysan"
    },
    {
        "Name": "lafco"
    },
    {
        "Name": "Lamaze"
    },
    {
        "Name": "Lamzac"
    },
    {
        "Name": "Lancôme"
    },
    {
        "Name": "landtomâ®"
    },
    {
        "Name": "lansinoh"
    },
    {
        "Name": "larenim"
    },
    {
        "Name": "late for the sky"
    },
    {
        "Name": "Láúrá Bíágíóttí"
    },
    {
        "Name": "laurel whole plant"
    },
    {
        "Name": "lauren madison"
    },
    {
        "Name": "lavan san"
    },
    {
        "Name": "lavish home"
    },
    {
        "Name": "lazer bond"
    },
    {
        "Name": "lâ\\u0080\\u0099occitane"
    },
    {
        "Name": "Le Creuset"
    },
    {
        "Name": "leader"
    },
    {
        "Name": "leapfrog"
    },
    {
        "Name": "learning curve"
    },
    {
        "Name": "Lebogner"
    },
    {
        "Name": "LectroFan"
    },
    {
        "Name": "LectroSound"
    },
    {
        "Name": "LED Lenser"
    },
    {
        "Name": "lee precision"
    },
    {
        "Name": "lee's aquarium & pet products"
    },
    {
        "Name": "leg avenue"
    },
    {
        "Name": "legends never die"
    },
    {
        "Name": "legends-never-die"
    },
    {
        "Name": "Lenor"
    },
    {
        "Name": "levi%27s"
    },
    {
        "Name": "levi's"
    },
    {
        "Name": "lexmark"
    },
    {
        "Name": "lg"
    },
    {
        "Name": "liberty glove & safety"
    },
    {
        "Name": "licensed products"
    },
    {
        "Name": "life saver fusions"
    },
    {
        "Name": "life saver minis"
    },
    {
        "Name": "Life Savers"
    },
    {
        "Name": "lifestride"
    },
    {
        "Name": "lifestyle on fire"
    },
    {
        "Name": "LifeTime"
    },
    {
        "Name": "lifetime products"
    },
    {
        "Name": "light & motion"
    },
    {
        "Name": "lightaccents"
    },
    {
        "Name": "lightning reaction"
    },
    {
        "Name": "lightwear"
    },
    {
        "Name": "lil fan"
    },
    {
        "Name": "lil' jumbl"
    },
    {
        "Name": "LINDOR"
    },
    {
        "Name": "Linenspa"
    },
    {
        "Name": "lines"
    },
    {
        "Name": "linidor"
    },
    {
        "Name": "linkswalker"
    },
    {
        "Name": "liolactil"
    },
    {
        "Name": "litter genie"
    },
    {
        "Name": "little adventures"
    },
    {
        "Name": "little earth"
    },
    {
        "Name": "little fevers"
    },
    {
        "Name": "little hotties"
    },
    {
        "Name": "little people"
    },
    {
        "Name": "littlest pet shop"
    },
    {
        "Name": "livewell labs"
    },
    {
        "Name": "llilykai value bundles"
    },
    {
        "Name": "Lockets"
    },
    {
        "Name": "Logitech"
    },
    {
        "Name": "logo"
    },
    {
        "Name": "logo brands"
    },
    {
        "Name": "logo inc"
    },
    {
        "Name": "logoart"
    },
    {
        "Name": "logobrands"
    },
    {
        "Name": "londa professional"
    },
    {
        "Name": "lsu tigers baby"
    },
    {
        "Name": "luhr-jensen"
    },
    {
        "Name": "lumabase"
    },
    {
        "Name": "lumify"
    },
    {
        "Name": "lunch"
    },
    {
        "Name": "lutron"
    },
    {
        "Name": "LUVS"
    },
    {
        "Name": "lynk"
    },
    {
        "Name": "lynk®"
    },
    {
        "Name": "lysol"
    },
    {
        "Name": "M&M's"
    },
    {
        "Name": "m-azing"
    },
    {
        "Name": "m. la hart"
    },
    {
        "Name": "m.lahart"
    },
    {
        "Name": "mad catz"
    },
    {
        "Name": "Magformers"
    },
    {
        "Name": "magia blanca"
    },
    {
        "Name": "magic wand"
    },
    {
        "Name": "magistral"
    },
    {
        "Name": "magnokal"
    },
    {
        "Name": "magnolia lane"
    },
    {
        "Name": "mainstay"
    },
    {
        "Name": "mainstays"
    },
    {
        "Name": "mainstays furniture"
    },
    {
        "Name": "Majestic"
    },
    {
        "Name": "majestic goods"
    },
    {
        "Name": "majestic sports brands llc"
    },
    {
        "Name": "making believe"
    },
    {
        "Name": "makita"
    },
    {
        "Name": "male power"
    },
    {
        "Name": "Maltesers"
    },
    {
        "Name": "manhattan toy"
    },
    {
        "Name": "manna pro"
    },
    {
        "Name": "manna pro - fly"
    },
    {
        "Name": "manor park"
    },
    {
        "Name": "Marc jacobs"
    },
    {
        "Name": "MARS"
    },
    {
        "Name": "mars muffin"
    },
    {
        "Name": "marshall"
    },
    {
        "Name": "marshall pet products"
    },
    {
        "Name": "martin furniture"
    },
    {
        "Name": "maruchan"
    },
    {
        "Name": "Mary Kay"
    },
    {
        "Name": "masterpieces"
    },
    {
        "Name": "matchbox"
    },
    {
        "Name": "Mattel"
    },
    {
        "Name": "mattel toys"
    },
    {
        "Name": "maxi cosi"
    },
    {
        "Name": "Maxi-Cosi"
    },
    {
        "Name": "maxwell house"
    },
    {
        "Name": "maxxdry"
    },
    {
        "Name": "mayflash"
    },
    {
        "Name": "mayflower distributing"
    },
    {
        "Name": "mayflower products"
    },
    {
        "Name": "mcarthur towel & sports"
    },
    {
        "Name": "mccarthur towel"
    },
    {
        "Name": "mccormick"
    },
    {
        "Name": "mccormick culinary"
    },
    {
        "Name": "mccormick for chefs"
    },
    {
        "Name": "mcfarlane toys"
    },
    {
        "Name": "mDesign"
    },
    {
        "Name": "me & my big ideas"
    },
    {
        "Name": "mechanic's time savers"
    },
    {
        "Name": "mechanix wear"
    },
    {
        "Name": "medaglia d'oro"
    },
    {
        "Name": "MEDELA"
    },
    {
        "Name": "medline"
    },
    {
        "Name": "mega construx"
    },
    {
        "Name": "mega deal"
    },
    {
        "Name": "Mehron"
    },
    {
        "Name": "melissa & dougã\\u0082â®"
    },
    {
        "Name": "melissa & dougâ®"
    },
    {
        "Name": "melissa & doug®"
    },
    {
        "Name": "Melissa & Doug"
    },
    {
        "Name": "member's mark"
    },
    {
        "Name": "mentos"
    },
    {
        "Name": "merano"
    },
    {
        "Name": "merchsource"
    },
    {
        "Name": "merck ah cattle       d"
    },
    {
        "Name": "merck ah cattle d"
    },
    {
        "Name": "merck animal health"
    },
    {
        "Name": "merial"
    },
    {
        "Name": "merial inc"
    },
    {
        "Name": "methodâ®"
    },
    {
        "Name": "Mexx"
    },
    {
        "Name": "michaelson entertainment"
    },
    {
        "Name": "microsoft"
    },
    {
        "Name": "midway"
    },
    {
        "Name": "midwest can"
    },
    {
        "Name": "midwest design imports"
    },
    {
        "Name": "mif"
    },
    {
        "Name": "mifold"
    },
    {
        "Name": "mightyskins"
    },
    {
        "Name": "mikasa"
    },
    {
        "Name": "milk products"
    },
    {
        "Name": "milkbarn"
    },
    {
        "Name": "MILKY WAY"
    },
    {
        "Name": "miller"
    },
    {
        "Name": "miller mfg co inc p"
    },
    {
        "Name": "millers forge inc"
    },
    {
        "Name": "milliken"
    },
    {
        "Name": "milwaukee"
    },
    {
        "Name": "milwaukee elec tool"
    },
    {
        "Name": "minnesota vikings"
    },
    {
        "Name": "minnetonka"
    },
    {
        "Name": "minora"
    },
    {
        "Name": "minwax"
    },
    {
        "Name": "minwaxã\\u0082â®"
    },
    {
        "Name": "minwaxâ®"
    },
    {
        "Name": "minwax¬æ"
    },
    {
        "Name": "miracle care"
    },
    {
        "Name": "miracle-gro"
    },
    {
        "Name": "MIRAGE PET PRODUCTS"
    },
    {
        "Name": "mitchell & ness"
    },
    {
        "Name": "mizco"
    },
    {
        "Name": "Mizuno"
    },
    {
        "Name": "MLB"
    },
    {
        "Name": "moana"
    },
    {
        "Name": "mobile home solutions"
    },
    {
        "Name": "model rectifier"
    },
    {
        "Name": "modfamily"
    },
    {
        "Name": "moen"
    },
    {
        "Name": "mojolife"
    },
    {
        "Name": "mommy's bliss"
    },
    {
        "Name": "Moncler"
    },
    {
        "Name": "mongoose"
    },
    {
        "Name": "monika fashion world"
    },
    {
        "Name": "monster high"
    },
    {
        "Name": "MONT BLANC"
    },
    {
        "Name": "montague metal products"
    },
    {
        "Name": "monterey bay"
    },
    {
        "Name": "monterey p"
    },
    {
        "Name": "morphsuits"
    },
    {
        "Name": "morris costumes"
    },
    {
        "Name": "morton salt"
    },
    {
        "Name": "mossy oak"
    },
    {
        "Name": "mountain house"
    },
    {
        "Name": "mounted memories"
    },
    {
        "Name": "mpdirect"
    },
    {
        "Name": "mr clean/mr proper"
    },
    {
        "Name": "mr. clean"
    },
    {
        "Name": "mr. coffee"
    },
    {
        "Name": "mucinex"
    },
    {
        "Name": "mukola"
    },
    {
        "Name": "multipet"
    },
    {
        "Name": "multipet international"
    },
    {
        "Name": "Múm"
    },
    {
        "Name": "MUNCH"
    },
    {
        "Name": "MUnchkin"
    },
    {
        "Name": "muncie novelty company"
    },
    {
        "Name": "muntech products"
    },
    {
        "Name": "music city metals"
    },
    {
        "Name": "mwi animal health"
    },
    {
        "Name": "my life as"
    },
    {
        "Name": "my sweet love"
    },
    {
        "Name": "mytouchsmart"
    },
    {
        "Name": "na"
    },
    {
        "Name": "Naomi Campbell"
    },
    {
        "Name": "national artcraft"
    },
    {
        "Name": "national design"
    },
    {
        "Name": "NATREL"
    },
    {
        "Name": "natrol"
    },
    {
        "Name": "naturade"
    },
    {
        "Name": "natural chemistry"
    },
    {
        "Name": "natural patches of vermont"
    },
    {
        "Name": "naturalik"
    },
    {
        "Name": "nature cure bee"
    },
    {
        "Name": "NATURE MADE"
    },
    {
        "Name": "nature saver"
    },
    {
        "Name": "nature's bounty"
    },
    {
        "Name": "nature's miracle"
    },
    {
        "Name": "nature's own pet chews"
    },
    {
        "Name": "nature's sunshine"
    },
    {
        "Name": "Naturella"
    },
    {
        "Name": "natures truth"
    },
    {
        "Name": "NaturVet"
    },
    {
        "Name": "nba"
    },
    {
        "Name": "ncaa"
    },
    {
        "Name": "nearly natural"
    },
    {
        "Name": "Neiko"
    },
    {
        "Name": "nelson"
    },
    {
        "Name": "neo blanc"
    },
    {
        "Name": "neogen"
    },
    {
        "Name": "neogen ideal d"
    },
    {
        "Name": "neosporin"
    },
    {
        "Name": "nesco"
    },
    {
        "Name": "neuragen pn"
    },
    {
        "Name": "neurorubine"
    },
    {
        "Name": "neutrogena"
    },
    {
        "Name": "new"
    },
    {
        "Name": "New Balance"
    },
    {
        "Name": "new england ropes"
    },
    {
        "Name": "new era"
    },
    {
        "Name": "new era cap company"
    },
    {
        "Name": "New Metro Design"
    },
    {
        "Name": "new shining image"
    },
    {
        "Name": "newmanâ\\u0080\\u0099s own"
    },
    {
        "Name": "nfl"
    },
    {
        "Name": "nhl"
    },
    {
        "Name": "Nia 24"
    },
    {
        "Name": "nichols photography"
    },
    {
        "Name": "NICKELODEON"
    },
    {
        "Name": "nicky clarke"
    },
    {
        "Name": "nicorette"
    },
    {
        "Name": "nighty night nursing light"
    },
    {
        "Name": "NIKE"
    },
    {
        "Name": "nikki's baby blossom's or gift baskets (nikki's baby) (nikki's baskets)"
    },
    {
        "Name": "NIKON"
    },
    {
        "Name": "nil"
    },
    {
        "Name": "Ninja"
    },
    {
        "Name": "ninja bullet"
    },
    {
        "Name": "NINTENDO"
    },
    {
        "Name": "nippii"
    },
    {
        "Name": "Nisim"
    },
    {
        "Name": "NoCry"
    },
    {
        "Name": "nordic lifting"
    },
    {
        "Name": "nordic ware"
    },
    {
        "Name": "NORELCO"
    },
    {
        "Name": "NorPro"
    },
    {
        "Name": "north carolina tar heels"
    },
    {
        "Name": "north face"
    },
    {
        "Name": "northside"
    },
    {
        "Name": "northwest"
    },
    {
        "Name": "novica"
    },
    {
        "Name": "NOW foods"
    },
    {
        "Name": "nubrilliance skin care & skin care systems"
    },
    {
        "Name": "NuFace"
    },
    {
        "Name": "NUK"
    },
    {
        "Name": "nuliah"
    },
    {
        "Name": "Nuna"
    },
    {
        "Name": "nutpods"
    },
    {
        "Name": "Nutramax"
    },
    {
        "Name": "nutramax laboratories"
    },
    {
        "Name": "nutri-vet"
    },
    {
        "Name": "NUTRiBULLET"
    },
    {
        "Name": "nutricology/ allergy research group"
    },
    {
        "Name": "nutrits"
    },
    {
        "Name": "Nuxe"
    },
    {
        "Name": "nylea"
    },
    {
        "Name": "Nyx"
    },
    {
        "Name": "o'neill"
    },
    {
        "Name": "oak leaf"
    },
    {
        "Name": "oakley"
    },
    {
        "Name": "oakley mens"
    },
    {
        "Name": "Obagi"
    },
    {
        "Name": "obenauf's"
    },
    {
        "Name": "occupation/career"
    },
    {
        "Name": "oceanstar"
    },
    {
        "Name": "ohuhu"
    },
    {
        "Name": "oki data corporation"
    },
    {
        "Name": "Oklife"
    },
    {
        "Name": "ökocat"
    },
    {
        "Name": "OLAY"
    },
    {
        "Name": "Old & Urban"
    },
    {
        "Name": "Old Dutch"
    },
    {
        "Name": "old world christmas"
    },
    {
        "Name": "OLLIEROO"
    },
    {
        "Name": "ollois homeopathic"
    },
    {
        "Name": "olukai"
    },
    {
        "Name": "OLYMPUS"
    },
    {
        "Name": "Ombra"
    },
    {
        "Name": "omega"
    },
    {
        "Name": "omega trading group"
    },
    {
        "Name": "OMRON"
    },
    {
        "Name": "one a day"
    },
    {
        "Name": "oniva"
    },
    {
        "Name": "onlinefabricstore"
    },
    {
        "Name": "only you"
    },
    {
        "Name": "Ontel"
    },
    {
        "Name": "Oogiebear"
    },
    {
        "Name": "opti-free"
    },
    {
        "Name": "OPTIMUM NUTRITION"
    },
    {
        "Name": "Oral-b"
    },
    {
        "Name": "orange usa"
    },
    {
        "Name": "OrangeA"
    },
    {
        "Name": "orbeez"
    },
    {
        "Name": "ORBIT"
    },
    {
        "Name": "ORBIT BABY"
    },
    {
        "Name": "Orbit White"
    },
    {
        "Name": "Oreck"
    },
    {
        "Name": "oregon"
    },
    {
        "Name": "Organo Gold"
    },
    {
        "Name": "Oribe"
    },
    {
        "Name": "Orlane"
    },
    {
        "Name": "orocal"
    },
    {
        "Name": "orthotebb health shoes llc"
    },
    {
        "Name": "OSAKI"
    },
    {
        "Name": "Oscar Blandi"
    },
    {
        "Name": "OSHKOSH B'GOSH"
    },
    {
        "Name": "osmo"
    },
    {
        "Name": "osmocote"
    },
    {
        "Name": "Osmosis Skincare"
    },
    {
        "Name": "osnat"
    },
    {
        "Name": "OSTER"
    },
    {
        "Name": "otc"
    },
    {
        "Name": "otter box"
    },
    {
        "Name": "OtterBox"
    },
    {
        "Name": "ottomanson"
    },
    {
        "Name": "Ouddy"
    },
    {
        "Name": "our generation"
    },
    {
        "Name": "our pet's"
    },
    {
        "Name": "our pets"
    },
    {
        "Name": "ourpet's"
    },
    {
        "Name": "ourpets"
    },
    {
        "Name": "OUTBACKTUFF"
    },
    {
        "Name": "outdoor lighting store"
    },
    {
        "Name": "OuterEQ"
    },
    {
        "Name": "outerstuff"
    },
    {
        "Name": "Outsunny"
    },
    {
        "Name": "outward hound"
    },
    {
        "Name": "ovente"
    },
    {
        "Name": "Overboard"
    },
    {
        "Name": "overstock.com inc."
    },
    {
        "Name": "owlprotreasures"
    },
    {
        "Name": "oxford"
    },
    {
        "Name": "oxford garden"
    },
    {
        "Name": "OxGord"
    },
    {
        "Name": "OXO"
    },
    {
        "Name": "oxo tot"
    },
    {
        "Name": "oxo tot baby blocks"
    },
    {
        "Name": "oxo totâ® perchâ\\u0084¢"
    },
    {
        "Name": "OxyLED "
    },
    {
        "Name": "p"
    },
    {
        "Name": "P & G"
    },
    {
        "Name": "p&g"
    },
    {
        "Name": "p.k."
    },
    {
        "Name": "p90-x"
    },
    {
        "Name": "Pacers"
    },
    {
        "Name": "pacidose brand"
    },
    {
        "Name": "Pacific Play Tents"
    },
    {
        "Name": "pacific play tents"
    },
    {
        "Name": "packard club"
    },
    {
        "Name": "Paksh Novelty"
    },
    {
        "Name": "Palais Glassware"
    },
    {
        "Name": "palmolive"
    },
    {
        "Name": "pamp sa"
    },
    {
        "Name": "pampers"
    },
    {
        "Name": "Panasonic"
    },
    {
        "Name": "Pandora"
    },
    {
        "Name": "pangaea home and garden"
    },
    {
        "Name": "paradise film institute/big pictures"
    },
    {
        "Name": "Paradise Galleries"
    },
    {
        "Name": "paragon innovations"
    },
    {
        "Name": "paragon international"
    },
    {
        "Name": "paraso"
    },
    {
        "Name": "parent's choice"
    },
    {
        "Name": "parents trust"
    },
    {
        "Name": "paris saint-germain"
    },
    {
        "Name": "park designs"
    },
    {
        "Name": "parodontax"
    },
    {
        "Name": "Parogencyl"
    },
    {
        "Name": "partrade"
    },
    {
        "Name": "partrade          p"
    },
    {
        "Name": "partrade p"
    },
    {
        "Name": "party animal"
    },
    {
        "Name": "party central"
    },
    {
        "Name": "patch me thru"
    },
    {
        "Name": "Patchology"
    },
    {
        "Name": "patience fruit"
    },
    {
        "Name": "patina"
    },
    {
        "Name": "patmont motor werks/go-pedâ®"
    },
    {
        "Name": "patriot"
    },
    {
        "Name": "patriot home"
    },
    {
        "Name": "Paul Mitchell"
    },
    {
        "Name": "paula deen"
    },
    {
        "Name": "pavilion gift company"
    },
    {
        "Name": "PAW PATROL"
    },
    {
        "Name": "Pawhut"
    },
    {
        "Name": "paws/alcott"
    },
    {
        "Name": "pawsitively perfect bows"
    },
    {
        "Name": "pb max"
    },
    {
        "Name": "pdp"
    },
    {
        "Name": "peachpopscliparttm"
    },
    {
        "Name": "peaktop"
    },
    {
        "Name": "pearl enterprises"
    },
    {
        "Name": "ped egg"
    },
    {
        "Name": "pediasure"
    },
    {
        "Name": "Peek"
    },
    {
        "Name": "peetâ\\u0080\\u0099s coffee"
    },
    {
        "Name": "pen press publishing"
    },
    {
        "Name": "pen+gear"
    },
    {
        "Name": "penguin"
    },
    {
        "Name": "pentair"
    },
    {
        "Name": "Pepperidge Farm"
    },
    {
        "Name": "PEPTO-BISMOL"
    },
    {
        "Name": "percogesic"
    },
    {
        "Name": "perfect"
    },
    {
        "Name": "Perfect Fitness"
    },
    {
        "Name": "perfume samples"
    },
    {
        "Name": "perfume testers"
    },
    {
        "Name": "peri k designs"
    },
    {
        "Name": "perko"
    },
    {
        "Name": "PERLLI"
    },
    {
        "Name": "perma sharp"
    },
    {
        "Name": "permatik"
    },
    {
        "Name": "Perricone"
    },
    {
        "Name": "Perricone MD"
    },
    {
        "Name": "pèrrÿ ellíš"
    },
    {
        "Name": "pestell"
    },
    {
        "Name": "pestell pet - cat"
    },
    {
        "Name": "pestell pet products"
    },
    {
        "Name": "pet factory"
    },
    {
        "Name": "pet goods"
    },
    {
        "Name": "pet goods manufacturing"
    },
    {
        "Name": "Pet Qwerks"
    },
    {
        "Name": "petag"
    },
    {
        "Name": "pete field"
    },
    {
        "Name": "PETER THOMAS ROTH"
    },
    {
        "Name": "petlac"
    },
    {
        "Name": "petlinks"
    },
    {
        "Name": "petlinksã\\u0082â®"
    },
    {
        "Name": "petlinksâ®"
    },
    {
        "Name": "PetMate"
    },
    {
        "Name": "petmateã\\u0082â®"
    },
    {
        "Name": "petmateâ®"
    },
    {
        "Name": "Petpost"
    },
    {
        "Name": "pets first"
    },
    {
        "Name": "petstages"
    },
    {
        "Name": "pevonia international llc"
    },
    {
        "Name": "Pfaltzgraff"
    },
    {
        "Name": "pfister"
    },
    {
        "Name": "phil & teds"
    },
    {
        "Name": "philips"
    },
    {
        "Name": "Philips Norelco"
    },
    {
        "Name": "philips sonicare"
    },
    {
        "Name": "philosophy"
    },
    {
        "Name": "photo file"
    },
    {
        "Name": "photomedex"
    },
    {
        "Name": "Phyto"
    },
    {
        "Name": "Picasso Tiles"
    },
    {
        "Name": "piccardmeds4pets.com"
    },
    {
        "Name": "picnic at ascot"
    },
    {
        "Name": "picnic time"
    },
    {
        "Name": "piddlepad"
    },
    {
        "Name": "Pillsbury"
    },
    {
        "Name": "pilot"
    },
    {
        "Name": "pilot automotive"
    },
    {
        "Name": "pimpom"
    },
    {
        "Name": "Pioneer"
    },
    {
        "Name": "pittman outdoors"
    },
    {
        "Name": "planahead"
    },
    {
        "Name": "Planet"
    },
    {
        "Name": "plano"
    },
    {
        "Name": "planters nuts"
    },
    {
        "Name": "plastible"
    },
    {
        "Name": "plateau"
    },
    {
        "Name": "Play Day"
    },
    {
        "Name": "Play Doh"
    },
    {
        "Name": "play monster"
    },
    {
        "Name": "Playgro"
    },
    {
        "Name": "playmobil"
    },
    {
        "Name": "playmonster"
    },
    {
        "Name": "playstar"
    },
    {
        "Name": "Playtex"
    },
    {
        "Name": "ploom - pax labs"
    },
    {
        "Name": "Plow & Hearth"
    },
    {
        "Name": "plum organics"
    },
    {
        "Name": "plushland"
    },
    {
        "Name": "PMD"
    },
    {
        "Name": "pmd beauty"
    },
    {
        "Name": "pneumaticplus"
    },
    {
        "Name": "POCO DIVO"
    },
    {
        "Name": "POKEMON"
    },
    {
        "Name": "Polar Aurora"
    },
    {
        "Name": "polar pooch"
    },
    {
        "Name": "pompeian"
    },
    {
        "Name": "pool cover corp. dba loop loc"
    },
    {
        "Name": "poolmaster"
    },
    {
        "Name": "poo~pourri"
    },
    {
        "Name": "pop 'n jump"
    },
    {
        "Name": "pop 'n play"
    },
    {
        "Name": "pop 'n sit"
    },
    {
        "Name": "Pop!"
    },
    {
        "Name": "pop! portable on the go products"
    },
    {
        "Name": "poppin file cabinet"
    },
    {
        "Name": "poppy company"
    },
    {
        "Name": "poppy pet"
    },
    {
        "Name": "porter-cable"
    },
    {
        "Name": "porthos home"
    },
    {
        "Name": "poshwag"
    },
    {
        "Name": "Positec"
    },
    {
        "Name": "post"
    },
    {
        "Name": "post-it"
    },
    {
        "Name": "power art design airbrushs pty ltd"
    },
    {
        "Name": "Power Rangers"
    },
    {
        "Name": "Power Straight"
    },
    {
        "Name": "powera"
    },
    {
        "Name": "PowerNet"
    },
    {
        "Name": "practically darling designs"
    },
    {
        "Name": "pramperz"
    },
    {
        "Name": "pratico goods llc"
    },
    {
        "Name": "precious firsts"
    },
    {
        "Name": "Precision Kitchenware"
    },
    {
        "Name": "precision pet"
    },
    {
        "Name": "PRECISION PET PRODUCTS"
    },
    {
        "Name": "pregnavit"
    },
    {
        "Name": "premier"
    },
    {
        "Name": "premier pet"
    },
    {
        "Name": "premium compatibles"
    },
    {
        "Name": "Premium V Slicer"
    },
    {
        "Name": "premiumfishing auctions"
    },
    {
        "Name": "presidential m&m's"
    },
    {
        "Name": "press pass collectibles"
    },
    {
        "Name": "prestige medical"
    },
    {
        "Name": "pretty star store"
    },
    {
        "Name": "prextex"
    },
    {
        "Name": "price first"
    },
    {
        "Name": "Price Pfister"
    },
    {
        "Name": "prilosec"
    },
    {
        "Name": "primetime petz"
    },
    {
        "Name": "Prince Lionheart"
    },
    {
        "Name": "Priscilla Presley"
    },
    {
        "Name": "Pro Chef Kitchen Tools"
    },
    {
        "Name": "pro mark"
    },
    {
        "Name": "pro plus"
    },
    {
        "Name": "pro specialties"
    },
    {
        "Name": "pro specialties group"
    },
    {
        "Name": "pro track"
    },
    {
        "Name": "pro-treat"
    },
    {
        "Name": "Proactive"
    },
    {
        "Name": "probak ii"
    },
    {
        "Name": "probios"
    },
    {
        "Name": "procter & gamble"
    },
    {
        "Name": "PROCTOR & GAMBLE"
    },
    {
        "Name": "proctor silex"
    },
    {
        "Name": "Prodigy"
    },
    {
        "Name": "product stop"
    },
    {
        "Name": "product stop rotating cake stand"
    },
    {
        "Name": "profanity"
    },
    {
        "Name": "professorprofits.com"
    },
    {
        "Name": "projectables"
    },
    {
        "Name": "proline"
    },
    {
        "Name": "promar"
    },
    {
        "Name": "proto"
    },
    {
        "Name": "ProTrack"
    },
    {
        "Name": "Puffs"
    },
    {
        "Name": "pull-ups"
    },
    {
        "Name": "Puma"
    },
    {
        "Name": "pup corn"
    },
    {
        "Name": "púr"
    },
    {
        "Name": "pura d'or"
    },
    {
        "Name": "pure bites"
    },
    {
        "Name": "pure brands mattress topper"
    },
    {
        "Name": "Pure Inventions"
    },
    {
        "Name": "pure treats"
    },
    {
        "Name": "pure treats inc"
    },
    {
        "Name": "purebites"
    },
    {
        "Name": "puzzles"
    },
    {
        "Name": "pyramid america"
    },
    {
        "Name": "pyranha"
    },
    {
        "Name": "Pyrex"
    },
    {
        "Name": "q-tips"
    },
    {
        "Name": "Qooltek"
    },
    {
        "Name": "QUAKER"
    },
    {
        "Name": "quantum storage systems"
    },
    {
        "Name": "quest bars"
    },
    {
        "Name": "quest nutrition"
    },
    {
        "Name": "Quickchange"
    },
    {
        "Name": "quickie"
    },
    {
        "Name": "quiettime"
    },
    {
        "Name": "quilted northern"
    },
    {
        "Name": "Quirky"
    },
    {
        "Name": "r+co"
    },
    {
        "Name": "rachael ray"
    },
    {
        "Name": "Rachel Caine"
    },
    {
        "Name": "radians inc"
    },
    {
        "Name": "rae dunn"
    },
    {
        "Name": "ramard"
    },
    {
        "Name": "ramard inc."
    },
    {
        "Name": "ranch rewards"
    },
    {
        "Name": "randomwalk llc"
    },
    {
        "Name": "ranger doug's enterprises"
    },
    {
        "Name": "rapid"
    },
    {
        "Name": "rare sportsfilms inc."
    },
    {
        "Name": "ravensburger"
    },
    {
        "Name": "Raw Biology"
    },
    {
        "Name": "rawlings"
    },
    {
        "Name": "ray-ban"
    },
    {
        "Name": "rayban"
    },
    {
        "Name": "rayshade"
    },
    {
        "Name": "Rayware"
    },
    {
        "Name": "RAZER"
    },
    {
        "Name": "RAZOR"
    },
    {
        "Name": "razormaid! productions"
    },
    {
        "Name": "rbhk"
    },
    {
        "Name": "rbx"
    },
    {
        "Name": "RCA"
    },
    {
        "Name": "rca (only ones that are not manu)"
    },
    {
        "Name": "reach"
    },
    {
        "Name": "reach access"
    },
    {
        "Name": "Real Flame"
    },
    {
        "Name": "red bull gmbh"
    },
    {
        "Name": "red digital cinema camera company"
    },
    {
        "Name": "Red Panda Bamboo"
    },
    {
        "Name": "red steagall's cowboy corner"
    },
    {
        "Name": "redbarn"
    },
    {
        "Name": "redbarn pet products-food"
    },
    {
        "Name": "redbarnpetproducts"
    },
    {
        "Name": "redkin"
    },
    {
        "Name": "Reebok"
    },
    {
        "Name": "reef"
    },
    {
        "Name": "reelcraft"
    },
    {
        "Name": "refresh optive"
    },
    {
        "Name": "regal comfort"
    },
    {
        "Name": "Regal Flame"
    },
    {
        "Name": "rejoice"
    },
    {
        "Name": "relaxazen"
    },
    {
        "Name": "RELIABLE"
    },
    {
        "Name": "reliable c"
    },
    {
        "Name": "reliance"
    },
    {
        "Name": "Relic"
    },
    {
        "Name": "relleciga official"
    },
    {
        "Name": "REM-Fit"
    },
    {
        "Name": "rembrandt"
    },
    {
        "Name": "rembrandt charms"
    },
    {
        "Name": "remedy home"
    },
    {
        "Name": "reminderband inc."
    },
    {
        "Name": "rEMINGTON"
    },
    {
        "Name": "remington accessories"
    },
    {
        "Name": "ReNew Life"
    },
    {
        "Name": "renpho"
    },
    {
        "Name": "replenish"
    },
    {
        "Name": "replenish pet"
    },
    {
        "Name": "resort sleep"
    },
    {
        "Name": "response products   d"
    },
    {
        "Name": "response products d"
    },
    {
        "Name": "Rest Assured"
    },
    {
        "Name": "Reuzel"
    },
    {
        "Name": "Revelation Records"
    },
    {
        "Name": "revels"
    },
    {
        "Name": "REVLON"
    },
    {
        "Name": "rhinox"
    },
    {
        "Name": "rhodes international"
    },
    {
        "Name": "rice krispies"
    },
    {
        "Name": "richard avedon foundation"
    },
    {
        "Name": "richards homewares"
    },
    {
        "Name": "rico"
    },
    {
        "Name": "rico industries"
    },
    {
        "Name": "ricoh"
    },
    {
        "Name": "riddell"
    },
    {
        "Name": "rideworx pty ltd."
    },
    {
        "Name": "RidgeRock Tools"
    },
    {
        "Name": "RIDGID"
    },
    {
        "Name": "ridley inc."
    },
    {
        "Name": "right height"
    },
    {
        "Name": "rindex"
    },
    {
        "Name": "ring pop"
    },
    {
        "Name": "ringside"
    },
    {
        "Name": "rinnai"
    },
    {
        "Name": "RiptGear"
    },
    {
        "Name": "ritz crackers"
    },
    {
        "Name": "rivington designs ltd"
    },
    {
        "Name": "rn study spot"
    },
    {
        "Name": "RoadMaster"
    },
    {
        "Name": "robert louis tiffany"
    },
    {
        "Name": "Rochas"
    },
    {
        "Name": "rockport"
    },
    {
        "Name": "rod desyne"
    },
    {
        "Name": "rod desyne inc"
    },
    {
        "Name": "Rodan + Fields"
    },
    {
        "Name": "RODE"
    },
    {
        "Name": "Rodial"
    },
    {
        "Name": "rohde fine art"
    },
    {
        "Name": "RolliBot"
    },
    {
        "Name": "Rollplay"
    },
    {
        "Name": "RoomMates"
    },
    {
        "Name": "roommates (made by the company roomates)"
    },
    {
        "Name": "Rosetta Stone"
    },
    {
        "Name": "roth company"
    },
    {
        "Name": "rothco"
    },
    {
        "Name": "rothstein guitars"
    },
    {
        "Name": "router technologies inc"
    },
    {
        "Name": "rowena cherry"
    },
    {
        "Name": "royal"
    },
    {
        "Name": "rro entertainment"
    },
    {
        "Name": "RSG"
    },
    {
        "Name": "RTIC"
    },
    {
        "Name": "rub on relief"
    },
    {
        "Name": "RUBBERMAID"
    },
    {
        "Name": "rubbermaid commercial products"
    },
    {
        "Name": "rubie's"
    },
    {
        "Name": "rubieâ\\u0080\\u0099s"
    },
    {
        "Name": "rucci"
    },
    {
        "Name": "rude awakening coffee house"
    },
    {
        "Name": "rugby laboratories"
    },
    {
        "Name": "ruger"
    },
    {
        "Name": "sabatier"
    },
    {
        "Name": "sabian"
    },
    {
        "Name": "Sachajuan"
    },
    {
        "Name": "sado nation"
    },
    {
        "Name": "sadowsky guitars ltd."
    },
    {
        "Name": "SafeBaby & Child"
    },
    {
        "Name": "SAFEGUARD"
    },
    {
        "Name": "safeplus (amazon)"
    },
    {
        "Name": "Safety 1ST"
    },
    {
        "Name": "SAFETY FIRST"
    },
    {
        "Name": "safstar"
    },
    {
        "Name": "sakura"
    },
    {
        "Name": "Saleen"
    },
    {
        "Name": "sally hansen"
    },
    {
        "Name": "Salon Sundry"
    },
    {
        "Name": "Salton"
    },
    {
        "Name": "Salvo"
    },
    {
        "Name": "samsali inspirations"
    },
    {
        "Name": "samsill"
    },
    {
        "Name": "SAMSUNG"
    },
    {
        "Name": "Sandusky"
    },
    {
        "Name": "Santas Christmas Town"
    },
    {
        "Name": "sanuk"
    },
    {
        "Name": "Sap"
    },
    {
        "Name": "Sara Happ"
    },
    {
        "Name": "sara moon"
    },
    {
        "Name": "Sarasa"
    },
    {
        "Name": "sas safety"
    },
    {
        "Name": "satco"
    },
    {
        "Name": "Satechi"
    },
    {
        "Name": "savanna group ltd - savanna samson"
    },
    {
        "Name": "savvy egg usa"
    },
    {
        "Name": "saw"
    },
    {
        "Name": "sâ\\u0080\\u0099ip by swell"
    },
    {
        "Name": "sc sports"
    },
    {
        "Name": "scandinavian child product (beaba) (lillebaby) (svan)"
    },
    {
        "Name": "schiff"
    },
    {
        "Name": "schlyer designs"
    },
    {
        "Name": "school fanatic"
    },
    {
        "Name": "schutt sports"
    },
    {
        "Name": "scoop away"
    },
    {
        "Name": "SCOPE"
    },
    {
        "Name": "SCOTCH"
    },
    {
        "Name": "scotch-brite"
    },
    {
        "Name": "scott"
    },
    {
        "Name": "scottcrew enterprises"
    },
    {
        "Name": "scottish christmas"
    },
    {
        "Name": "scotts"
    },
    {
        "Name": "scribbledo"
    },
    {
        "Name": "scrolling license plate patent infringement"
    },
    {
        "Name": "seachoice"
    },
    {
        "Name": "searching for louis media"
    },
    {
        "Name": "seasonal designs"
    },
    {
        "Name": "seasonstrading"
    },
    {
        "Name": "seattle seahawks"
    },
    {
        "Name": "SEBASTIAN"
    },
    {
        "Name": "Secret"
    },
    {
        "Name": "SECRET LIFE OF PETS"
    },
    {
        "Name": "secret-of-art"
    },
    {
        "Name": "secure sight"
    },
    {
        "Name": "secure surround"
    },
    {
        "Name": "seeing with sound - the voice"
    },
    {
        "Name": "seek-a-treat"
    },
    {
        "Name": "seeking health"
    },
    {
        "Name": "sega"
    },
    {
        "Name": "sei (southern enterprises)"
    },
    {
        "Name": "SEIKO"
    },
    {
        "Name": "seiva de alfazema"
    },
    {
        "Name": "select the best"
    },
    {
        "Name": "SEMOO"
    },
    {
        "Name": "SENSA"
    },
    {
        "Name": "sensation press"
    },
    {
        "Name": "sensodyne"
    },
    {
        "Name": "sensual candle"
    },
    {
        "Name": "SEPHORA"
    },
    {
        "Name": "sequoia brands"
    },
    {
        "Name": "Serena D'Italia"
    },
    {
        "Name": "sew terific designs"
    },
    {
        "Name": "sewing bee crinoline ladies embroidery patterns"
    },
    {
        "Name": "shabby chic"
    },
    {
        "Name": "shamtu"
    },
    {
        "Name": "shark"
    },
    {
        "Name": "sharkninja"
    },
    {
        "Name": "sharpie"
    },
    {
        "Name": "Sheer Strength Labs"
    },
    {
        "Name": "ShelterLogic"
    },
    {
        "Name": "shiseido company limited"
    },
    {
        "Name": "SHOPKINS"
    },
    {
        "Name": "showa"
    },
    {
        "Name": "ShowerMade"
    },
    {
        "Name": "Showtime"
    },
    {
        "Name": "side sleeper pro"
    },
    {
        "Name": "siesco international limited"
    },
    {
        "Name": "SIGMA BEAUTY"
    },
    {
        "Name": "sigmacumlaude.com"
    },
    {
        "Name": "Signature Design By Ashley"
    },
    {
        "Name": "sikoimate"
    },
    {
        "Name": "siltra"
    },
    {
        "Name": "silver stone"
    },
    {
        "Name": "silver stone (only ones that are not a manu) (might need to search) silverstone)"
    },
    {
        "Name": "silvergrade"
    },
    {
        "Name": "silverstone tek (not silverstone pans)"
    },
    {
        "Name": "silvikrin"
    },
    {
        "Name": "similac"
    },
    {
        "Name": "simple mills"
    },
    {
        "Name": "Simplehuman"
    },
    {
        "Name": "simply pine"
    },
    {
        "Name": "simply slender"
    },
    {
        "Name": "simpson strong-tie"
    },
    {
        "Name": "sinestro"
    },
    {
        "Name": "Sipik"
    },
    {
        "Name": "sisiyou"
    },
    {
        "Name": "siskiyou"
    },
    {
        "Name": "siskiyou gifts"
    },
    {
        "Name": "siskiyou sports"
    },
    {
        "Name": "Sivan"
    },
    {
        "Name": "sk ii"
    },
    {
        "Name": "SK-II"
    },
    {
        "Name": "Skagen"
    },
    {
        "Name": "skechers"
    },
    {
        "Name": "skechers go golf"
    },
    {
        "Name": "SkinCeuticals"
    },
    {
        "Name": "Skip Hop"
    },
    {
        "Name": "skip hop zoo"
    },
    {
        "Name": "skiphop"
    },
    {
        "Name": "Skittles"
    },
    {
        "Name": "Skullcandy"
    },
    {
        "Name": "SKYLINE"
    },
    {
        "Name": "skyn ICELAND"
    },
    {
        "Name": "skyroof"
    },
    {
        "Name": "Skywalker"
    },
    {
        "Name": "slow-mag"
    },
    {
        "Name": "slumber buddies"
    },
    {
        "Name": "smart mass"
    },
    {
        "Name": "Smart Swab"
    },
    {
        "Name": "smarterfresh llc"
    },
    {
        "Name": "smartstoy"
    },
    {
        "Name": "smartwool"
    },
    {
        "Name": "smith & wesson"
    },
    {
        "Name": "smokehouse"
    },
    {
        "Name": "smuckers"
    },
    {
        "Name": "snakeemporium.com"
    },
    {
        "Name": "snap-on incorporated"
    },
    {
        "Name": "snb-react netherlands"
    },
    {
        "Name": "Snickers"
    },
    {
        "Name": "snoopy sno-cone machine"
    },
    {
        "Name": "snoozer"
    },
    {
        "Name": "snugarooz"
    },
    {
        "Name": "snugglycat inc - the ripple rug"
    },
    {
        "Name": "snuzzler"
    },
    {
        "Name": "snyderâ\\u0080\\u0099s"
    },
    {
        "Name": "society for human resource management"
    },
    {
        "Name": "society43"
    },
    {
        "Name": "sof comfort"
    },
    {
        "Name": "softspun"
    },
    {
        "Name": "software & information industry association (siia)"
    },
    {
        "Name": "SOL Republic"
    },
    {
        "Name": "Solano"
    },
    {
        "Name": "solar eclipz"
    },
    {
        "Name": "soldier it"
    },
    {
        "Name": "solid copper mugs"
    },
    {
        "Name": "SOLIMO"
    },
    {
        "Name": "Solio"
    },
    {
        "Name": "solowork studio"
    },
    {
        "Name": "Solvit"
    },
    {
        "Name": "Somme Institute"
    },
    {
        "Name": "Songmics"
    },
    {
        "Name": "sonos"
    },
    {
        "Name": "sony"
    },
    {
        "Name": "soul naturalizer"
    },
    {
        "Name": "Sound Oasis"
    },
    {
        "Name": "source naturals"
    },
    {
        "Name": "south bend"
    },
    {
        "Name": "south shore furniture"
    },
    {
        "Name": "southern champion tray"
    },
    {
        "Name": "spangles"
    },
    {
        "Name": "spark cafe"
    },
    {
        "Name": "sparkle"
    },
    {
        "Name": "sparo"
    },
    {
        "Name": "spaulding"
    },
    {
        "Name": "Spearmint"
    },
    {
        "Name": "SPECK"
    },
    {
        "Name": "spectra shield"
    },
    {
        "Name": "speed stacks stack pack"
    },
    {
        "Name": "Speedo"
    },
    {
        "Name": "Sperry"
    },
    {
        "Name": "spice islands"
    },
    {
        "Name": "spicecrafts"
    },
    {
        "Name": "Spicy Shelf"
    },
    {
        "Name": "spider-man"
    },
    {
        "Name": "Spigen"
    },
    {
        "Name": "SPIN MASTER"
    },
    {
        "Name": "split ender pro"
    },
    {
        "Name": "spohn global enterprises"
    },
    {
        "Name": "spontuneous"
    },
    {
        "Name": "sport collectors guild"
    },
    {
        "Name": "sports collector's guild"
    },
    {
        "Name": "sports collectors guild"
    },
    {
        "Name": "Sports God"
    },
    {
        "Name": "sports integrity"
    },
    {
        "Name": "sportula"
    },
    {
        "Name": "sporty k9"
    },
    {
        "Name": "spot"
    },
    {
        "Name": "spring assist"
    },
    {
        "Name": "sprint corporation"
    },
    {
        "Name": "sprynova"
    },
    {
        "Name": "spy alley"
    },
    {
        "Name": "square"
    },
    {
        "Name": "Squeaky Clean"
    },
    {
        "Name": "squirrel products"
    },
    {
        "Name": "St. Tropez"
    },
    {
        "Name": "stagg"
    },
    {
        "Name": "stamina"
    },
    {
        "Name": "STANLEY"
    },
    {
        "Name": "STANSPORT"
    },
    {
        "Name": "star brite"
    },
    {
        "Name": "star gear"
    },
    {
        "Name": "star series electric guitar"
    },
    {
        "Name": "Star WArs"
    },
    {
        "Name": "starbar"
    },
    {
        "Name": "starbucks"
    },
    {
        "Name": "STARBURST"
    },
    {
        "Name": "starmark"
    },
    {
        "Name": "starmarkã\\u0082â®"
    },
    {
        "Name": "starmarkâ®"
    },
    {
        "Name": "STARTECH"
    },
    {
        "Name": "starting lineup"
    },
    {
        "Name": "Staub"
    },
    {
        "Name": "stearns"
    },
    {
        "Name": "Steel Glo"
    },
    {
        "Name": "steiner sports"
    },
    {
        "Name": "stella & dot"
    },
    {
        "Name": "Step-by-Step"
    },
    {
        "Name": "Step2"
    },
    {
        "Name": "stephen joseph"
    },
    {
        "Name": "Stephen Shore"
    },
    {
        "Name": "sterling plumbing"
    },
    {
        "Name": "sterlingtek"
    },
    {
        "Name": "steve jackson games"
    },
    {
        "Name": "steve madden"
    },
    {
        "Name": "stewart"
    },
    {
        "Name": "stiga"
    },
    {
        "Name": "STILA"
    },
    {
        "Name": "stk and sterlingtek"
    },
    {
        "Name": "stockdale"
    },
    {
        "Name": "strikemaster"
    },
    {
        "Name": "StriVectin"
    },
    {
        "Name": "stromberg carburetor ltd."
    },
    {
        "Name": "strongid"
    },
    {
        "Name": "stud muffins"
    },
    {
        "Name": "stussy inc."
    },
    {
        "Name": "style pasifika"
    },
    {
        "Name": "Subway"
    },
    {
        "Name": "sue coffee"
    },
    {
        "Name": "sugus"
    },
    {
        "Name": "Sultra"
    },
    {
        "Name": "summer circle"
    },
    {
        "Name": "SUMMER INFANT"
    },
    {
        "Name": "summit cookie bars"
    },
    {
        "Name": "SummitFashions"
    },
    {
        "Name": "sun bum"
    },
    {
        "Name": "suncrown inc"
    },
    {
        "Name": "sundown naturals"
    },
    {
        "Name": "sunex tools"
    },
    {
        "Name": "sunny health & fitness"
    },
    {
        "Name": "sunnydaze dã©cor"
    },
    {
        "Name": "Sunrider International"
    },
    {
        "Name": "sunseedã\\u0082â®"
    },
    {
        "Name": "sunseedâ®"
    },
    {
        "Name": "sunshine mills"
    },
    {
        "Name": "sunshine mills inc"
    },
    {
        "Name": "suntime"
    },
    {
        "Name": "suntyme"
    },
    {
        "Name": "super pet"
    },
    {
        "Name": "super poligrip"
    },
    {
        "Name": "super seat"
    },
    {
        "Name": "supreme saver"
    },
    {
        "Name": "supremo"
    },
    {
        "Name": "sure and secure"
    },
    {
        "Name": "surya"
    },
    {
        "Name": "Sustainable Simplicity"
    },
    {
        "Name": "Svan"
    },
    {
        "Name": "swaddle me"
    },
    {
        "Name": "swaddlepod"
    },
    {
        "Name": "swamp fox"
    },
    {
        "Name": "swanson ultra"
    },
    {
        "Name": "swarovski north america limited"
    },
    {
        "Name": "sweet home stores"
    },
    {
        "Name": "Sweet JoJo"
    },
    {
        "Name": "Swiffer"
    },
    {
        "Name": "swimline"
    },
    {
        "Name": "swing set stuff inc"
    },
    {
        "Name": "swingline"
    },
    {
        "Name": "swiss miss"
    },
    {
        "Name": "sylvania"
    },
    {
        "Name": "sylver designs"
    },
    {
        "Name": "symax"
    },
    {
        "Name": "synergetics"
    },
    {
        "Name": "sys"
    },
    {
        "Name": "systane"
    },
    {
        "Name": "t-mobile prepaid phones"
    },
    {
        "Name": "T3"
    },
    {
        "Name": "T7 TEA"
    },
    {
        "Name": "tach-it"
    },
    {
        "Name": "tachikara usa"
    },
    {
        "Name": "tacony corporation"
    },
    {
        "Name": "tad-bits baby items and more llc"
    },
    {
        "Name": "tail gates"
    },
    {
        "Name": "takata corporation"
    },
    {
        "Name": "Talavera"
    },
    {
        "Name": "TAMPAX"
    },
    {
        "Name": "tangible play"
    },
    {
        "Name": "tania r. chase"
    },
    {
        "Name": "TaoTronics"
    },
    {
        "Name": "tapirus utensils"
    },
    {
        "Name": "taser international inc"
    },
    {
        "Name": "Tata"
    },
    {
        "Name": "taylor made"
    },
    {
        "Name": "taylormade"
    },
    {
        "Name": "tã\\u009Cv markenverbund e.v"
    },
    {
        "Name": "tbbsc"
    },
    {
        "Name": "tck"
    },
    {
        "Name": "Tcp"
    },
    {
        "Name": "team beans"
    },
    {
        "Name": "team effort"
    },
    {
        "Name": "team golf"
    },
    {
        "Name": "team promark"
    },
    {
        "Name": "team sports america"
    },
    {
        "Name": "technica usa (moon boot)"
    },
    {
        "Name": "technical video llc"
    },
    {
        "Name": "techsmith corporation"
    },
    {
        "Name": "Teekland"
    },
    {
        "Name": "Teeter"
    },
    {
        "Name": "tekay designs inc."
    },
    {
        "Name": "tele vue"
    },
    {
        "Name": "TeleBrands"
    },
    {
        "Name": "tena"
    },
    {
        "Name": "Tenive"
    },
    {
        "Name": "tenkara usa"
    },
    {
        "Name": "tenpoint crossbows"
    },
    {
        "Name": "terra & sky"
    },
    {
        "Name": "terrapin ridge farms"
    },
    {
        "Name": "Terrasil"
    },
    {
        "Name": "terry naturally"
    },
    {
        "Name": "TERVIS"
    },
    {
        "Name": "tess"
    },
    {
        "Name": "tetra pond"
    },
    {
        "Name": "teva"
    },
    {
        "Name": "tevra brands"
    },
    {
        "Name": "tevra brands llc"
    },
    {
        "Name": "llc"
    },
    {
        "Name": "that's my ticket"
    },
    {
        "Name": "The Art of Shaving"
    },
    {
        "Name": "the baby sleep experts"
    },
    {
        "Name": "the best time of your life"
    },
    {
        "Name": "The Body Shop"
    },
    {
        "Name": "the doctor is in"
    },
    {
        "Name": "the first years"
    },
    {
        "Name": "The Green Pet shop"
    },
    {
        "Name": "THE HONEST COMPANY"
    },
    {
        "Name": "the hunter company"
    },
    {
        "Name": "the lakeside collection"
    },
    {
        "Name": "the memory company"
    },
    {
        "Name": "The North Face"
    },
    {
        "Name": "the north face apparel corp."
    },
    {
        "Name": "the northwest company"
    },
    {
        "Name": "the original donut shop"
    },
    {
        "Name": "the party animal"
    },
    {
        "Name": "the pïoneer woman"
    },
    {
        "Name": "the sports vault"
    },
    {
        "Name": "the wonderland company"
    },
    {
        "Name": "thera health brands"
    },
    {
        "Name": "Theraflu"
    },
    {
        "Name": "THERAPEDIC"
    },
    {
        "Name": "thermalon"
    },
    {
        "Name": "thermaltake"
    },
    {
        "Name": "THINKFUN"
    },
    {
        "Name": "Third Man Records"
    },
    {
        "Name": "thirstystone"
    },
    {
        "Name": "thomas & betts"
    },
    {
        "Name": "thomas & friends"
    },
    {
        "Name": "thomas losh"
    },
    {
        "Name": "thorlo"
    },
    {
        "Name": "thread-a-bead"
    },
    {
        "Name": "three by three"
    },
    {
        "Name": "three dog bakery"
    },
    {
        "Name": "three dogs and a cat inc."
    },
    {
        "Name": "thrive"
    },
    {
        "Name": "thule"
    },
    {
        "Name": "Tide"
    },
    {
        "Name": "tide/ariel"
    },
    {
        "Name": "tiffany & company"
    },
    {
        "Name": "tiger tom pistone race cars & parts"
    },
    {
        "Name": "tigerdirect"
    },
    {
        "Name": "Timberland"
    },
    {
        "Name": "timberland pro"
    },
    {
        "Name": "time and tru"
    },
    {
        "Name": "time tracker technology"
    },
    {
        "Name": "time-to-go"
    },
    {
        "Name": "tinks"
    },
    {
        "Name": "tinosorb"
    },
    {
        "Name": "tinydiner"
    },
    {
        "Name": "tix"
    },
    {
        "Name": "tmp international"
    },
    {
        "Name": "Tms"
    },
    {
        "Name": "Toddy"
    },
    {
        "Name": "tokens & icons"
    },
    {
        "Name": "tokyoflash japan"
    },
    {
        "Name": "tom ford"
    },
    {
        "Name": "tom tailor"
    },
    {
        "Name": "Tom's"
    },
    {
        "Name": "tom's of maine"
    },
    {
        "Name": "tomei powered usa inc."
    },
    {
        "Name": "tommee tippee"
    },
    {
        "Name": "Tommy hilfiger"
    },
    {
        "Name": "Toms"
    },
    {
        "Name": "toms kids"
    },
    {
        "Name": "toms shoes"
    },
    {
        "Name": "tomy"
    },
    {
        "Name": "tony chachere's"
    },
    {
        "Name": "top knobs"
    },
    {
        "Name": "top of the world"
    },
    {
        "Name": "TOP SECRET RECIPES"
    },
    {
        "Name": "topic"
    },
    {
        "Name": "TopYart"
    },
    {
        "Name": "torchstar"
    },
    {
        "Name": "torque king"
    },
    {
        "Name": "Tory Burch"
    },
    {
        "Name": "total eclipse"
    },
    {
        "Name": "total family ministries"
    },
    {
        "Name": "Total Gym"
    },
    {
        "Name": "TOTLOGIC"
    },
    {
        "Name": "TOUCAN"
    },
    {
        "Name": "tough 1"
    },
    {
        "Name": "tough-1"
    },
    {
        "Name": "Tow Ready"
    },
    {
        "Name": "toysmith"
    },
    {
        "Name": "toyx"
    },
    {
        "Name": "Tracker"
    },
    {
        "Name": "trademark art"
    },
    {
        "Name": "trademark fine art"
    },
    {
        "Name": "trademark gameroom"
    },
    {
        "Name": "trademark games"
    },
    {
        "Name": "trademark global"
    },
    {
        "Name": "trademark innovations"
    },
    {
        "Name": "trader joe's"
    },
    {
        "Name": "traeger pellet grills"
    },
    {
        "Name": "trailersauce"
    },
    {
        "Name": "Training Mask"
    },
    {
        "Name": "TRANSFORMERS"
    },
    {
        "Name": "travelrest pillow"
    },
    {
        "Name": "Travelwey"
    },
    {
        "Name": "treasure2"
    },
    {
        "Name": "treasured hungarian family recipestm"
    },
    {
        "Name": "tree dazzler"
    },
    {
        "Name": "treets"
    },
    {
        "Name": "trend"
    },
    {
        "Name": "trend lab"
    },
    {
        "Name": "trends international"
    },
    {
        "Name": "tribeca gear"
    },
    {
        "Name": "TribeSigns"
    },
    {
        "Name": "TriggerPoint"
    },
    {
        "Name": "trinity"
    },
    {
        "Name": "trinity cooler"
    },
    {
        "Name": "triumph"
    },
    {
        "Name": "triumph pet industries"
    },
    {
        "Name": "trojan"
    },
    {
        "Name": "trophy rock"
    },
    {
        "Name": "True Induction"
    },
    {
        "Name": "true religion brand jeans"
    },
    {
        "Name": "truper"
    },
    {
        "Name": "tshirt bordello"
    },
    {
        "Name": "Tsum tsum"
    },
    {
        "Name": "ttx tech"
    },
    {
        "Name": "tunes"
    },
    {
        "Name": "Turbosmart"
    },
    {
        "Name": "Turcom"
    },
    {
        "Name": "turner licensing"
    },
    {
        "Name": "turner sports"
    },
    {
        "Name": "turtle beach"
    },
    {
        "Name": "tv freeway"
    },
    {
        "Name": "tvilum"
    },
    {
        "Name": "TWIX"
    },
    {
        "Name": "two feet ahead"
    },
    {
        "Name": "two volcanoes"
    },
    {
        "Name": "ty"
    },
    {
        "Name": "tyg store"
    },
    {
        "Name": "tylenol"
    },
    {
        "Name": "Typhoon"
    },
    {
        "Name": "ubisoft"
    },
    {
        "Name": "Uggs"
    },
    {
        "Name": "uloveido"
    },
    {
        "Name": "ultimate sports franchise agents"
    },
    {
        "Name": "ultra game"
    },
    {
        "Name": "ultra sunsation"
    },
    {
        "Name": "ultramax products limited"
    },
    {
        "Name": "umarex"
    },
    {
        "Name": "Umbra"
    },
    {
        "Name": "Under armour"
    },
    {
        "Name": "underground toys"
    },
    {
        "Name": "underwraps"
    },
    {
        "Name": "uni"
    },
    {
        "Name": "unique baby products"
    },
    {
        "Name": "UNIQUE INDUSTRIES"
    },
    {
        "Name": "unite"
    },
    {
        "Name": "united states forest service - usda"
    },
    {
        "Name": "university games"
    },
    {
        "Name": "university glass"
    },
    {
        "Name": "University of Iowa"
    },
    {
        "Name": "UNKNOWN"
    },
    {
        "Name": "Upper Deck"
    },
    {
        "Name": "upstart brands"
    },
    {
        "Name": "Urban Decay"
    },
    {
        "Name": "URBANE"
    },
    {
        "Name": "urbanest"
    },
    {
        "Name": "ursula hock-henschke"
    },
    {
        "Name": "US Acrylic"
    },
    {
        "Name": "ushio"
    },
    {
        "Name": "Utopia Kitchen"
    },
    {
        "Name": "uVernal"
    },
    {
        "Name": "V-Tech"
    },
    {
        "Name": "v.i.p."
    },
    {
        "Name": "vacheron constantin"
    },
    {
        "Name": "VACMASTER"
    },
    {
        "Name": "valcon games"
    },
    {
        "Name": "Valentino"
    },
    {
        "Name": "valusoft"
    },
    {
        "Name": "van ness"
    },
    {
        "Name": "vankyo"
    },
    {
        "Name": "vankyo leisure"
    },
    {
        "Name": "VANRA"
    },
    {
        "Name": "Varo"
    },
    {
        "Name": "vaunn medical equipment"
    },
    {
        "Name": "Vdomus"
    },
    {
        "Name": "veggie bullet"
    },
    {
        "Name": "VEMOTIX"
    },
    {
        "Name": "vemotix or vemotixâ\\u0084¢"
    },
    {
        "Name": "Vera Bradley"
    },
    {
        "Name": "Versacart"
    },
    {
        "Name": "vetality"
    },
    {
        "Name": "vetri-science"
    },
    {
        "Name": "vetriscience"
    },
    {
        "Name": "vets plus probios    d"
    },
    {
        "Name": "vets plus probios d"
    },
    {
        "Name": "viakal"
    },
    {
        "Name": "vibovit bobas"
    },
    {
        "Name": "vibovit junior"
    },
    {
        "Name": "vibram"
    },
    {
        "Name": "vibrant life"
    },
    {
        "Name": "vickie milazzo institute"
    },
    {
        "Name": "vicks"
    },
    {
        "Name": "VICTORIA SECRET"
    },
    {
        "Name": "victoriaâ\\u0080\\u0099s secret"
    },
    {
        "Name": "victory seed co."
    },
    {
        "Name": "victsing"
    },
    {
        "Name": "vietnam international video"
    },
    {
        "Name": "Vimerson Health"
    },
    {
        "Name": "Vincent longo"
    },
    {
        "Name": "vinluxe wine aerator"
    },
    {
        "Name": "vintage cigarette lighters"
    },
    {
        "Name": "vinvent longo"
    },
    {
        "Name": "Vionic"
    },
    {
        "Name": "viper interactive"
    },
    {
        "Name": "virbac"
    },
    {
        "Name": "virgil c. stephens"
    },
    {
        "Name": "vitagardens"
    },
    {
        "Name": "vitakraft"
    },
    {
        "Name": "vitakraftã\\u0082â®"
    },
    {
        "Name": "vitakraftâ®"
    },
    {
        "Name": "Vitamin C"
    },
    {
        "Name": "vitamin e"
    },
    {
        "Name": "vitaminum b compositum"
    },
    {
        "Name": "vitaminum b6"
    },
    {
        "Name": "vitron-c"
    },
    {
        "Name": "VIVE"
    },
    {
        "Name": "viviscal"
    },
    {
        "Name": "vivo"
    },
    {
        "Name": "vizir"
    },
    {
        "Name": "voit"
    },
    {
        "Name": "volkswagen corporation"
    },
    {
        "Name": "vonhaus"
    },
    {
        "Name": "VonShef"
    },
    {
        "Name": "Vortex Optics"
    },
    {
        "Name": "Vulli"
    },
    {
        "Name": "Vxi"
    },
    {
        "Name": "WACCES"
    },
    {
        "Name": "wacoal"
    },
    {
        "Name": "WACOM"
    },
    {
        "Name": "Wahl"
    },
    {
        "Name": "walker metalsmiths celtic jewelry"
    },
    {
        "Name": "walkfit platinum orthotics"
    },
    {
        "Name": "ware family genealogy"
    },
    {
        "Name": "ware manufacturing"
    },
    {
        "Name": "ware manufacturing inc"
    },
    {
        "Name": "ware mfg. inc. bird/sm an"
    },
    {
        "Name": "ware mfg. inc. dog/cat"
    },
    {
        "Name": "wareã\\u0082â®"
    },
    {
        "Name": "wareâ®"
    },
    {
        "Name": "Warner Brothers"
    },
    {
        "Name": "warner music group"
    },
    {
        "Name": "warner's blue ribbon books on swarovski"
    },
    {
        "Name": "wash & go"
    },
    {
        "Name": "water gremlin company"
    },
    {
        "Name": "Waterfall Filter"
    },
    {
        "Name": "waterman"
    },
    {
        "Name": "waterwipes"
    },
    {
        "Name": "Wayne"
    },
    {
        "Name": "wc"
    },
    {
        "Name": "web linens"
    },
    {
        "Name": "WEBER"
    },
    {
        "Name": "webster's pages"
    },
    {
        "Name": "Wedderspoon"
    },
    {
        "Name": "weems & plath / conant"
    },
    {
        "Name": "wella professional"
    },
    {
        "Name": "WEN"
    },
    {
        "Name": "wes and willy"
    },
    {
        "Name": "west ridge outdoors"
    },
    {
        "Name": "WESTERN DIGITAL"
    },
    {
        "Name": "westrick paper"
    },
    {
        "Name": "wgi innovations"
    },
    {
        "Name": "wh software limited"
    },
    {
        "Name": "what do you meme llc"
    },
    {
        "Name": "what do you meme?"
    },
    {
        "Name": "whet stone cutlery"
    },
    {
        "Name": "whitetail"
    },
    {
        "Name": "whitetail institute"
    },
    {
        "Name": "whitetail institute of na"
    },
    {
        "Name": "WHITMOR"
    },
    {
        "Name": "wholesome pride"
    },
    {
        "Name": "wiha"
    },
    {
        "Name": "WII"
    },
    {
        "Name": "wild republic"
    },
    {
        "Name": "wild sports"
    },
    {
        "Name": "wildgame innovations"
    },
    {
        "Name": "wildman business group"
    },
    {
        "Name": "Williams-Sonoma"
    },
    {
        "Name": "Willow & Everett"
    },
    {
        "Name": "WIlson"
    },
    {
        "Name": "Wilson Sporting Goods"
    },
    {
        "Name": "WILTON"
    },
    {
        "Name": "wincraft"
    },
    {
        "Name": "Wind & Weather"
    },
    {
        "Name": "winding way farm"
    },
    {
        "Name": "windmill-parts.com"
    },
    {
        "Name": "wine enthusiast"
    },
    {
        "Name": "winning streak"
    },
    {
        "Name": "Winterfresh"
    },
    {
        "Name": "witamina c monovitan"
    },
    {
        "Name": "wnl products"
    },
    {
        "Name": "wod toys"
    },
    {
        "Name": "Wolf"
    },
    {
        "Name": "Wolf Mattress"
    },
    {
        "Name": "wolverine"
    },
    {
        "Name": "WONDER CORE"
    },
    {
        "Name": "wonder nation"
    },
    {
        "Name": "wonder wizards"
    },
    {
        "Name": "WonderVeg"
    },
    {
        "Name": "Woodward"
    },
    {
        "Name": "world kitchen"
    },
    {
        "Name": "world's best cat litter"
    },
    {
        "Name": "world's best cat litter?"
    },
    {
        "Name": "worldwise inc"
    },
    {
        "Name": "worthy promo"
    },
    {
        "Name": "wow wee"
    },
    {
        "Name": "wrebbit puzzles"
    },
    {
        "Name": "Wrigley's Spearmint"
    },
    {
        "Name": "WubbaNub"
    },
    {
        "Name": "wuhan"
    },
    {
        "Name": "wuppessen"
    },
    {
        "Name": "wusthoff"
    },
    {
        "Name": "WWE"
    },
    {
        "Name": "Wyndham Collection"
    },
    {
        "Name": "x bats"
    },
    {
        "Name": "X-Chef"
    },
    {
        "Name": "x-mini capsule speakers"
    },
    {
        "Name": "XEROX"
    },
    {
        "Name": "xiangzhiheng electronics inc."
    },
    {
        "Name": "xinyuwin"
    },
    {
        "Name": "xpressmart.com"
    },
    {
        "Name": "xyzal"
    },
    {
        "Name": "yamazaki"
    },
    {
        "Name": "YANKEE CANDLE"
    },
    {
        "Name": "ybm"
    },
    {
        "Name": "Yes"
    },
    {
        "Name": "yes to"
    },
    {
        "Name": "Yes4All"
    },
    {
        "Name": "YETI"
    },
    {
        "Name": "Yodel"
    },
    {
        "Name": "Yoga Accessories"
    },
    {
        "Name": "yogi tea"
    },
    {
        "Name": "yorha"
    },
    {
        "Name": "York Wallcoverings"
    },
    {
        "Name": "youcopiaâ\\u0080\\u0099s"
    },
    {
        "Name": "Younique"
    },
    {
        "Name": "youthefan"
    },
    {
        "Name": "yuedge"
    },
    {
        "Name": "Yukiss"
    },
    {
        "Name": "yumco"
    },
    {
        "Name": "yumyum utensils"
    },
    {
        "Name": "yvolution"
    },
    {
        "Name": "zand"
    },
    {
        "Name": "zapler games"
    },
    {
        "Name": "zarbee's"
    },
    {
        "Name": "zarbee's naturals"
    },
    {
        "Name": "zatarain's"
    },
    {
        "Name": "Zazzol"
    },
    {
        "Name": "ZEEFO"
    },
    {
        "Name": "Zen"
    },
    {
        "Name": "zen laboratory"
    },
    {
        "Name": "zep-pro"
    },
    {
        "Name": "zephyr"
    },
    {
        "Name": "Zest"
    },
    {
        "Name": "ZICOME"
    },
    {
        "Name": "ZING ANYTHING"
    },
    {
        "Name": "Zip Grinders"
    },
    {
        "Name": "ZIRH"
    },
    {
        "Name": "zjkc product"
    },
    {
        "Name": "Zoku"
    },
    {
        "Name": "zoo med"
    },
    {
        "Name": "zoo med laboratories inc"
    },
    {
        "Name": "zoomworks stuffies"
    },
    {
        "Name": "zooth"
    },
    {
        "Name": "zubaz"
    },
    {
        "Name": "Zuzu"
    },
    {
        "Name": "Zwilling"
    },
    {
        "Name": "zwilling ja henckels"
    },
    {
        "Name": "zymox"
    },
    {
        "Name": "zyrtec"
    },
    {
        "Name": "zzag tube wht king 200's"
    },
    {
        "Name": "ZZZQuil"
    },
    {
        "Name": "’47"
    },
    {
        "Name": "holiday time"
    },
    {
        "Name": "melissa & doug"
    },
    {
        "Name": "lugz"
    },
    {
        "Name": "metabo hpt"
    },
    {
        "Name": "spark create imagine"
    },
    {
        "Name": "1com"
    },
    {
        "Name": "3NS"
    },
    {
        "Name": "3ns kinesiology"
    },
    {
        "Name": "actlati"
    },
    {
        "Name": "Adrienne Vittadini"
    },
    {
        "Name": "aidea"
    },
    {
        "Name": "ALPHA"
    },
    {
        "Name": "amovo"
    },
    {
        "Name": "angels fancy dress"
    },
    {
        "Name": "AngelSounds"
    },
    {
        "Name": "aquapix"
    },
    {
        "Name": "aroamas"
    },
    {
        "Name": "ASANTEE"
    },
    {
        "Name": "Asquared Nutrition"
    },
    {
        "Name": "audio quest"
    },
    {
        "Name": "audiotech"
    },
    {
        "Name": "avanchy"
    },
    {
        "Name": "Avermedia"
    },
    {
        "Name": "AZTEC"
    },
    {
        "Name": "Baby dumpling"
    },
    {
        "Name": "babyplus"
    },
    {
        "Name": "babyplus company"
    },
    {
        "Name": "bassbuds"
    },
    {
        "Name": "bayer advantage"
    },
    {
        "Name": "Beauty By Earth"
    },
    {
        "Name": "beauty pet"
    },
    {
        "Name": "besdata"
    },
    {
        "Name": "betsey johnson"
    },
    {
        "Name": "beyond tangy"
    },
    {
        "Name": "beyond tangy tangerine"
    },
    {
        "Name": "bgz"
    },
    {
        "Name": "bh costmetics"
    },
    {
        "Name": "black diamond pigments™"
    },
    {
        "Name": "BodyGuardZ"
    },
    {
        "Name": "BOSTON"
    },
    {
        "Name": "bpro"
    },
    {
        "Name": "brach’s"
    },
    {
        "Name": "braggs apple cider vinegar"
    },
    {
        "Name": "britannia"
    },
    {
        "Name": "britannia games"
    },
    {
        "Name": "bunn"
    },
    {
        "Name": "burt’s bees"
    },
    {
        "Name": "CANARY"
    },
    {
        "Name": "carter’s"
    },
    {
        "Name": "case mate"
    },
    {
        "Name": "Casematix"
    },
    {
        "Name": "cedar electronics"
    },
    {
        "Name": "chinkyboo"
    },
    {
        "Name": "Christian dior"
    },
    {
        "Name": "city scene"
    },
    {
        "Name": "comfylife"
    },
    {
        "Name": "comic concept"
    },
    {
        "Name": "comic maker"
    },
    {
        "Name": "comic-concept"
    },
    {
        "Name": "contigo"
    },
    {
        "Name": "CROSS"
    },
    {
        "Name": "Cuddl Duds"
    },
    {
        "Name": "danner manufacturing inc."
    },
    {
        "Name": "DBPOWER"
    },
    {
        "Name": "delorghi"
    },
    {
        "Name": "DENON"
    },
    {
        "Name": "DEUTER"
    },
    {
        "Name": "DISNEY FROZEN"
    },
    {
        "Name": "dog & bone"
    },
    {
        "Name": "drolet"
    },
    {
        "Name": "dryer vent"
    },
    {
        "Name": "eastfun"
    },
    {
        "Name": "easypix"
    },
    {
        "Name": "Eb5"
    },
    {
        "Name": "ec technology0"
    },
    {
        "Name": "ED Ellen Degeneres"
    },
    {
        "Name": "EDDIE BAUER"
    },
    {
        "Name": "edsal"
    },
    {
        "Name": "eero"
    },
    {
        "Name": "ESTROVEN"
    },
    {
        "Name": "EUREKA"
    },
    {
        "Name": "excedrin sinus headache"
    },
    {
        "Name": "FAVORITE FINDINGS"
    },
    {
        "Name": "fettle excellence"
    },
    {
        "Name": "fifty/fifty"
    },
    {
        "Name": "finnlo"
    },
    {
        "Name": "fire chief"
    },
    {
        "Name": "FireBuggz"
    },
    {
        "Name": "firstcom"
    },
    {
        "Name": "fissler gmbh"
    },
    {
        "Name": "flame genie"
    },
    {
        "Name": "flexseal"
    },
    {
        "Name": "flextape"
    },
    {
        "Name": "Fosa"
    },
    {
        "Name": "fremantle home entertainment"
    },
    {
        "Name": "frozen (disney)"
    },
    {
        "Name": "gardus"
    },
    {
        "Name": "GATCO"
    },
    {
        "Name": "Gel-a-Peel"
    },
    {
        "Name": "georgie interactive puppy"
    },
    {
        "Name": "gibby & libby"
    },
    {
        "Name": "gigen"
    },
    {
        "Name": "GK Hair"
    },
    {
        "Name": "GN Netcom"
    },
    {
        "Name": "go extreme"
    },
    {
        "Name": "goextreme"
    },
    {
        "Name": "gogirl"
    },
    {
        "Name": "google chromecast"
    },
    {
        "Name": "greenland home"
    },
    {
        "Name": "GUESS"
    },
    {
        "Name": "guttersweep"
    },
    {
        "Name": "HaPe"
    },
    {
        "Name": "hape international"
    },
    {
        "Name": "harry’s razors"
    },
    {
        "Name": "hauptstadtkoffer"
    },
    {
        "Name": "HAVASU NUTRITION"
    },
    {
        "Name": "havex machines"
    },
    {
        "Name": "Hcf"
    },
    {
        "Name": "Healthforce"
    },
    {
        "Name": "HealthForce Superfoods"
    },
    {
        "Name": "height xl"
    },
    {
        "Name": "heightxl"
    },
    {
        "Name": "HELLE"
    },
    {
        "Name": "herbal brands"
    },
    {
        "Name": "herschel supply"
    },
    {
        "Name": "HESS"
    },
    {
        "Name": "HSI Professional"
    },
    {
        "Name": "huretek"
    },
    {
        "Name": "ideal industries"
    },
    {
        "Name": " inc"
    },
    {
        "Name": "iKea"
    },
    {
        "Name": "inkrite"
    },
    {
        "Name": "inkwrite"
    },
    {
        "Name": "iNOVA"
    },
    {
        "Name": "inseesi"
    },
    {
        "Name": "IOn"
    },
    {
        "Name": "IOn Audio"
    },
    {
        "Name": "ip shark"
    },
    {
        "Name": "Iphone"
    },
    {
        "Name": "irobot roomba"
    },
    {
        "Name": "iSonic"
    },
    {
        "Name": "italkonline"
    },
    {
        "Name": "ito professional"
    },
    {
        "Name": "it’s a 10"
    },
    {
        "Name": "jabra/gn netcom"
    },
    {
        "Name": "jayjun jj"
    },
    {
        "Name": "JIL SANDER"
    },
    {
        "Name": "jordan – shoes"
    },
    {
        "Name": "josh bach"
    },
    {
        "Name": "kaarvie"
    },
    {
        "Name": "kaavie"
    },
    {
        "Name": "kate spade watches"
    },
    {
        "Name": "keter ltd"
    },
    {
        "Name": "kidsbo"
    },
    {
        "Name": "kiehl’s"
    },
    {
        "Name": "kootion"
    },
    {
        "Name": "kwick sew"
    },
    {
        "Name": "KYLIE COSMETICS"
    },
    {
        "Name": "kyo art kits"
    },
    {
        "Name": "L.O.L. dolls"
    },
    {
        "Name": "la roche posay"
    },
    {
        "Name": "lamode"
    },
    {
        "Name": "LAX"
    },
    {
        "Name": "leatherman tool"
    },
    {
        "Name": "ledger nano s"
    },
    {
        "Name": "leicke"
    },
    {
        "Name": "leicke gmbh"
    },
    {
        "Name": "leicke sharon"
    },
    {
        "Name": "levi’s"
    },
    {
        "Name": "liberty"
    },
    {
        "Name": "LIFEPROOF"
    },
    {
        "Name": "linteater"
    },
    {
        "Name": "linxor"
    },
    {
        "Name": "listerine"
    },
    {
        "Name": "little green men"
    },
    {
        "Name": "LITTLE TIKES"
    },
    {
        "Name": "livivo"
    },
    {
        "Name": "LOFTUS"
    },
    {
        "Name": "LOFTUS INTERNATIONAL"
    },
    {
        "Name": "LoL Surprise"
    },
    {
        "Name": "LORAC"
    },
    {
        "Name": "lost empire herbs"
    },
    {
        "Name": "lotus"
    },
    {
        "Name": "luga"
    },
    {
        "Name": "luxul"
    },
    {
        "Name": "l’occitane"
    },
    {
        "Name": "l’oreal"
    },
    {
        "Name": "m-digita"
    },
    {
        "Name": "MAC COSMETICS"
    },
    {
        "Name": "macoon"
    },
    {
        "Name": "madax"
    },
    {
        "Name": "magic heat"
    },
    {
        "Name": "Magic Tracks"
    },
    {
        "Name": "MANOR HILL"
    },
    {
        "Name": "MARANTZ"
    },
    {
        "Name": "Marc by Marc Jacobs"
    },
    {
        "Name": "MARIO BADESCU"
    },
    {
        "Name": "mario cosmetics"
    },
    {
        "Name": "marvel"
    },
    {
        "Name": "Maryruth Organics"
    },
    {
        "Name": "matrix biolage"
    },
    {
        "Name": "MEGA"
    },
    {
        "Name": "MegaGear"
    },
    {
        "Name": "menaji cosmetics"
    },
    {
        "Name": "mensch on a bensch"
    },
    {
        "Name": "Michael kors"
    },
    {
        "Name": "mirity"
    },
    {
        "Name": "MIROPURE"
    },
    {
        "Name": "MOLTON BROWN"
    },
    {
        "Name": "monsieur bebe"
    },
    {
        "Name": "monster headphones"
    },
    {
        "Name": "mrs. anderson’s"
    },
    {
        "Name": "MSI"
    },
    {
        "Name": "msrmus"
    },
    {
        "Name": "my brittany's"
    },
    {
        "Name": "nature’s sunshine"
    },
    {
        "Name": "ñáútícá"
    },
    {
        "Name": "Neato robotics"
    },
    {
        "Name": "Nestlé"
    },
    {
        "Name": "newhm"
    },
    {
        "Name": "Nifty"
    },
    {
        "Name": "nikon cameras"
    },
    {
        "Name": "ninja blenders"
    },
    {
        "Name": "no more excess"
    },
    {
        "Name": "norax"
    },
    {
        "Name": "NUM NOMS"
    },
    {
        "Name": "NUMARK"
    },
    {
        "Name": "nutranext"
    },
    {
        "Name": "nutranuva"
    },
    {
        "Name": "ocean pacfic"
    },
    {
        "Name": "ocean saline"
    },
    {
        "Name": "OFFRAY"
    },
    {
        "Name": "okra"
    },
    {
        "Name": "ONKYO"
    },
    {
        "Name": "opinet"
    },
    {
        "Name": "OraQuick"
    },
    {
        "Name": "Oria"
    },
    {
        "Name": "OXA"
    },
    {
        "Name": "pabobo"
    },
    {
        "Name": "PAPER MAGIC"
    },
    {
        "Name": "parker pens"
    },
    {
        "Name": "patina premium"
    },
    {
        "Name": "pharmapure"
    },
    {
        "Name": "philips consumer electronics"
    },
    {
        "Name": "philipsc"
    },
    {
        "Name": "phillip mercier"
    },
    {
        "Name": "PHILLIPS"
    },
    {
        "Name": "PIRELLI"
    },
    {
        "Name": "PJ MASK"
    },
    {
        "Name": "pjxj"
    },
    {
        "Name": "playmobil®"
    },
    {
        "Name": "pleasant hearth"
    },
    {
        "Name": "poppy &amp; fritz"
    },
    {
        "Name": "pore"
    },
    {
        "Name": "PRESONUS"
    },
    {
        "Name": "PRINCETON TEC"
    },
    {
        "Name": "PROCTOR-SILEX"
    },
    {
        "Name": "project mc"
    },
    {
        "Name": "PURE"
    },
    {
        "Name": "PURE ENCAPSULATIONS"
    },
    {
        "Name": "quincy bioscience"
    },
    {
        "Name": "RAINBOW LIGHT"
    },
    {
        "Name": "ralph lauren perfume"
    },
    {
        "Name": "red castle"
    },
    {
        "Name": "reliable uberlight"
    },
    {
        "Name": "RIPPLE JUNCTION"
    },
    {
        "Name": "rodan + fields skincare"
    },
    {
        "Name": "royal canin"
    },
    {
        "Name": "rubbermade"
    },
    {
        "Name": "rubie’s"
    },
    {
        "Name": "Salcoll Collagen"
    },
    {
        "Name": "sandisk enterprise"
    },
    {
        "Name": "saponificio"
    },
    {
        "Name": "SAVFY"
    },
    {
        "Name": "savfyâ®"
    },
    {
        "Name": "SCANPAN"
    },
    {
        "Name": "SCENTIO"
    },
    {
        "Name": "seachem"
    },
    {
        "Name": "shany cosmetics"
    },
    {
        "Name": "shelter"
    },
    {
        "Name": "shelterpro"
    },
    {
        "Name": "SHISEIDO"
    },
    {
        "Name": "silvertrade"
    },
    {
        "Name": "siphotrol"
    },
    {
        "Name": "sketchers"
    },
    {
        "Name": "SLENDERTONE"
    },
    {
        "Name": "smith &amp; wesson"
    },
    {
        "Name": "snake brand"
    },
    {
        "Name": "SODASTREAM"
    },
    {
        "Name": "SODIAL"
    },
    {
        "Name": "sooteater"
    },
    {
        "Name": "spark cafe cups"
    },
    {
        "Name": "squeezoos"
    },
    {
        "Name": "STEELSERIES"
    },
    {
        "Name": "SteriPEN"
    },
    {
        "Name": "Stillcool"
    },
    {
        "Name": "stone cottage"
    },
    {
        "Name": "store bound llc"
    },
    {
        "Name": "stuff4"
    },
    {
        "Name": "sunwise"
    },
    {
        "Name": "SUPERIOR PUMP"
    },
    {
        "Name": "swift response"
    },
    {
        "Name": " llc"
    },
    {
        "Name": "syntratech"
    },
    {
        "Name": "TASCAM"
    },
    {
        "Name": "tech.bean"
    },
    {
        "Name": "test"
    },
    {
        "Name": "test12345"
    },
    {
        "Name": "the brain"
    },
    {
        "Name": "theraflu caplets"
    },
    {
        "Name": "ThermoPro"
    },
    {
        "Name": "thirsty milo"
    },
    {
        "Name": "time2"
    },
    {
        "Name": "tojane"
    },
    {
        "Name": "tommy Bahama"
    },
    {
        "Name": "Torras"
    },
    {
        "Name": "Toys of Wood Oxford"
    },
    {
        "Name": "Tp-Link"
    },
    {
        "Name": "trend setters fitness"
    },
    {
        "Name": "trend setters fitness llc"
    },
    {
        "Name": "TrendyKid"
    },
    {
        "Name": "trina turk"
    },
    {
        "Name": "TROPICLEAN"
    },
    {
        "Name": "Truskin Naturals"
    },
    {
        "Name": "tummy tucker"
    },
    {
        "Name": "TumTum"
    },
    {
        "Name": "twin lab"
    },
    {
        "Name": "TWINLAB"
    },
    {
        "Name": "UGREEN"
    },
    {
        "Name": "uppababy"
    },
    {
        "Name": "URPOWER"
    },
    {
        "Name": "UST"
    },
    {
        "Name": "VCube"
    },
    {
        "Name": "VERA WANG"
    },
    {
        "Name": "vero"
    },
    {
        "Name": "Vinsic"
    },
    {
        "Name": "visit the funko store"
    },
    {
        "Name": "visnic"
    },
    {
        "Name": "vitamix"
    },
    {
        "Name": "vtt"
    },
    {
        "Name": "wayne pumps"
    },
    {
        "Name": "wetnozehealth"
    },
    {
        "Name": "whitby"
    },
    {
        "Name": "wisdomspot"
    },
    {
        "Name": "WOLF Garten"
    },
    {
        "Name": "woll"
    },
    {
        "Name": "wonder wallet"
    },
    {
        "Name": "Wüsthof"
    },
    {
        "Name": "wusthov"
    },
    {
        "Name": "Xtava"
    },
    {
        "Name": "ycc team"
    },
    {
        "Name": "ycdc"
    },
    {
        "Name": "YIMAN"
    },
    {
        "Name": "yookidoo"
    },
    {
        "Name": "YOUNGEVITY"
    },
    {
        "Name": "zazu"
    },
    {
        "Name": "zennatural"
    },
    {
        "Name": "ziploc"
    },
    {
        "Name": "zojirushi"
    },
    {
        "Name": "ZOOM"
    },
    {
        "Name": "zoom entertainments"
    },
    {
        "Name": "b014kohyrs"
    },
    {
        "Name": "california gold nutrition"
    },
    {
        "Name": "ticket to ride"
    },
    {
        "Name": "waterpik"
    },
    {
        "Name": "4m"
    },
    {
        "Name": "8.88e+11"
    },
    {
        "Name": "aden"
    },
    {
        "Name": "adora"
    },
    {
        "Name": "affresh"
    },
    {
        "Name": "ag hair"
    },
    {
        "Name": "agadir"
    },
    {
        "Name": "Agfaphoto"
    },
    {
        "Name": "Air"
    },
    {
        "Name": "Akai"
    },
    {
        "Name": "akdy"
    },
    {
        "Name": "allen"
    },
    {
        "Name": "Altec Lansing"
    },
    {
        "Name": "alter eco"
    },
    {
        "Name": "alvanator"
    },
    {
        "Name": "amazerbath"
    },
    {
        "Name": "amazing grass"
    },
    {
        "Name": "american educational products"
    },
    {
        "Name": "american tourister"
    },
    {
        "Name": "american weigh"
    },
    {
        "Name": "amika"
    },
    {
        "Name": "Anastasia"
    },
    {
        "Name": "Andoer"
    },
    {
        "Name": "animal adventure"
    },
    {
        "Name": "apollo tools"
    },
    {
        "Name": "aqueon"
    },
    {
        "Name": "archipelago botanicals"
    },
    {
        "Name": "ardell"
    },
    {
        "Name": "arm &amp; hammer"
    },
    {
        "Name": "arrowhead mills"
    },
    {
        "Name": "artscape"
    },
    {
        "Name": "asmodee"
    },
    {
        "Name": "ASOTV"
    },
    {
        "Name": "astroglide"
    },
    {
        "Name": "atkins"
    },
    {
        "Name": "atomic beam"
    },
    {
        "Name": "avengers"
    },
    {
        "Name": "babo botanicals"
    },
    {
        "Name": "baby banana"
    },
    {
        "Name": "Baby Born"
    },
    {
        "Name": "baby brezza"
    },
    {
        "Name": "babyganics"
    },
    {
        "Name": "babymoov"
    },
    {
        "Name": "back to the roots"
    },
    {
        "Name": "bad air sponge"
    },
    {
        "Name": "Baggallini"
    },
    {
        "Name": "bahlsen"
    },
    {
        "Name": "bakugan"
    },
    {
        "Name": "balla for men"
    },
    {
        "Name": "bamboobies"
    },
    {
        "Name": "Bamix"
    },
    {
        "Name": "ban"
    },
    {
        "Name": "banana boat"
    },
    {
        "Name": "bananagrams"
    },
    {
        "Name": "banpresto"
    },
    {
        "Name": "barbara's"
    },
    {
        "Name": "bare"
    },
    {
        "Name": "barkworthies"
    },
    {
        "Name": "basic fun"
    },
    {
        "Name": "bath & body works"
    },
    {
        "Name": "BATMAN"
    },
    {
        "Name": "battat"
    },
    {
        "Name": "baxter of california"
    },
    {
        "Name": "bc wear"
    },
    {
        "Name": "beach camera"
    },
    {
        "Name": "Beachbody"
    },
    {
        "Name": "beautyblender"
    },
    {
        "Name": "bebe au lait"
    },
    {
        "Name": "becca"
    },
    {
        "Name": "beco baby carrier"
    },
    {
        "Name": "beer nuts"
    },
    {
        "Name": "bell + howell"
    },
    {
        "Name": "belli"
    },
    {
        "Name": "ben 10"
    },
    {
        "Name": "bentgo"
    },
    {
        "Name": "bepuzzled"
    },
    {
        "Name": "Berwick"
    },
    {
        "Name": "Best Home"
    },
    {
        "Name": "bethesda"
    },
    {
        "Name": "better batter"
    },
    {
        "Name": "beyblade"
    },
    {
        "Name": "bh cosmetics"
    },
    {
        "Name": "big hero 6"
    },
    {
        "Name": "big train"
    },
    {
        "Name": "big vision"
    },
    {
        "Name": "bigmouth inc"
    },
    {
        "Name": "Biolite"
    },
    {
        "Name": "bioschwartz"
    },
    {
        "Name": "birthdayexpress"
    },
    {
        "Name": "blender bottle"
    },
    {
        "Name": "blowpro"
    },
    {
        "Name": "Blue Microphones"
    },
    {
        "Name": "bobsweep"
    },
    {
        "Name": "Boley"
    },
    {
        "Name": "booyah"
    },
    {
        "Name": "bosley professional strength"
    },
    {
        "Name": "Boston Acoustics"
    },
    {
        "Name": "Bracoo"
    },
    {
        "Name": "Bratz"
    },
    {
        "Name": "breathablebaby"
    },
    {
        "Name": "BRINDLE"
    },
    {
        "Name": "bruder toys"
    },
    {
        "Name": "brylanehome"
    },
    {
        "Name": "bsn"
    },
    {
        "Name": "bubba"
    },
    {
        "Name": "Buck"
    },
    {
        "Name": "buffalo games"
    },
    {
        "Name": "bumble bee"
    },
    {
        "Name": "bumbleberry girls"
    },
    {
        "Name": "Bumkins"
    },
    {
        "Name": "bunch o balloons"
    },
    {
        "Name": "Butterick"
    },
    {
        "Name": "buzz bee"
    },
    {
        "Name": "cadet"
    },
    {
        "Name": "café escapes"
    },
    {
        "Name": "calico critters"
    },
    {
        "Name": "califia farms"
    },
    {
        "Name": "california air tools"
    },
    {
        "Name": "california baby"
    },
    {
        "Name": "candle warmers etc."
    },
    {
        "Name": "cangshan"
    },
    {
        "Name": "canidae"
    },
    {
        "Name": "Capital Brands"
    },
    {
        "Name": "capri tools"
    },
    {
        "Name": "cares"
    },
    {
        "Name": "caribou coffee"
    },
    {
        "Name": "casabella"
    },
    {
        "Name": "casper"
    },
    {
        "Name": "catan studios"
    },
    {
        "Name": "catego"
    },
    {
        "Name": "catit"
    },
    {
        "Name": "ceaco"
    },
    {
        "Name": "celestial seasonings"
    },
    {
        "Name": "cellex-c"
    },
    {
        "Name": "cellucor"
    },
    {
        "Name": "cerave"
    },
    {
        "Name": "chantal"
    },
    {
        "Name": "charge it by danny"
    },
    {
        "Name": "charming"
    },
    {
        "Name": "chef boyardee"
    },
    {
        "Name": "chef craft"
    },
    {
        "Name": "chef'n"
    },
    {
        "Name": "choomee"
    },
    {
        "Name": "chubby puppies"
    },
    {
        "Name": "cinnamon force. 60 liquidvcaps"
    },
    {
        "Name": "cissé cocoa co"
    },
    {
        "Name": "citracal"
    },
    {
        "Name": "clarisonic"
    },
    {
        "Name": "click n curl"
    },
    {
        "Name": "Closetmaid"
    },
    {
        "Name": "cmon"
    },
    {
        "Name": "cnd"
    },
    {
        "Name": "coast"
    },
    {
        "Name": "Cole & Mason"
    },
    {
        "Name": "colorescience"
    },
    {
        "Name": "colorproof"
    },
    {
        "Name": "colorproof evolved color care"
    },
    {
        "Name": "Comic Images"
    },
    {
        "Name": "conair"
    },
    {
        "Name": "Contours"
    },
    {
        "Name": "copper fit"
    },
    {
        "Name": "copper pearl"
    },
    {
        "Name": "corsx"
    },
    {
        "Name": "COSCO"
    },
    {
        "Name": "cosrx"
    },
    {
        "Name": "covergirl"
    },
    {
        "Name": "cozy cover"
    },
    {
        "Name": "cra-z-gell"
    },
    {
        "Name": "cra-z-slimy"
    },
    {
        "Name": "Crosley"
    },
    {
        "Name": "Crucial"
    },
    {
        "Name": "cry babies"
    },
    {
        "Name": "cypress home"
    },
    {
        "Name": "czech games"
    },
    {
        "Name": "damprid"
    },
    {
        "Name": "dandies"
    },
    {
        "Name": "daniel tiger's neighborhood"
    },
    {
        "Name": "daphyls"
    },
    {
        "Name": "dark horse deluxe"
    },
    {
        "Name": "Davidoff"
    },
    {
        "Name": "davinci"
    },
    {
        "Name": "days of wonder"
    },
    {
        "Name": "decobros"
    },
    {
        "Name": "Deejo"
    },
    {
        "Name": "definitive technology"
    },
    {
        "Name": "dekor"
    },
    {
        "Name": "delallo"
    },
    {
        "Name": "dermadoctor"
    },
    {
        "Name": "design letters"
    },
    {
        "Name": "designs for health"
    },
    {
        "Name": "destiny boutique"
    },
    {
        "Name": "dex"
    },
    {
        "Name": "dhp"
    },
    {
        "Name": "diaderm"
    },
    {
        "Name": "dial"
    },
    {
        "Name": "dinty moore"
    },
    {
        "Name": "disney beauty & the beast"
    },
    {
        "Name": "disney doorables"
    },
    {
        "Name": "dockatot"
    },
    {
        "Name": "doctor who"
    },
    {
        "Name": "dr teal's"
    },
    {
        "Name": "dr. brown's"
    },
    {
        "Name": "dr. fresh"
    },
    {
        "Name": "dr. mercola"
    },
    {
        "Name": "dragon models usa"
    },
    {
        "Name": "dream water"
    },
    {
        "Name": "dreambaby"
    },
    {
        "Name": "drive medical"
    },
    {
        "Name": "drtim's aquatics"
    },
    {
        "Name": "drunk stoned or stupid"
    },
    {
        "Name": "ds labs"
    },
    {
        "Name": "duncan hines"
    },
    {
        "Name": "duplo"
    },
    {
        "Name": "duracell"
    },
    {
        "Name": "Duro-Med"
    },
    {
        "Name": "e.l.f."
    },
    {
        "Name": "eagles nest outfitters"
    },
    {
        "Name": "earth mama"
    },
    {
        "Name": "easton"
    },
    {
        "Name": "eau thermale avène"
    },
    {
        "Name": "ecover"
    },
    {
        "Name": "ecovessel"
    },
    {
        "Name": "elchim"
    },
    {
        "Name": "elegant baby"
    },
    {
        "Name": "elemis"
    },
    {
        "Name": "elenco"
    },
    {
        "Name": "eltamd"
    },
    {
        "Name": "Emile Henry"
    },
    {
        "Name": "enchantimals"
    },
    {
        "Name": "endless games"
    },
    {
        "Name": "enoz"
    },
    {
        "Name": "epicuren discovery"
    },
    {
        "Name": "erewhon"
    },
    {
        "Name": "etch a sketch"
    },
    {
        "Name": "evenflo feeding"
    },
    {
        "Name": "evergreen flag"
    },
    {
        "Name": "everlast"
    },
    {
        "Name": "everyday coconut"
    },
    {
        "Name": "evlution"
    },
    {
        "Name": "evutec"
    },
    {
        "Name": "exploding kittens llc"
    },
    {
        "Name": "expo"
    },
    {
        "Name": "fancy nancy"
    },
    {
        "Name": "Farberware"
    },
    {
        "Name": "farm fresh nuts"
    },
    {
        "Name": "fekkai"
    },
    {
        "Name": "fiber one"
    },
    {
        "Name": "finishing touch"
    },
    {
        "Name": "first aid beauty"
    },
    {
        "Name": "five nights at freddy's"
    },
    {
        "Name": "five nights at freddys"
    },
    {
        "Name": "Fizz Creations Ltd"
    },
    {
        "Name": "flapjacked"
    },
    {
        "Name": "flexi"
    },
    {
        "Name": "flip"
    },
    {
        "Name": "fluke"
    },
    {
        "Name": "folkmanis"
    },
    {
        "Name": "food to live"
    },
    {
        "Name": "foreo"
    },
    {
        "Name": "four paws"
    },
    {
        "Name": "Franklin Electronics"
    },
    {
        "Name": "frau fowler"
    },
    {
        "Name": "fred"
    },
    {
        "Name": "fridababy"
    },
    {
        "Name": "fruit of the loom"
    },
    {
        "Name": "fun eating devices"
    },
    {
        "Name": "fun world"
    },
    {
        "Name": "fun2give"
    },
    {
        "Name": "fur real friends"
    },
    {
        "Name": "furby"
    },
    {
        "Name": "futurebiotics"
    },
    {
        "Name": "fuzion"
    },
    {
        "Name": "gaia herbs"
    },
    {
        "Name": "gaiam"
    },
    {
        "Name": "galison"
    },
    {
        "Name": "gamewright"
    },
    {
        "Name": "garden of life"
    },
    {
        "Name": "GARUNK"
    },
    {
        "Name": "gazillion"
    },
    {
        "Name": "geek & co. science!"
    },
    {
        "Name": "general tools"
    },
    {
        "Name": "Gerber Baby Food"
    },
    {
        "Name": "gerber childrenswear"
    },
    {
        "Name": "gibson home"
    },
    {
        "Name": "Gigamic"
    },
    {
        "Name": "gillette venus"
    },
    {
        "Name": "Giovanni"
    },
    {
        "Name": "giovanni cosmetics"
    },
    {
        "Name": "Giraffe Bath & Body"
    },
    {
        "Name": "gliss"
    },
    {
        "Name": "glo skin beauty"
    },
    {
        "Name": "globber"
    },
    {
        "Name": "GoldieBlox"
    },
    {
        "Name": "good & plenty"
    },
    {
        "Name": "goody"
    },
    {
        "Name": "gopro"
    },
    {
        "Name": "gotham steel"
    },
    {
        "Name": "goya"
    },
    {
        "Name": "grace & stella"
    },
    {
        "Name": "greater goods"
    },
    {
        "Name": "green mountain coffee roasters"
    },
    {
        "Name": "green toys"
    },
    {
        "Name": "greenies"
    },
    {
        "Name": "Griffin"
    },
    {
        "Name": "Grill Daddy"
    },
    {
        "Name": "gringo bandito"
    },
    {
        "Name": "Guess How Much I Love You"
    },
    {
        "Name": "gurunanda"
    },
    {
        "Name": "guy laroche"
    },
    {
        "Name": "haba"
    },
    {
        "Name": "hairdorables"
    },
    {
        "Name": "hamilton"
    },
    {
        "Name": "Hammer"
    },
    {
        "Name": "hammermill"
    },
    {
        "Name": "handy laundry"
    },
    {
        "Name": "haribo"
    },
    {
        "Name": "harney & sons"
    },
    {
        "Name": "hashtag collectibles"
    },
    {
        "Name": "heath"
    },
    {
        "Name": "hefty"
    },
    {
        "Name": "Helen of Troy"
    },
    {
        "Name": "Hempz"
    },
    {
        "Name": "henckels"
    },
    {
        "Name": "heos"
    },
    {
        "Name": "hershey’s syrup"
    },
    {
        "Name": "hey honey"
    },
    {
        "Name": "hodgson mill"
    },
    {
        "Name": "hoffman richter"
    },
    {
        "Name": "holmes"
    },
    {
        "Name": "honest kids"
    },
    {
        "Name": "hoosier hill farm"
    },
    {
        "Name": "hot shot"
    },
    {
        "Name": "hotel transylvania"
    },
    {
        "Name": "Huion"
    },
    {
        "Name": "hunt's"
    },
    {
        "Name": "hunter's specialties"
    },
    {
        "Name": "hydro mousse"
    },
    {
        "Name": "hyperkin"
    },
    {
        "Name": "i-blason"
    },
    {
        "Name": "ice breakers"
    },
    {
        "Name": "idw games"
    },
    {
        "Name": "iello"
    },
    {
        "Name": "iluminage"
    },
    {
        "Name": "image skincare"
    },
    {
        "Name": "imperial toy"
    },
    {
        "Name": "indie boards & cards"
    },
    {
        "Name": "inglesina"
    },
    {
        "Name": "intelex"
    },
    {
        "Name": "iprimio"
    },
    {
        "Name": "is clinical"
    },
    {
        "Name": "itzy ritzy"
    },
    {
        "Name": "jack links"
    },
    {
        "Name": "jada"
    },
    {
        "Name": "jax"
    },
    {
        "Name": "jc toys"
    },
    {
        "Name": "jellycat"
    },
    {
        "Name": "Jennifer Lopez"
    },
    {
        "Name": "jensen"
    },
    {
        "Name": "jespet"
    },
    {
        "Name": "jinx"
    },
    {
        "Name": "john allan's"
    },
    {
        "Name": "john varvatos"
    },
    {
        "Name": "jones new york"
    },
    {
        "Name": "jool baby products"
    },
    {
        "Name": "joovy"
    },
    {
        "Name": "jt international"
    },
    {
        "Name": "jurassic world toys"
    },
    {
        "Name": "just play"
    },
    {
        "Name": "k'nex"
    },
    {
        "Name": "kahootz"
    },
    {
        "Name": "kano"
    },
    {
        "Name": "karen's naturals"
    },
    {
        "Name": "kashi"
    },
    {
        "Name": "kate somerville"
    },
    {
        "Name": "Kaytee"
    },
    {
        "Name": "kellogg's"
    },
    {
        "Name": "kerastase"
    },
    {
        "Name": "kershaw"
    },
    {
        "Name": "kid basix"
    },
    {
        "Name": "kiddieland toys limited"
    },
    {
        "Name": "kiehl's"
    },
    {
        "Name": "kiinde"
    },
    {
        "Name": "kikkoman"
    },
    {
        "Name": "kimberly-clark professional"
    },
    {
        "Name": "kindred hearts dolls"
    },
    {
        "Name": "Kinetic Sand"
    },
    {
        "Name": "kingsford"
    },
    {
        "Name": "Kitsound"
    },
    {
        "Name": "kizmos"
    },
    {
        "Name": "klaire labs"
    },
    {
        "Name": "Klean Kanteen"
    },
    {
        "Name": "klutz"
    },
    {
        "Name": "knorr"
    },
    {
        "Name": "kodiak cakes"
    },
    {
        "Name": "Koolatron"
    },
    {
        "Name": "kraus"
    },
    {
        "Name": "kuhn rikon"
    },
    {
        "Name": "l'anza"
    },
    {
        "Name": "l'occitane"
    },
    {
        "Name": "l'oreal paris"
    },
    {
        "Name": "l."
    },
    {
        "Name": "l.o.l."
    },
    {
        "Name": "la lechera"
    },
    {
        "Name": "la roche-posay"
    },
    {
        "Name": "Lalaloopsy"
    },
    {
        "Name": "lancome paris"
    },
    {
        "Name": "lanruo"
    },
    {
        "Name": "lärabar"
    },
    {
        "Name": "laser pegs"
    },
    {
        "Name": "laura geller new york"
    },
    {
        "Name": "lay's"
    },
    {
        "Name": "learning resources"
    },
    {
        "Name": "legendary games"
    },
    {
        "Name": "lego duplo princess"
    },
    {
        "Name": "lem"
    },
    {
        "Name": "lenox"
    },
    {
        "Name": "leviton"
    },
    {
        "Name": "li'l woodzeez"
    },
    {
        "Name": "libbey"
    },
    {
        "Name": "life extension"
    },
    {
        "Name": "líllébaby"
    },
    {
        "Name": "lime crime"
    },
    {
        "Name": "lincoln logs"
    },
    {
        "Name": "Linksys"
    },
    {
        "Name": "lionel"
    },
    {
        "Name": "litehouse"
    },
    {
        "Name": "little buddy"
    },
    {
        "Name": "little cosmetics"
    },
    {
        "Name": "little giraffe"
    },
    {
        "Name": "little live"
    },
    {
        "Name": "little one's pad"
    },
    {
        "Name": "littlebits"
    },
    {
        "Name": "Lodge"
    },
    {
        "Name": "Lokai"
    },
    {
        "Name": "lonolife"
    },
    {
        "Name": "lori"
    },
    {
        "Name": "lotos"
    },
    {
        "Name": "Louis Vuitton"
    },
    {
        "Name": "loungefly"
    },
    {
        "Name": "loving pets"
    },
    {
        "Name": "luigi bormioli"
    },
    {
        "Name": "luminara"
    },
    {
        "Name": "lunchskins"
    },
    {
        "Name": "Lush"
    },
    {
        "Name": "luvable friends"
    },
    {
        "Name": "luxottica"
    },
    {
        "Name": "luzianne"
    },
    {
        "Name": "macadamia professional"
    },
    {
        "Name": "mach3"
    },
    {
        "Name": "maclaren"
    },
    {
        "Name": "Magic Bullet"
    },
    {
        "Name": "magic mesh"
    },
    {
        "Name": "magic: the gathering"
    },
    {
        "Name": "magna-qubix"
    },
    {
        "Name": "makey makey"
    },
    {
        "Name": "Malin + Goetz"
    },
    {
        "Name": "manuka health"
    },
    {
        "Name": "Marc Anthony"
    },
    {
        "Name": "Marubhumi"
    },
    {
        "Name": "mary meyer"
    },
    {
        "Name": "mason cash"
    },
    {
        "Name": "masterbuilt"
    },
    {
        "Name": "mastrad"
    },
    {
        "Name": "matrix"
    },
    {
        "Name": "mattel games"
    },
    {
        "Name": "mauna loa"
    },
    {
        "Name": "Maybelline"
    },
    {
        "Name": "maybelline new york"
    },
    {
        "Name": "maze o"
    },
    {
        "Name": "mcs"
    },
    {
        "Name": "mecard"
    },
    {
        "Name": "meccano"
    },
    {
        "Name": "medline health and personal care"
    },
    {
        "Name": "megared"
    },
    {
        "Name": "MemorySoft"
    },
    {
        "Name": "mercola"
    },
    {
        "Name": "Merrell"
    },
    {
        "Name": "merrick"
    },
    {
        "Name": "method health and personal care"
    },
    {
        "Name": "Michele"
    },
    {
        "Name": "micro touch"
    },
    {
        "Name": "microban"
    },
    {
        "Name": "Miele"
    },
    {
        "Name": "mighty leaf"
    },
    {
        "Name": "milani"
    },
    {
        "Name": "milestone"
    },
    {
        "Name": "milk-bone"
    },
    {
        "Name": "mindscope"
    },
    {
        "Name": "minnie"
    },
    {
        "Name": "miraculous"
    },
    {
        "Name": "modarri"
    },
    {
        "Name": "moj moj"
    },
    {
        "Name": "molly's suds"
    },
    {
        "Name": "monopoly"
    },
    {
        "Name": "MonoPrice"
    },
    {
        "Name": "monster jam"
    },
    {
        "Name": "montblanc"
    },
    {
        "Name": "Morning Pep"
    },
    {
        "Name": "moroccanoil"
    },
    {
        "Name": "mota"
    },
    {
        "Name": "motherlove"
    },
    {
        "Name": "motorola"
    },
    {
        "Name": "Moulin Roty"
    },
    {
        "Name": "move free"
    },
    {
        "Name": "mr potato head"
    },
    {
        "Name": "mrm"
    },
    {
        "Name": "ms lovely"
    },
    {
        "Name": "mud pie"
    },
    {
        "Name": "muir glen"
    },
    {
        "Name": "murad"
    },
    {
        "Name": "muscle milk"
    },
    {
        "Name": "Muscle Pharm"
    },
    {
        "Name": "Mustela"
    },
    {
        "Name": "my konjac sponge"
    },
    {
        "Name": "my little pony"
    },
    {
        "Name": "mybaby"
    },
    {
        "Name": "MyLifeUNIT"
    },
    {
        "Name": "Nabisco"
    },
    {
        "Name": "Nanda Home"
    },
    {
        "Name": "Nars"
    },
    {
        "Name": "Native Union"
    },
    {
        "Name": "natural factors"
    },
    {
        "Name": "nature bound"
    },
    {
        "Name": "nature's gate"
    },
    {
        "Name": "nature's way"
    },
    {
        "Name": "naturewise"
    },
    {
        "Name": "navitas organics"
    },
    {
        "Name": "neat company"
    },
    {
        "Name": "neenah"
    },
    {
        "Name": "Neewer"
    },
    {
        "Name": "nest"
    },
    {
        "Name": "neuma"
    },
    {
        "Name": "new england patriots"
    },
    {
        "Name": "new ray"
    },
    {
        "Name": "new york puzzle company"
    },
    {
        "Name": "newman's own"
    },
    {
        "Name": "nextbase"
    },
    {
        "Name": "Nioxin"
    },
    {
        "Name": "Nite Ize"
    },
    {
        "Name": "nivea"
    },
    {
        "Name": "noma/inliten"
    },
    {
        "Name": "noodle & boo"
    },
    {
        "Name": "nordic naturals"
    },
    {
        "Name": "north states"
    },
    {
        "Name": "nubian heritage"
    },
    {
        "Name": "NuBrilliance"
    },
    {
        "Name": "nûby"
    },
    {
        "Name": "nudges"
    },
    {
        "Name": "nurse jamie healthy skin solutions"
    },
    {
        "Name": "nutiva"
    },
    {
        "Name": "nutri chopper"
    },
    {
        "Name": "nutrichopper"
    },
    {
        "Name": "nutro"
    },
    {
        "Name": "nuvue"
    },
    {
        "Name": "nyx professional makeup"
    },
    {
        "Name": "o2cool"
    },
    {
        "Name": "oanon"
    },
    {
        "Name": "obagi medical"
    },
    {
        "Name": "oball"
    },
    {
        "Name": "ocusoft"
    },
    {
        "Name": "olaplex"
    },
    {
        "Name": "old el paso"
    },
    {
        "Name": "omnifilter"
    },
    {
        "Name": "omnipure"
    },
    {
        "Name": "one"
    },
    {
        "Name": "only natural pet"
    },
    {
        "Name": "oonies"
    },
    {
        "Name": "Opinel"
    },
    {
        "Name": "oral b"
    },
    {
        "Name": "oregon's wild harvest"
    },
    {
        "Name": "orgain"
    },
    {
        "Name": "organic valley"
    },
    {
        "Name": "outset media"
    },
    {
        "Name": "owi"
    },
    {
        "Name": "owl's brew"
    },
    {
        "Name": "Owlet"
    },
    {
        "Name": "ozobot"
    },
    {
        "Name": "pacifica"
    },
    {
        "Name": "pacon"
    },
    {
        "Name": "palmini"
    },
    {
        "Name": "paper mate"
    },
    {
        "Name": "party popteenies"
    },
    {
        "Name": "passport game studios"
    },
    {
        "Name": "Patagonia"
    },
    {
        "Name": "patch"
    },
    {
        "Name": "paula's choice"
    },
    {
        "Name": "Pavilion"
    },
    {
        "Name": "paws & pals"
    },
    {
        "Name": "pca skin"
    },
    {
        "Name": "peaceable kingdom"
    },
    {
        "Name": "Pecute"
    },
    {
        "Name": "peet"
    },
    {
        "Name": "peet's coffee"
    },
    {
        "Name": "peg perego"
    },
    {
        "Name": "pennington"
    },
    {
        "Name": "pentel"
    },
    {
        "Name": "peppa pig"
    },
    {
        "Name": "pet naturals"
    },
    {
        "Name": "pet zone"
    },
    {
        "Name": "petalive"
    },
    {
        "Name": "petarmor"
    },
    {
        "Name": "petcube"
    },
    {
        "Name": "pettura"
    },
    {
        "Name": "pevonia botanica"
    },
    {
        "Name": "pez"
    },
    {
        "Name": "Philips Accessories"
    },
    {
        "Name": "Picci"
    },
    {
        "Name": "pikmi pops"
    },
    {
        "Name": "pillow pets"
    },
    {
        "Name": "pink stork"
    },
    {
        "Name": "pink sugar"
    },
    {
        "Name": "pit barrel cooker co."
    },
    {
        "Name": "pixar"
    },
    {
        "Name": "pj masks"
    },
    {
        "Name": "plaid hat games"
    },
    {
        "Name": "planetary herbals"
    },
    {
        "Name": "planters"
    },
    {
        "Name": "plantronics"
    },
    {
        "Name": "play-doh"
    },
    {
        "Name": "playgo"
    },
    {
        "Name": "playskool"
    },
    {
        "Name": "pmd personal microderm"
    },
    {
        "Name": "pny"
    },
    {
        "Name": "poise"
    },
    {
        "Name": "poland spring"
    },
    {
        "Name": "polk"
    },
    {
        "Name": "polly pocket"
    },
    {
        "Name": "pomegranate"
    },
    {
        "Name": "pomsies"
    },
    {
        "Name": "pond pals"
    },
    {
        "Name": "pond's"
    },
    {
        "Name": "ponds face"
    },
    {
        "Name": "pop out pets"
    },
    {
        "Name": "pop-tarts"
    },
    {
        "Name": "popsockets"
    },
    {
        "Name": "power wheels"
    },
    {
        "Name": "powerbright"
    },
    {
        "Name": "pre-seed"
    },
    {
        "Name": "primal kitchen"
    },
    {
        "Name": "profoot"
    },
    {
        "Name": "progressive"
    },
    {
        "Name": "project mc2"
    },
    {
        "Name": "pura"
    },
    {
        "Name": "purell"
    },
    {
        "Name": "pureology"
    },
    {
        "Name": "qalo"
    },
    {
        "Name": "quercetti"
    },
    {
        "Name": "radio flyer toys & games"
    },
    {
        "Name": "rain-x"
    },
    {
        "Name": "Rainbow Loom"
    },
    {
        "Name": "Rainbow Sandals"
    },
    {
        "Name": "Rasyan"
    },
    {
        "Name": "re-marks"
    },
    {
        "Name": "rear view safety"
    },
    {
        "Name": "redken"
    },
    {
        "Name": "refresh"
    },
    {
        "Name": "Regalo"
    },
    {
        "Name": "remo"
    },
    {
        "Name": "rescue runts"
    },
    {
        "Name": "restaurantware"
    },
    {
        "Name": "revitalash"
    },
    {
        "Name": "revitalash cosmetics"
    },
    {
        "Name": "rio grande games"
    },
    {
        "Name": "rishi tea"
    },
    {
        "Name": "riverridge"
    },
    {
        "Name": "roblox"
    },
    {
        "Name": "rockstar games"
    },
    {
        "Name": "Roger & Gallet"
    },
    {
        "Name": "rolodex"
    },
    {
        "Name": "rugshop"
    },
    {
        "Name": "rusk"
    },
    {
        "Name": "rustichella d abruzzo"
    },
    {
        "Name": "rxbar"
    },
    {
        "Name": "s'well"
    },
    {
        "Name": "s.w. basics"
    },
    {
        "Name": "sabrent"
    },
    {
        "Name": "saddlebaby"
    },
    {
        "Name": "safari ltd."
    },
    {
        "Name": "sage spoonfuls"
    },
    {
        "Name": "Samsonite"
    },
    {
        "Name": "Sandisk"
    },
    {
        "Name": "santa cruz"
    },
    {
        "Name": "saphira"
    },
    {
        "Name": "schick"
    },
    {
        "Name": "schmidt's deodorant"
    },
    {
        "Name": "scientific explorer"
    },
    {
        "Name": "Seastone"
    },
    {
        "Name": "seedling"
    },
    {
        "Name": "sennheiser"
    },
    {
        "Name": "serenelife"
    },
    {
        "Name": "sesame street"
    },
    {
        "Name": "sexy hair"
    },
    {
        "Name": "sexyhair"
    },
    {
        "Name": "shea moisture"
    },
    {
        "Name": "Sheffield"
    },
    {
        "Name": "shine"
    },
    {
        "Name": "simple solution"
    },
    {
        "Name": "simply organic"
    },
    {
        "Name": "simposh"
    },
    {
        "Name": "siskiyou gifts co"
    },
    {
        "Name": "skinmedica"
    },
    {
        "Name": "skyline workshop"
    },
    {
        "Name": "slim jim"
    },
    {
        "Name": "small world toys"
    },
    {
        "Name": "smart sips coffee"
    },
    {
        "Name": "smartgames"
    },
    {
        "Name": "smartmax"
    },
    {
        "Name": "smartnoggin"
    },
    {
        "Name": "smashmallow"
    },
    {
        "Name": "smithsonian"
    },
    {
        "Name": "Smooshins"
    },
    {
        "Name": "smucker's"
    },
    {
        "Name": "snackeez"
    },
    {
        "Name": "snap circuits"
    },
    {
        "Name": "snyder's of hanover"
    },
    {
        "Name": "sofia the first"
    },
    {
        "Name": "sog"
    },
    {
        "Name": "Solar Brite"
    },
    {
        "Name": "Solgar"
    },
    {
        "Name": "sony cameras"
    },
    {
        "Name": "sound united"
    },
    {
        "Name": "soylent"
    },
    {
        "Name": "spectra baby usa"
    },
    {
        "Name": "speedball"
    },
    {
        "Name": "sperian welding protection"
    },
    {
        "Name": "sphero"
    },
    {
        "Name": "spin master games"
    },
    {
        "Name": "spinmaster"
    },
    {
        "Name": "splashlings"
    },
    {
        "Name": "spyderco"
    },
    {
        "Name": "square enix"
    },
    {
        "Name": "squishmallow"
    },
    {
        "Name": "st tropez"
    },
    {
        "Name": "stack lighting"
    },
    {
        "Name": "star kids"
    },
    {
        "Name": "starwest botanicals"
    },
    {
        "Name": "steiff"
    },
    {
        "Name": "stella & chewy's"
    },
    {
        "Name": "Stepping Stones"
    },
    {
        "Name": "Stickerfitti"
    },
    {
        "Name": "stikbot"
    },
    {
        "Name": "stonewall kitchen"
    },
    {
        "Name": "strathmore"
    },
    {
        "Name": "streamlight"
    },
    {
        "Name": "Stuff 4 Multiples"
    },
    {
        "Name": "sugarbooger"
    },
    {
        "Name": "sun zero"
    },
    {
        "Name": "superfight"
    },
    {
        "Name": "supersoaker"
    },
    {
        "Name": "surgi snuggly"
    },
    {
        "Name": "swagtron"
    },
    {
        "Name": "swarovski"
    },
    {
        "Name": "Sweet home collection"
    },
    {
        "Name": "swifty sharp"
    },
    {
        "Name": "swimways"
    },
    {
        "Name": "swissmar"
    },
    {
        "Name": "Switchmate"
    },
    {
        "Name": "sylvanian families"
    },
    {
        "Name": "syma"
    },
    {
        "Name": "sеvillе clаssics"
    },
    {
        "Name": "t3 micro"
    },
    {
        "Name": "takara tomy"
    },
    {
        "Name": "takeya"
    },
    {
        "Name": "tamagotchi"
    },
    {
        "Name": "tamashii nations"
    },
    {
        "Name": "Tapestry"
    },
    {
        "Name": "tassimo"
    },
    {
        "Name": "taste of the wild"
    },
    {
        "Name": "tastykake"
    },
    {
        "Name": "tcg toys"
    },
    {
        "Name": "Tea Tree"
    },
    {
        "Name": "teenage mutant ninja turtles"
    },
    {
        "Name": "teknor apex"
    },
    {
        "Name": "terrasoul superfoods"
    },
    {
        "Name": "tetra"
    },
    {
        "Name": "thames & kosmos"
    },
    {
        "Name": "the elf on the shelf"
    },
    {
        "Name": "the incredibles"
    },
    {
        "Name": "the incredibles 2"
    },
    {
        "Name": "the noble collection"
    },
    {
        "Name": "the republic of tea"
    },
    {
        "Name": "the works"
    },
    {
        "Name": "thebalm"
    },
    {
        "Name": "Think Fun"
    },
    {
        "Name": "thinkthin"
    },
    {
        "Name": "tiger chef"
    },
    {
        "Name": "tipton"
    },
    {
        "Name": "toland home garden"
    },
    {
        "Name": "Tommie Copper"
    },
    {
        "Name": "too faced"
    },
    {
        "Name": "torani"
    },
    {
        "Name": "tostitos"
    },
    {
        "Name": "totally bamboo"
    },
    {
        "Name": "toy"
    },
    {
        "Name": "traeger"
    },
    {
        "Name": "travelon"
    },
    {
        "Name": "treasure x"
    },
    {
        "Name": "Tribe"
    },
    {
        "Name": "trim-a-rim"
    },
    {
        "Name": "triple paste"
    },
    {
        "Name": "trudog"
    },
    {
        "Name": "trukid"
    },
    {
        "Name": "TRX"
    },
    {
        "Name": "twisty petz"
    },
    {
        "Name": "Tzumi"
    },
    {
        "Name": "u by kotex"
    },
    {
        "Name": "ULAK"
    },
    {
        "Name": "ultra paws"
    },
    {
        "Name": "ultra pro"
    },
    {
        "Name": "um"
    },
    {
        "Name": "uncle funky's daughter"
    },
    {
        "Name": "unite hair"
    },
    {
        "Name": "upper bounce"
    },
    {
        "Name": "upspring baby"
    },
    {
        "Name": "V-Cube"
    },
    {
        "Name": "vampire squid cards"
    },
    {
        "Name": "vampirina"
    },
    {
        "Name": "vasagle"
    },
    {
        "Name": "veet"
    },
    {
        "Name": "vega"
    },
    {
        "Name": "velcro brand"
    },
    {
        "Name": "versace"
    },
    {
        "Name": "verus"
    },
    {
        "Name": "vet's best"
    },
    {
        "Name": "vetoquinol"
    },
    {
        "Name": "Vichy"
    },
    {
        "Name": "victorio"
    },
    {
        "Name": "victorio kitchen products"
    },
    {
        "Name": "vince camuto"
    },
    {
        "Name": "vitacost brand"
    },
    {
        "Name": "vitaminwater"
    },
    {
        "Name": "viva naturals"
    },
    {
        "Name": "vivaplex"
    },
    {
        "Name": "Vogue Patterns"
    },
    {
        "Name": "voltron"
    },
    {
        "Name": "vulcan"
    },
    {
        "Name": "wabash valley farms"
    },
    {
        "Name": "watch ya mouth"
    },
    {
        "Name": "wen by chaz dean"
    },
    {
        "Name": "west end foods"
    },
    {
        "Name": "westcott"
    },
    {
        "Name": "white mountain puzzles"
    },
    {
        "Name": "who's most likely to..."
    },
    {
        "Name": "william mark"
    },
    {
        "Name": "willow creek press"
    },
    {
        "Name": "winco"
    },
    {
        "Name": "winning moves games"
    },
    {
        "Name": "wizards of the coast"
    },
    {
        "Name": "wonder forge"
    },
    {
        "Name": "wonder workshop"
    },
    {
        "Name": "wow baby"
    },
    {
        "Name": "wowwee"
    },
    {
        "Name": "wreck it ralph 2"
    },
    {
        "Name": "wubble"
    },
    {
        "Name": "Yongnuo"
    },
    {
        "Name": "yu-gi-oh!"
    },
    {
        "Name": "yves saint laurent"
    },
    {
        "Name": "z-line"
    },
    {
        "Name": "z-man games"
    },
    {
        "Name": "zep"
    },
    {
        "Name": "zhou nutrition"
    },
    {
        "Name": "zhu zhu pets"
    },
    {
        "Name": "zilla"
    },
    {
        "Name": "zing"
    },
    {
        "Name": "Zippo"
    },
    {
        "Name": "zoomer"
    },
    {
        "Name": "zo·li"
    },
    {
        "Name": "Zuru"
    },
    {
        "Name": "aqua joe"
    },
    {
        "Name": "black magic"
    },
    {
        "Name": "blue coral"
    },
    {
        "Name": "cen-tec systems"
    },
    {
        "Name": "connecticut electric"
    },
    {
        "Name": "creative home"
    },
    {
        "Name": "devcon"
    },
    {
        "Name": "down alternative"
    },
    {
        "Name": "dr. lite"
    },
    {
        "Name": "elegant home fashions"
    },
    {
        "Name": "fast orange"
    },
    {
        "Name": "filii"
    },
    {
        "Name": "fix-a-flat"
    },
    {
        "Name": "gen7pets"
    },
    {
        "Name": "greendale"
    },
    {
        "Name": "gumout"
    },
    {
        "Name": "natural comfort"
    },
    {
        "Name": "nature gnaws"
    },
    {
        "Name": "no touch"
    },
    {
        "Name": "permatex"
    },
    {
        "Name": "powersmart"
    },
    {
        "Name": "sausalito nights bedding"
    },
    {
        "Name": "slick 50"
    },
    {
        "Name": "snow joe"
    },
    {
        "Name": "snowie"
    },
    {
        "Name": "spira"
    },
    {
        "Name": "spray nine"
    },
    {
        "Name": "staart"
    },
    {
        "Name": "sun joe"
    },
    {
        "Name": "teamson kids"
    },
    {
        "Name": "the right stuff"
    },
    {
        "Name": "touchbeauty"
    },
    {
        "Name": "versachem"
    },
    {
        "Name": "walker edison furniture company"
    },
    {
        "Name": "wishery"
    },
    {
        "Name": "yukon glory"
    },
    {
        "Name": "altec"
    },
    {
        "Name": "aquasana"
    },
    {
        "Name": "flash furniture"
    },
    {
        "Name": "high sierra"
    },
    {
        "Name": "honey can do"
    },
    {
        "Name": "industrial hall"
    },
    {
        "Name": "instant pot"
    },
    {
        "Name": "kev &amp; cooper"
    },
    {
        "Name": "nielsen-massey"
    },
    {
        "Name": "prismacolor"
    },
    {
        "Name": "quartet"
    },
    {
        "Name": "ryan's world"
    },
    {
        "Name": "storage maniac"
    },
    {
        "Name": "strong camel"
    },
    {
        "Name": "suavitel"
    },
    {
        "Name": "vbg vbiger"
    },
    {
        "Name": "allegion"
    },
    {
        "Name": "angie’s boomchickapop"
    },
    {
        "Name": "antop"
    },
    {
        "Name": "b0041ddygy"
    },
    {
        "Name": "best barns"
    },
    {
        "Name": "best barns inc"
    },
    {
        "Name": "bigs"
    },
    {
        "Name": "cavaliere"
    },
    {
        "Name": "david"
    },
    {
        "Name": "duke’s"
    },
    {
        "Name": "duvalay"
    },
    {
        "Name": "federal brace"
    },
    {
        "Name": "fitness reality"
    },
    {
        "Name": "flame king"
    },
    {
        "Name": "florastor"
    },
    {
        "Name": "goo gone"
    },
    {
        "Name": "happy tot"
    },
    {
        "Name": "hermell"
    },
    {
        "Name": "home accent"
    },
    {
        "Name": "hunt’s"
    },
    {
        "Name": "insinkerator"
    },
    {
        "Name": "orville redenbacher"
    },
    {
        "Name": "orville redenbacher’s"
    },
    {
        "Name": "ro-tel"
    },
    {
        "Name": "rotel"
    },
    {
        "Name": "snack pack"
    },
    {
        "Name": "sunny health &amp; fitness"
    },
    {
        "Name": "werner"
    },
    {
        "Name": "wernerco"
    },
    {
        "Name": "air wick"
    },
    {
        "Name": "anytime"
    },
    {
        "Name": "b001f1ckdi"
    },
    {
        "Name": "baby dove"
    },
    {
        "Name": "bell sports"
    },
    {
        "Name": "benadryl"
    },
    {
        "Name": "burt's bees for pets"
    },
    {
        "Name": "carex"
    },
    {
        "Name": "caroline's treasures"
    },
    {
        "Name": "coleman cable"
    },
    {
        "Name": "crosley furniture"
    },
    {
        "Name": "harry's"
    },
    {
        "Name": "individual software"
    },
    {
        "Name": "killerspin"
    },
    {
        "Name": "miamily"
    },
    {
        "Name": "mold armor"
    },
    {
        "Name": "native"
    },
    {
        "Name": "poopsie"
    },
    {
        "Name": "stander"
    },
    {
        "Name": "the beadsmith"
    },
    {
        "Name": "topeak"
    },
    {
        "Name": "zenna home"
    },
    {
        "Name": "activphy"
    },
    {
        "Name": "activz"
    },
    {
        "Name": "amish origins"
    },
    {
        "Name": "balassalabs"
    },
    {
        "Name": "biotech pharmacal"
    },
    {
        "Name": "buried treasure"
    },
    {
        "Name": "duke cannon"
    },
    {
        "Name": "empowered products"
    },
    {
        "Name": "esn group"
    },
    {
        "Name": "fabercastel"
    },
    {
        "Name": "factory direct craft"
    },
    {
        "Name": "hairfinity"
    },
    {
        "Name": "lafabear"
    },
    {
        "Name": "makari"
    },
    {
        "Name": "mentholatum"
    },
    {
        "Name": "natural health immunigenics"
    },
    {
        "Name": "nutrex hawaii"
    },
    {
        "Name": "pressure positive"
    },
    {
        "Name": "red boat"
    },
    {
        "Name": "sun chlorella"
    },
    {
        "Name": "twin labs"
    },
    {
        "Name": "wet brush"
    },
    {
        "Name": "windy city novelties/fun central"
    },
    {
        "Name": "yaheetch"
    },
    {
        "Name": "zippypaws"
    },
    {
        "Name": "#n/a"
    },
    {
        "Name": "2nd skin"
    },
    {
        "Name": "3mpicassotiles"
    },
    {
        "Name": "3plus"
    },
    {
        "Name": "3pm"
    },
    {
        "Name": "887961245578"
    },
    {
        "Name": "ab coaster max"
    },
    {
        "Name": "ab roller evolution"
    },
    {
        "Name": "accents"
    },
    {
        "Name": "accusharp"
    },
    {
        "Name": "acros"
    },
    {
        "Name": "action mining services"
    },
    {
        "Name": " inc."
    },
    {
        "Name": "actionheat"
    },
    {
        "Name": "admired by nature"
    },
    {
        "Name": "adnart"
    },
    {
        "Name": "aftershokz"
    },
    {
        "Name": "aibecy"
    },
    {
        "Name": "air comfort"
    },
    {
        "Name": "albanese"
    },
    {
        "Name": "alc wireless"
    },
    {
        "Name": "aleratek"
    },
    {
        "Name": "alex & ani"
    },
    {
        "Name": "all star"
    },
    {
        "Name": "allibert"
    },
    {
        "Name": "altra furniture"
    },
    {
        "Name": "amana"
    },
    {
        "Name": "amazonia"
    },
    {
        "Name": "american weigh scales"
    },
    {
        "Name": "anolon kitchen"
    },
    {
        "Name": "ansonia records"
    },
    {
        "Name": "antic farmacista"
    },
    {
        "Name": "aqua monterey"
    },
    {
        "Name": "aqua spa"
    },
    {
        "Name": "aquachek"
    },
    {
        "Name": "aqueon aquarium"
    },
    {
        "Name": "ar+cook"
    },
    {
        "Name": "arbonne"
    },
    {
        "Name": "architectural mailboxes"
    },
    {
        "Name": "ariix"
    },
    {
        "Name": "artbeats software"
    },
    {
        "Name": "as seen on tv (any brand)"
    },
    {
        "Name": "asics"
    },
    {
        "Name": "astro"
    },
    {
        "Name": "at&t"
    },
    {
        "Name": "atlantic lifestyle"
    },
    {
        "Name": "atlantis hydroponics"
    },
    {
        "Name": "aufenblick"
    },
    {
        "Name": "augenblick"
    },
    {
        "Name": "august"
    },
    {
        "Name": "auntie anne's"
    },
    {
        "Name": "authentic talatech"
    },
    {
        "Name": "autism speaks"
    },
    {
        "Name": "auto meter products"
    },
    {
        "Name": " inc. (autometer)"
    },
    {
        "Name": "automotive technologies"
    },
    {
        "Name": "avalon home"
    },
    {
        "Name": "avalon patio"
    },
    {
        "Name": "avant grub"
    },
    {
        "Name": "avanti"
    },
    {
        "Name": "avedis zildjian"
    },
    {
        "Name": " co."
    },
    {
        "Name": "axor"
    },
    {
        "Name": "ayud"
    },
    {
        "Name": "ayudín"
    },
    {
        "Name": "b-air"
    },
    {
        "Name": "b.h.p."
    },
    {
        "Name": " inc. dba nialaya jewelry"
    },
    {
        "Name": "b2fitenss"
    },
    {
        "Name": "baby feeding"
    },
    {
        "Name": "BABY JOGGER"
    },
    {
        "Name": "baby k'tan"
    },
    {
        "Name": "babybj"
    },
    {
        "Name": "balkene home"
    },
    {
        "Name": "bare republic"
    },
    {
        "Name": "bareminerals"
    },
    {
        "Name": "baskerville"
    },
    {
        "Name": "bauknecht"
    },
    {
        "Name": "baum tools kitchen"
    },
    {
        "Name": "beard head"
    },
    {
        "Name": "beaudens"
    },
    {
        "Name": "bebe au lait baby products (excluding baby apparel)"
    },
    {
        "Name": "bedgear"
    },
    {
        "Name": "ben nye cosmetics"
    },
    {
        "Name": "benchmade knife company"
    },
    {
        "Name": "bencoo"
    },
    {
        "Name": "bernat"
    },
    {
        "Name": "bernnour home"
    },
    {
        "Name": "bessemer"
    },
    {
        "Name": "bestway"
    },
    {
        "Name": "better homes"
    },
    {
        "Name": "better than bouillon"
    },
    {
        "Name": "big league chew "
    },
    {
        "Name": "big red "
    },
    {
        "Name": "billie w. taylor ii"
    },
    {
        "Name": " ph.d."
    },
    {
        "Name": "bio bidet"
    },
    {
        "Name": "bio-pedic"
    },
    {
        "Name": "biowave"
    },
    {
        "Name": "birlea (uk)"
    },
    {
        "Name": "black cube"
    },
    {
        "Name": "blockware llc"
    },
    {
        "Name": " d.b.a. great useful stuff"
    },
    {
        "Name": "blue ridge"
    },
    {
        "Name": "blue ridge fish hatchery"
    },
    {
        "Name": "blue ridge novelty"
    },
    {
        "Name": "boca"
    },
    {
        "Name": "bolderton"
    },
    {
        "Name": "bonavita"
    },
    {
        "Name": "boneco"
    },
    {
        "Name": "boomer ball"
    },
    {
        "Name": "bormioli"
    },
    {
        "Name": "brach"
    },
    {
        "Name": "brady"
    },
    {
        "Name": "brastemp"
    },
    {
        "Name": "bravo view"
    },
    {
        "Name": "breathablebaby baby"
    },
    {
        "Name": "brightz"
    },
    {
        "Name": " ltd"
    },
    {
        "Name": "brownie brittle"
    },
    {
        "Name": "browning laboratories"
    },
    {
        "Name": "brps"
    },
    {
        "Name": "bua"
    },
    {
        "Name": "build-a-bear"
    },
    {
        "Name": "bumbo"
    },
    {
        "Name": "bumgenius"
    },
    {
        "Name": "burt"
    },
    {
        "Name": "butterie"
    },
    {
        "Name": "byer of maine sports"
    },
    {
        "Name": "bzb"
    },
    {
        "Name": "caf"
    },
    {
        "Name": "calutech"
    },
    {
        "Name": "camelbak"
    },
    {
        "Name": "canyon chenille"
    },
    {
        "Name": "capital brands - magic bullet"
    },
    {
        "Name": " ninja bullet"
    },
    {
        "Name": " baby bullet"
    },
    {
        "Name": " etc."
    },
    {
        "Name": "care creations"
    },
    {
        "Name": "carnation breakfast essentials"
    },
    {
        "Name": "carrs coins and rocks"
    },
    {
        "Name": "carter"
    },
    {
        "Name": "castlecreek"
    },
    {
        "Name": "cbs entertainment and desilu"
    },
    {
        "Name": " too"
    },
    {
        "Name": " llc (unforgettable licensing)"
    },
    {
        "Name": "cease and desist hansgrohe"
    },
    {
        "Name": "ceramedx"
    },
    {
        "Name": "ceranet"
    },
    {
        "Name": "champion power equipment"
    },
    {
        "Name": "char-griller"
    },
    {
        "Name": "chefwave"
    },
    {
        "Name": "chief architect"
    },
    {
        "Name": "chromewheels"
    },
    {
        "Name": "ciss"
    },
    {
        "Name": "clarkston"
    },
    {
        "Name": "clear dash hd"
    },
    {
        "Name": "clear tv"
    },
    {
        "Name": "clix"
    },
    {
        "Name": "colart americas"
    },
    {
        "Name": "colnago"
    },
    {
        "Name": "colnago®"
    },
    {
        "Name": "comforday"
    },
    {
        "Name": "completely bare"
    },
    {
        "Name": "confidence"
    },
    {
        "Name": "consul"
    },
    {
        "Name": "cool kidz"
    },
    {
        "Name": "cool sand"
    },
    {
        "Name": "copper chef"
    },
    {
        "Name": "copper chef grill"
    },
    {
        "Name": "copper chef xl"
    },
    {
        "Name": "copper crisper"
    },
    {
        "Name": "copper moon coffee"
    },
    {
        "Name": "copper wear"
    },
    {
        "Name": "corliving"
    },
    {
        "Name": "corolle"
    },
    {
        "Name": "costway"
    },
    {
        "Name": "counterfiet"
    },
    {
        "Name": "coway co."
    },
    {
        "Name": "craft crush"
    },
    {
        "Name": "creative home ideas"
    },
    {
        "Name": "creative scents"
    },
    {
        "Name": "creekkooler"
    },
    {
        "Name": "crystal geyser"
    },
    {
        "Name": "cucusoft"
    },
    {
        "Name": "curls"
    },
    {
        "Name": "d"
    },
    {
        "Name": "daewoo"
    },
    {
        "Name": "daily wellness"
    },
    {
        "Name": "danby"
    },
    {
        "Name": "dang"
    },
    {
        "Name": "danya b"
    },
    {
        "Name": "dark horse comics"
    },
    {
        "Name": "darkhorse ranch"
    },
    {
        "Name": "dash america dba pearl izumi"
    },
    {
        "Name": "de-bird"
    },
    {
        "Name": "decor therapy"
    },
    {
        "Name": "dékor (diaper dekor)"
    },
    {
        "Name": "dekor baby"
    },
    {
        "Name": "del hutson designs"
    },
    {
        "Name": "delta air lines"
    },
    {
        "Name": "dentyne"
    },
    {
        "Name": "depend health and personal care"
    },
    {
        "Name": "digium"
    },
    {
        "Name": "dionne quintuplets"
    },
    {
        "Name": " the"
    },
    {
        "Name": "diqua"
    },
    {
        "Name": "dolby laboratories inc. ("
    },
    {
        "Name": "dolby laboratories inc. (“dolby”)"
    },
    {
        "Name": "don pablo coffee"
    },
    {
        "Name": "donmar enterprises"
    },
    {
        "Name": " inc. - skyroof"
    },
    {
        "Name": " inc. - skyroof®"
    },
    {
        "Name": "dr-ho's"
    },
    {
        "Name": "dr. brite"
    },
    {
        "Name": "drano"
    },
    {
        "Name": "drive-in exchange"
    },
    {
        "Name": "driver"
    },
    {
        "Name": "dunlop manufacturing"
    },
    {
        "Name": "dynacraft"
    },
    {
        "Name": "eau thermale av"
    },
    {
        "Name": "eclipse records"
    },
    {
        "Name": "ecosphere associates"
    },
    {
        "Name": "edgar rice burroughs"
    },
    {
        "Name": "egyptian magic"
    },
    {
        "Name": "ellia"
    },
    {
        "Name": "ellie"
    },
    {
        "Name": "ellie’s best"
    },
    {
        "Name": "emeril"
    },
    {
        "Name": "emopeak"
    },
    {
        "Name": "endangered species"
    },
    {
        "Name": "energizer iot"
    },
    {
        "Name": "entertainment one"
    },
    {
        "Name": "eqyss"
    },
    {
        "Name": "erlene / erlene home fashions"
    },
    {
        "Name": "escali"
    },
    {
        "Name": "estate of marilyn monroe"
    },
    {
        "Name": "eton"
    },
    {
        "Name": "everydrop"
    },
    {
        "Name": "excel international"
    },
    {
        "Name": "explore cuisine"
    },
    {
        "Name": "ez drinker"
    },
    {
        "Name": "ezviz"
    },
    {
        "Name": "fagor america"
    },
    {
        "Name": "fao schwarz"
    },
    {
        "Name": "farmland foods"
    },
    {
        "Name": "faultless / bon ami company corporation"
    },
    {
        "Name": "festnight"
    },
    {
        "Name": "fibaro"
    },
    {
        "Name": "filemaker"
    },
    {
        "Name": "first alert tools and home improvement"
    },
    {
        "Name": "flawless"
    },
    {
        "Name": "fleurville florida council of bromeliad societies"
    },
    {
        "Name": "flex seal (as seen on tv)"
    },
    {
        "Name": "flex steel hose"
    },
    {
        "Name": "flexable hose"
    },
    {
        "Name": "flexapedic by sleep philosophy"
    },
    {
        "Name": "flipbelt"
    },
    {
        "Name": "floortex"
    },
    {
        "Name": "flower beauty"
    },
    {
        "Name": "fluidmaster"
    },
    {
        "Name": "fluval"
    },
    {
        "Name": "foscam intelligent technology co."
    },
    {
        "Name": " ltd."
    },
    {
        "Name": "freedent "
    },
    {
        "Name": "frigidaire"
    },
    {
        "Name": "frito-lay"
    },
    {
        "Name": "frontlineflags"
    },
    {
        "Name": "fruitables"
    },
    {
        "Name": "full moon"
    },
    {
        "Name": "fun costumes"
    },
    {
        "Name": "furhaven pet products"
    },
    {
        "Name": "g. loomis"
    },
    {
        "Name": "game"
    },
    {
        "Name": "gardens"
    },
    {
        "Name": "genie bra"
    },
    {
        "Name": "genie cami shaper"
    },
    {
        "Name": "genie custom fit bra"
    },
    {
        "Name": "genie hour glass"
    },
    {
        "Name": "genie milana bra"
    },
    {
        "Name": "genie slim & tone leggings"
    },
    {
        "Name": "genie slim jeggings"
    },
    {
        "Name": "genie slim panties"
    },
    {
        "Name": "genie zip bra"
    },
    {
        "Name": "gibson brands"
    },
    {
        "Name": "gibson performance exhaust"
    },
    {
        "Name": "gladiator"
    },
    {
        "Name": "global prepare"
    },
    {
        "Name": " llc dba mother earth products"
    },
    {
        "Name": "glowbowl"
    },
    {
        "Name": " dba jabra"
    },
    {
        "Name": "gogogate"
    },
    {
        "Name": "gold's gym"
    },
    {
        "Name": "goodyear"
    },
    {
        "Name": "gorilla carts"
    },
    {
        "Name": "gourmia"
    },
    {
        "Name": "grand chapter of phi sigma kappa"
    },
    {
        "Name": "green glider"
    },
    {
        "Name": "greenworks"
    },
    {
        "Name": "griffen"
    },
    {
        "Name": "grillight"
    },
    {
        "Name": "growlerwerks"
    },
    {
        "Name": "guide gear"
    },
    {
        "Name": "gunnar optiks"
    },
    {
        "Name": "haier"
    },
    {
        "Name": "halti"
    },
    {
        "Name": "hamilton tables"
    },
    {
        "Name": "hangz"
    },
    {
        "Name": "harry"
    },
    {
        "Name": "hartley loudspeakers"
    },
    {
        "Name": "inc."
    },
    {
        "Name": "hasaka"
    },
    {
        "Name": "hathaway"
    },
    {
        "Name": "havit"
    },
    {
        "Name": "hawaiian islands tea company"
    },
    {
        "Name": "hdmi licensing"
    },
    {
        "Name": "hershey"
    },
    {
        "Name": "hertzko"
    },
    {
        "Name": "hifonics"
    },
    {
        "Name": "homasy"
    },
    {
        "Name": "home discount"
    },
    {
        "Name": "home power"
    },
    {
        "Name": "homelabs"
    },
    {
        "Name": "homz"
    },
    {
        "Name": "honda"
    },
    {
        "Name": "horizon hobby"
    },
    {
        "Name": "hotelspa/hotel spa"
    },
    {
        "Name": "hotpoint"
    },
    {
        "Name": "hq issue"
    },
    {
        "Name": "hqapr"
    },
    {
        "Name": "human touch"
    },
    {
        "Name": "hurom"
    },
    {
        "Name": "hy-c llc"
    },
    {
        "Name": "hybrid systems ltd."
    },
    {
        "Name": " inc. (hsl)"
    },
    {
        "Name": "hydroluxe"
    },
    {
        "Name": "i/o magic"
    },
    {
        "Name": "iberia"
    },
    {
        "Name": "ideal pet products"
    },
    {
        "Name": "ideaworks"
    },
    {
        "Name": "ijdmtoy"
    },
    {
        "Name": "incipio technologies"
    },
    {
        "Name": "indesit"
    },
    {
        "Name": "infamil"
    },
    {
        "Name": "ingersol-rand"
    },
    {
        "Name": "insect lore"
    },
    {
        "Name": "insten"
    },
    {
        "Name": "insteon"
    },
    {
        "Name": "ip complaint"
    },
    {
        "Name": "iq builder"
    },
    {
        "Name": "irwin naturals"
    },
    {
        "Name": "it"
    },
    {
        "Name": "jack lalanne fusion juicer"
    },
    {
        "Name": "jade yoga"
    },
    {
        "Name": "jem accessories"
    },
    {
        "Name": "jennair"
    },
    {
        "Name": "jet performance products"
    },
    {
        "Name": "jhs"
    },
    {
        "Name": "jml weighted blanket"
    },
    {
        "Name": "jordan's"
    },
    {
        "Name": "joy kroeger beckner"
    },
    {
        "Name": " classical realism"
    },
    {
        "Name": " from hounds to humans"
    },
    {
        "Name": "joyforall"
    },
    {
        "Name": "judee's gluten free"
    },
    {
        "Name": "juvo products"
    },
    {
        "Name": "k"
    },
    {
        "Name": "k.w. muth company"
    },
    {
        "Name": "kegco"
    },
    {
        "Name": "kelly kettle"
    },
    {
        "Name": "Kensington Hill"
    },
    {
        "Name": "kenu"
    },
    {
        "Name": "kes"
    },
    {
        "Name": "keshili"
    },
    {
        "Name": "kev & cooper"
    },
    {
        "Name": "kicko"
    },
    {
        "Name": "kiddolab"
    },
    {
        "Name": "kids 'n' pets"
    },
    {
        "Name": "kidsme"
    },
    {
        "Name": "kiehl"
    },
    {
        "Name": "kikkerland"
    },
    {
        "Name": "king technology"
    },
    {
        "Name": "kleeger"
    },
    {
        "Name": "knowledge in motion"
    },
    {
        "Name": "kobalt"
    },
    {
        "Name": "kooler kube"
    },
    {
        "Name": "kosmo cooler"
    },
    {
        "Name": "kovot kitchen"
    },
    {
        "Name": "ksny all in good taste"
    },
    {
        "Name": "l"
    },
    {
        "Name": "la crosse technology"
    },
    {
        "Name": "landtom"
    },
    {
        "Name": "landtom®"
    },
    {
        "Name": "langley productions"
    },
    {
        "Name": "lansinoh laboratories"
    },
    {
        "Name": "larry hartsell seminars"
    },
    {
        "Name": "laser design int'l"
    },
    {
        "Name": "lasko"
    },
    {
        "Name": "latisse"
    },
    {
        "Name": "Laura Ashley"
    },
    {
        "Name": "lazy larry brownies or lazy cakes"
    },
    {
        "Name": "leisure seasons"
    },
    {
        "Name": "leisuremod"
    },
    {
        "Name": "lekeye"
    },
    {
        "Name": "lekue"
    },
    {
        "Name": "lem products"
    },
    {
        "Name": "lenny and eva"
    },
    {
        "Name": "letterrip decals"
    },
    {
        "Name": "leupold & stevens"
    },
    {
        "Name": "levana"
    },
    {
        "Name": "levi"
    },
    {
        "Name": "lia sophia jewelery"
    },
    {
        "Name": "licketysplit"
    },
    {
        "Name": "lidias"
    },
    {
        "Name": "lifestyle dynamics"
    },
    {
        "Name": "lifetrons switzerland gmbh"
    },
    {
        "Name": "lift"
    },
    {
        "Name": "lifted research group inc. (l-r-g)"
    },
    {
        "Name": "light & dark productions"
    },
    {
        "Name": "light society"
    },
    {
        "Name": "lightspeed outdoors"
    },
    {
        "Name": "lil woodzeez"
    },
    {
        "Name": "lil' luxuries"
    },
    {
        "Name": "linda mcsweeney"
    },
    {
        "Name": "link akc"
    },
    {
        "Name": "linkedin corporation"
    },
    {
        "Name": "lip ink"
    },
    {
        "Name": "lip ink® international"
    },
    {
        "Name": "lipper international"
    },
    {
        "Name": "lipton"
    },
    {
        "Name": "lite source"
    },
    {
        "Name": "little debbie"
    },
    {
        "Name": "little looster"
    },
    {
        "Name": "lockly"
    },
    {
        "Name": "loop loc"
    },
    {
        "Name": "looster booster"
    },
    {
        "Name": "lorell"
    },
    {
        "Name": "lucid"
    },
    {
        "Name": "lullaby"
    },
    {
        "Name": "lumicharge"
    },
    {
        "Name": "luminolite"
    },
    {
        "Name": "luunguyen"
    },
    {
        "Name": "luxe jewels"
    },
    {
        "Name": " llc dba stella & dot"
    },
    {
        "Name": "luxe purses"
    },
    {
        "Name": "luxottica retail"
    },
    {
        "Name": "lvx"
    },
    {
        "Name": "lynksys"
    },
    {
        "Name": "m&m/mars brands"
    },
    {
        "Name": "maasdam"
    },
    {
        "Name": "mac"
    },
    {
        "Name": "mad dogg athletics"
    },
    {
        "Name": "madison park"
    },
    {
        "Name": "magic path"
    },
    {
        "Name": "magic vida"
    },
    {
        "Name": "magnetic poetry"
    },
    {
        "Name": "magnolia rubberstamps"
    },
    {
        "Name": "mainframe"
    },
    {
        "Name": "mamiya america corporation"
    },
    {
        "Name": "manchester united"
    },
    {
        "Name": "mannatech incorporated"
    },
    {
        "Name": "marbles"
    },
    {
        "Name": "marciano"
    },
    {
        "Name": "marianne's sol mate socks"
    },
    {
        "Name": "mariell (even from the manufacturer)"
    },
    {
        "Name": "marrakesh"
    },
    {
        "Name": "marshydro"
    },
    {
        "Name": "martrix biolage"
    },
    {
        "Name": "marula"
    },
    {
        "Name": "marvis"
    },
    {
        "Name": "mary capan"
    },
    {
        "Name": "master of illusions entertainment"
    },
    {
        "Name": "masterlock"
    },
    {
        "Name": "matchadna"
    },
    {
        "Name": "matt groening"
    },
    {
        "Name": "mattress helper home and garden"
    },
    {
        "Name": "maxiclimber"
    },
    {
        "Name": "maximum fitness gear"
    },
    {
        "Name": "maxylife"
    },
    {
        "Name": "mayka"
    },
    {
        "Name": "maytag"
    },
    {
        "Name": "mb quart"
    },
    {
        "Name": "mccain photography"
    },
    {
        "Name": "mdsolarsciences"
    },
    {
        "Name": "meal prep haven"
    },
    {
        "Name": "meaningful beauty"
    },
    {
        "Name": "meco"
    },
    {
        "Name": "medcosouth healthcare"
    },
    {
        "Name": "mederma"
    },
    {
        "Name": "medieval moccasins"
    },
    {
        "Name": "mee tong shop"
    },
    {
        "Name": "megagrass"
    },
    {
        "Name": "melissa & dougkenu"
    },
    {
        "Name": "mellotron archives"
    },
    {
        "Name": "mercers furniture (uk)"
    },
    {
        "Name": "merle norman cosmetics"
    },
    {
        "Name": "merz"
    },
    {
        "Name": "metal ware"
    },
    {
        "Name": "method"
    },
    {
        "Name": "metropolitan kitchen"
    },
    {
        "Name": "miabella"
    },
    {
        "Name": "michael todd"
    },
    {
        "Name": "michelle phan"
    },
    {
        "Name": "mickey mouse"
    },
    {
        "Name": "microdry"
    },
    {
        "Name": "microplane"
    },
    {
        "Name": "midtown concept"
    },
    {
        "Name": "mighty blaster"
    },
    {
        "Name": "mighty jr."
    },
    {
        "Name": "mikimoto america"
    },
    {
        "Name": "milescraft"
    },
    {
        "Name": "Milliard"
    },
    {
        "Name": "milo & misty"
    },
    {
        "Name": "minecraft"
    },
    {
        "Name": "minelab electronics"
    },
    {
        "Name": "minetom"
    },
    {
        "Name": "miracle blanket"
    },
    {
        "Name": "miraflex s.a."
    },
    {
        "Name": "mitchell repair information company"
    },
    {
        "Name": "mixologist world"
    },
    {
        "Name": "mixologist world™"
    },
    {
        "Name": "mixpresso"
    },
    {
        "Name": "miyabi"
    },
    {
        "Name": "mlb (major league baseball)"
    },
    {
        "Name": "moby baby"
    },
    {
        "Name": "moby wrap"
    },
    {
        "Name": "moddan"
    },
    {
        "Name": "modern littles"
    },
    {
        "Name": "modern warrior"
    },
    {
        "Name": "modernhome"
    },
    {
        "Name": "moderntherapy"
    },
    {
        "Name": "mohawk industries"
    },
    {
        "Name": "mommies melodies"
    },
    {
        "Name": "moni originals"
    },
    {
        "Name": "monster"
    },
    {
        "Name": "moon boots"
    },
    {
        "Name": "mooncheese"
    },
    {
        "Name": "mooneyes usa"
    },
    {
        "Name": "moontree"
    },
    {
        "Name": "moose country gear"
    },
    {
        "Name": "mophie"
    },
    {
        "Name": "morphing mugs"
    },
    {
        "Name": "mother earth products"
    },
    {
        "Name": "motion picture association of america (mpaa)"
    },
    {
        "Name": "motorola smart safe"
    },
    {
        "Name": "mount-it"
    },
    {
        "Name": "mountain dew"
    },
    {
        "Name": "mounting dream"
    },
    {
        "Name": "moviecraft inc."
    },
    {
        "Name": "mr. beams"
    },
    {
        "Name": "mr. coffee kitchen"
    },
    {
        "Name": "mr. stacky"
    },
    {
        "Name": "mrs. anderson"
    },
    {
        "Name": "mud puppy mold company"
    },
    {
        "Name": "my brest friend"
    },
    {
        "Name": "my infinite agenda"
    },
    {
        "Name": "my pageant kid"
    },
    {
        "Name": "my poupette enterprises inc."
    },
    {
        "Name": "my size"
    },
    {
        "Name": "mygift enterprise llc"
    },
    {
        "Name": "mystudygroup101"
    },
    {
        "Name": "mywalit"
    },
    {
        "Name": "n.v.e."
    },
    {
        "Name": "ña pancha"
    },
    {
        "Name": "nandita arts"
    },
    {
        "Name": "nanobebe"
    },
    {
        "Name": "nanoleaf"
    },
    {
        "Name": "national academy of television arts & sciences"
    },
    {
        "Name": "national board of medical examiners - nbme"
    },
    {
        "Name": "national board of medical examiners - nbme®"
    },
    {
        "Name": "national football league"
    },
    {
        "Name": "national historic mining initiative lc3"
    },
    {
        "Name": "national shooting sports foundation"
    },
    {
        "Name": "national tree company home and garden"
    },
    {
        "Name": "native deodorant"
    },
    {
        "Name": "nature"
    },
    {
        "Name": "nature home décor"
    },
    {
        "Name": "nature valley"
    },
    {
        "Name": "nature's hangout"
    },
    {
        "Name": "nature's recipe"
    },
    {
        "Name": "naturesplus"
    },
    {
        "Name": "nature’s earthly choice"
    },
    {
        "Name": "naturopathica"
    },
    {
        "Name": "natursutten"
    },
    {
        "Name": "neater feeder home and gardon (including pet supplies)"
    },
    {
        "Name": "neatfreak"
    },
    {
        "Name": "neato"
    },
    {
        "Name": "nekteck"
    },
    {
        "Name": "nerf"
    },
    {
        "Name": "nestle coffee-mate"
    },
    {
        "Name": "netgear"
    },
    {
        "Name": "netpicks"
    },
    {
        "Name": "newman"
    },
    {
        "Name": "newman’s own"
    },
    {
        "Name": "nickolas muray photo archives"
    },
    {
        "Name": "nielsen massey"
    },
    {
        "Name": "nivea for men"
    },
    {
        "Name": "nordstrom"
    },
    {
        "Name": "north sates"
    },
    {
        "Name": "nostik"
    },
    {
        "Name": "not your mother's"
    },
    {
        "Name": "novolink"
    },
    {
        "Name": "nsk americas"
    },
    {
        "Name": "nuspin kids"
    },
    {
        "Name": "nutri ninja"
    },
    {
        "Name": "nutribullet lean"
    },
    {
        "Name": "nutribullet max"
    },
    {
        "Name": "nutribullet pro"
    },
    {
        "Name": "nutribullet rx"
    },
    {
        "Name": "obsession"
    },
    {
        "Name": "odoban"
    },
    {
        "Name": "ofm essentials collection"
    },
    {
        "Name": "okslo"
    },
    {
        "Name": "old wisconsin"
    },
    {
        "Name": "omega juicers"
    },
    {
        "Name": "opi products"
    },
    {
        "Name": "orbit "
    },
    {
        "Name": "origami owl"
    },
    {
        "Name": "original gourmet"
    },
    {
        "Name": "ortho"
    },
    {
        "Name": "osem"
    },
    {
        "Name": "oxyled"
    },
    {
        "Name": "p rogers"
    },
    {
        "Name": "pacific market international"
    },
    {
        "Name": "pagedown technology"
    },
    {
        "Name": "pampered chef"
    },
    {
        "Name": "panama (uk)"
    },
    {
        "Name": "patmont motor werks/go-ped"
    },
    {
        "Name": "patmont motor werks/go-ped®"
    },
    {
        "Name": "pawsiq"
    },
    {
        "Name": "pawsiq™"
    },
    {
        "Name": "pbfit"
    },
    {
        "Name": "pedigree"
    },
    {
        "Name": "peet’s coffee"
    },
    {
        "Name": "pelican water"
    },
    {
        "Name": "penn-plax"
    },
    {
        "Name": "perfect pod"
    },
    {
        "Name": "perfect smile veneers"
    },
    {
        "Name": "perfecter"
    },
    {
        "Name": "perry mackin"
    },
    {
        "Name": "pet champion"
    },
    {
        "Name": "pet corrector"
    },
    {
        "Name": "pet head"
    },
    {
        "Name": "petcube play interactive wifi pet camera"
    },
    {
        "Name": "petcurean"
    },
    {
        "Name": "peterivan"
    },
    {
        "Name": "pferd"
    },
    {
        "Name": "physionics"
    },
    {
        "Name": "piperwai"
    },
    {
        "Name": "pjmasks"
    },
    {
        "Name": "planetary design"
    },
    {
        "Name": "platypus wear"
    },
    {
        "Name": " inc. dba bad boy brands"
    },
    {
        "Name": "plumeria bay"
    },
    {
        "Name": "polk audio"
    },
    {
        "Name": "polo ralph lauren"
    },
    {
        "Name": "polymorphe"
    },
    {
        "Name": "pool patch"
    },
    {
        "Name": "power air fryer"
    },
    {
        "Name": "power air fryer xl"
    },
    {
        "Name": "power pressure cooker xl"
    },
    {
        "Name": "premier protein grocery & gourmet foods"
    },
    {
        "Name": "prepak products"
    },
    {
        "Name": "prime pellet grills"
    },
    {
        "Name": "proctor & gamble brands"
    },
    {
        "Name": "prosense"
    },
    {
        "Name": "prosonicsmile"
    },
    {
        "Name": "provo craft & novelty"
    },
    {
        "Name": "purity home"
    },
    {
        "Name": "puzzled"
    },
    {
        "Name": "q-see"
    },
    {
        "Name": "quickcable"
    },
    {
        "Name": "quiksilver"
    },
    {
        "Name": "rachio"
    },
    {
        "Name": "radiancy"
    },
    {
        "Name": "rand kleen"
    },
    {
        "Name": "re/max international"
    },
    {
        "Name": "red hat society"
    },
    {
        "Name": "red hound auto"
    },
    {
        "Name": "red monkey designs"
    },
    {
        "Name": "red vanilla"
    },
    {
        "Name": "relix international"
    },
    {
        "Name": "remfresh"
    },
    {
        "Name": "remove pillow pets"
    },
    {
        "Name": "renfox"
    },
    {
        "Name": "renpure"
    },
    {
        "Name": "rhode island novelty"
    },
    {
        "Name": "rimmel"
    },
    {
        "Name": "river of goods"
    },
    {
        "Name": "rock solid wholesale"
    },
    {
        "Name": "rocket science institute"
    },
    {
        "Name": "rookie humans"
    },
    {
        "Name": "roterdon"
    },
    {
        "Name": "roundup"
    },
    {
        "Name": "rubie"
    },
    {
        "Name": "ruffoni"
    },
    {
        "Name": "rukket sports"
    },
    {
        "Name": "ryobi"
    },
    {
        "Name": "s"
    },
    {
        "Name": "Safavieh"
    },
    {
        "Name": "saker"
    },
    {
        "Name": "salt life holdings"
    },
    {
        "Name": "san jamar"
    },
    {
        "Name": "sanyo electric co."
    },
    {
        "Name": "sawyer"
    },
    {
        "Name": "schweppes"
    },
    {
        "Name": "scruples"
    },
    {
        "Name": "sealskin"
    },
    {
        "Name": "sevylor"
    },
    {
        "Name": "sharp"
    },
    {
        "Name": "sheetz"
    },
    {
        "Name": "shimano"
    },
    {
        "Name": "shun sora"
    },
    {
        "Name": "silent beacon"
    },
    {
        "Name": "silly squeakers"
    },
    {
        "Name": "simba"
    },
    {
        "Name": "sinopec"
    },
    {
        "Name": "sistema"
    },
    {
        "Name": "skiboards superstore"
    },
    {
        "Name": "skinact"
    },
    {
        "Name": "skinnypop"
    },
    {
        "Name": "skippy"
    },
    {
        "Name": "sleeping partners"
    },
    {
        "Name": "slimfast"
    },
    {
        "Name": "smart sips"
    },
    {
        "Name": "smart weigh"
    },
    {
        "Name": "smartsound software"
    },
    {
        "Name": "smoke hollow"
    },
    {
        "Name": "sms audio"
    },
    {
        "Name": "snyder"
    },
    {
        "Name": "snyder’s"
    },
    {
        "Name": "sogonomics"
    },
    {
        "Name": "sole technology"
    },
    {
        "Name": "south mission"
    },
    {
        "Name": "southwest pictures / southwest entertainment group"
    },
    {
        "Name": "space scooter"
    },
    {
        "Name": "spalding"
    },
    {
        "Name": "spearmint "
    },
    {
        "Name": "spicer pro"
    },
    {
        "Name": "spyder active sports"
    },
    {
        "Name": "square deal recordings & supplies"
    },
    {
        "Name": "ssline"
    },
    {
        "Name": "starnight laser"
    },
    {
        "Name": "sterling shelf liners"
    },
    {
        "Name": "sticky holsters"
    },
    {
        "Name": "stirrings"
    },
    {
        "Name": "storesmart"
    },
    {
        "Name": "stringking"
    },
    {
        "Name": "suaoki"
    },
    {
        "Name": "sumind"
    },
    {
        "Name": "sun2solar"
    },
    {
        "Name": "sunnydaze d"
    },
    {
        "Name": "sunnydaze decor"
    },
    {
        "Name": "sunwarrior"
    },
    {
        "Name": "surecall"
    },
    {
        "Name": "sweet jojo designs"
    },
    {
        "Name": "swiss army brands"
    },
    {
        "Name": "s’ip by swell"
    },
    {
        "Name": "t"
    },
    {
        "Name": "tabakh"
    },
    {
        "Name": "tamiya america"
    },
    {
        "Name": "target up & up vitamins"
    },
    {
        "Name": "team mysterio"
    },
    {
        "Name": "techflex"
    },
    {
        "Name": "tekton"
    },
    {
        "Name": "telesteps"
    },
    {
        "Name": "temptations"
    },
    {
        "Name": "texas recreation"
    },
    {
        "Name": "the company of animals"
    },
    {
        "Name": "the pressure positive"
    },
    {
        "Name": "three hands"
    },
    {
        "Name": "tic tacs"
    },
    {
        "Name": "tiesta tea"
    },
    {
        "Name": "titebond"
    },
    {
        "Name": "tmh technology co."
    },
    {
        "Name": "tmobile"
    },
    {
        "Name": "tom jones design"
    },
    {
        "Name": "tom kelley studios"
    },
    {
        "Name": "tomcat"
    },
    {
        "Name": "topper"
    },
    {
        "Name": "tori richard"
    },
    {
        "Name": "toughbuilt"
    },
    {
        "Name": "tracfone"
    },
    {
        "Name": "tritton"
    },
    {
        "Name": "true citrus"
    },
    {
        "Name": "tuffy"
    },
    {
        "Name": "tüv markenverbund e.v"
    },
    {
        "Name": "twitching lure"
    },
    {
        "Name": "uber appliance"
    },
    {
        "Name": "ubiquiti network"
    },
    {
        "Name": "ultimate creations"
    },
    {
        "Name": "ultimate warrior/warrior"
    },
    {
        "Name": "unbuckleme"
    },
    {
        "Name": "unitary industrial"
    },
    {
        "Name": "urban designs"
    },
    {
        "Name": "vanguard industries"
    },
    {
        "Name": "vanity planet - trademark"
    },
    {
        "Name": "vemotix or vemotix"
    },
    {
        "Name": "vemotix or vemotix™"
    },
    {
        "Name": "versonora"
    },
    {
        "Name": "viatek"
    },
    {
        "Name": "victoria"
    },
    {
        "Name": "victoria’s secret"
    },
    {
        "Name": "vintage fans"
    },
    {
        "Name": " l.l.c."
    },
    {
        "Name": "vital proteins"
    },
    {
        "Name": "vivint"
    },
    {
        "Name": "vosker"
    },
    {
        "Name": "voyager"
    },
    {
        "Name": "w"
    },
    {
        "Name": "walgreens"
    },
    {
        "Name": "walgreens “finest nutrition”"
    },
    {
        "Name": "walmart"
    },
    {
        "Name": "walmart “spring valley”"
    },
    {
        "Name": "wasserstein"
    },
    {
        "Name": "water pik"
    },
    {
        "Name": "wd music products"
    },
    {
        "Name": "we got nuts"
    },
    {
        "Name": "weathertech"
    },
    {
        "Name": "wedgwood"
    },
    {
        "Name": "weinstein company"
    },
    {
        "Name": "weleda"
    },
    {
        "Name": "well traveled living"
    },
    {
        "Name": "wellslock"
    },
    {
        "Name": "whelen engineering company"
    },
    {
        "Name": "whirlpool brands"
    },
    {
        "Name": "whizardries"
    },
    {
        "Name": "wiggles touring pty limited"
    },
    {
        "Name": "wildkin"
    },
    {
        "Name": "wilton armetale"
    },
    {
        "Name": "windex"
    },
    {
        "Name": "winsome"
    },
    {
        "Name": "winterfresh "
    },
    {
        "Name": "wirehard"
    },
    {
        "Name": "wonder buggy"
    },
    {
        "Name": "world hockey association"
    },
    {
        "Name": "world wrestling entertainment"
    },
    {
        "Name": " inc. (wwe)"
    },
    {
        "Name": "wrigley brands"
    },
    {
        "Name": "xpace"
    },
    {
        "Name": "xpose safety"
    },
    {
        "Name": "yaheetech/core/yahoo"
    },
    {
        "Name": "yes4all sports (excluding sports collectibles)"
    },
    {
        "Name": "yesker"
    },
    {
        "Name": "ymctoys"
    },
    {
        "Name": "york5500"
    },
    {
        "Name": "yosoo"
    },
    {
        "Name": "youcopia"
    },
    {
        "Name": "youcopia’s"
    },
    {
        "Name": "yummly"
    },
    {
        "Name": "yunmai"
    },
    {
        "Name": "zadro inc."
    },
    {
        "Name": "zadro products inc."
    },
    {
        "Name": "zeiss"
    },
    {
        "Name": "zeny"
    },
    {
        "Name": "zepp"
    },
    {
        "Name": "zippy paws"
    },
    {
        "Name": "zmodo"
    },
    {
        "Name": "zo"
    },
    {
        "Name": "zober"
    },
    {
        "Name": "zos"
    },
    {
        "Name": "zurn"
    },
    {
        "Name": "bt expert"
    },
    {
        "Name": "hawaii hangover"
    },
    {
        "Name": "agfabric"
    },
    {
        "Name": "aquadance"
    },
    {
        "Name": "aquastar"
    },
    {
        "Name": "audio technica (audio-technica)"
    },
    {
        "Name": "autel"
    },
    {
        "Name": "axis electrical"
    },
    {
        "Name": "BACKYARD DISCOVERY"
    },
    {
        "Name": "baxton studio"
    },
    {
        "Name": "beach body/p90x"
    },
    {
        "Name": "bean products (cbo)"
    },
    {
        "Name": "bedding by treasure2  (treasure2)"
    },
    {
        "Name": "bentwood bassinet summer infant (bentwood bassinet)"
    },
    {
        "Name": "black and decker"
    },
    {
        "Name": "black mountain products"
    },
    {
        "Name": "blamtastic"
    },
    {
        "Name": "boxwave"
    },
    {
        "Name": "brewdemon"
    },
    {
        "Name": "britax bob"
    },
    {
        "Name": "bud light"
    },
    {
        "Name": "budweiser"
    },
    {
        "Name": "bulb botz"
    },
    {
        "Name": "canary products"
    },
    {
        "Name": "certified international"
    },
    {
        "Name": "college hill games"
    },
    {
        "Name": "critical"
    },
    {
        "Name": "deny"
    },
    {
        "Name": "dexter"
    },
    {
        "Name": "drymate"
    },
    {
        "Name": "ellie's best and ellie's best"
    },
    {
        "Name": "euro-pro shark (shark)"
    },
    {
        "Name": "faj"
    },
    {
        "Name": "falcon"
    },
    {
        "Name": "fisher price cradle 'n swing - soothing savanna"
    },
    {
        "Name": "foodbrick"
    },
    {
        "Name": "fridgidaire"
    },
    {
        "Name": "fuel"
    },
    {
        "Name": "gallery lighting"
    },
    {
        "Name": "golden"
    },
    {
        "Name": "great arrivals gift baskets  (great arrivals) (greatarrivals)"
    },
    {
        "Name": "great arrivals gift baskets (great arrivals) (greatarrivals)"
    },
    {
        "Name": "grow green or growgreen"
    },
    {
        "Name": "h2o mop x5 as seen on tv  (h2o mop x5)"
    },
    {
        "Name": "h2o mop x5 as seen on tv (h2o mop x5)"
    },
    {
        "Name": "hallmark hamilton beach hbo"
    },
    {
        "Name": "hayneedle"
    },
    {
        "Name": "hearthsong"
    },
    {
        "Name": "HomCom"
    },
    {
        "Name": "homgrace"
    },
    {
        "Name": "hsn"
    },
    {
        "Name": "idylc homes konatm"
    },
    {
        "Name": "ingenious designs"
    },
    {
        "Name": "ispring water systems"
    },
    {
        "Name": "ives"
    },
    {
        "Name": "Jaxx"
    },
    {
        "Name": "jo jo designs (jojo)"
    },
    {
        "Name": "kalencom (only ones that are not manu)"
    },
    {
        "Name": "kilner 10-piece preserving starter set"
    },
    {
        "Name": "kryptonite"
    },
    {
        "Name": "lcn"
    },
    {
        "Name": "magic cabin"
    },
    {
        "Name": "mr beams"
    },
    {
        "Name": "mrs. anderson's"
    },
    {
        "Name": "new shining image llc"
    },
    {
        "Name": "nfl ( national football league)"
    },
    {
        "Name": "nikki's baby blossom's or gift baskets  (nikki's baby)  (nikki's baskets)"
    },
    {
        "Name": "ningbo mh imp"
    },
    {
        "Name": "offi"
    },
    {
        "Name": "plush 2 seater bean bag"
    },
    {
        "Name": "popdecors"
    },
    {
        "Name": "power spa"
    },
    {
        "Name": "pretty star store llc"
    },
    {
        "Name": "rca    (only ones that are not manu)"
    },
    {
        "Name": "rdx"
    },
    {
        "Name": "retrospec"
    },
    {
        "Name": "ring"
    },
    {
        "Name": "royce leather"
    },
    {
        "Name": "scandinavian child product (beaba)  (lillebaby) (svan)"
    },
    {
        "Name": "schlage lock company"
    },
    {
        "Name": "showtime season dvds"
    },
    {
        "Name": "sivan health and fitness"
    },
    {
        "Name": "sleep yoga"
    },
    {
        "Name": "snoopy"
    },
    {
        "Name": "soozier"
    },
    {
        "Name": "spectrum ail55by star series electric guitar  (spectrum ail55by)"
    },
    {
        "Name": "spohn global enterprises llc"
    },
    {
        "Name": "star wars episode vii"
    },
    {
        "Name": "stk"
    },
    {
        "Name": "storagemaniac"
    },
    {
        "Name": "stylemaster"
    },
    {
        "Name": "ten toes"
    },
    {
        "Name": "thetford"
    },
    {
        "Name": "totlogic by logic product group"
    },
    {
        "Name": "touch of eco"
    },
    {
        "Name": "traverse"
    },
    {
        "Name": "truecraftware"
    },
    {
        "Name": "turbo spa"
    },
    {
        "Name": "turcom (b00etjciqw)"
    },
    {
        "Name": "ultra sunsation pool mat color: metallic blue"
    },
    {
        "Name": "unik occassions"
    },
    {
        "Name": "unique"
    },
    {
        "Name": "venture horizon"
    },
    {
        "Name": "vidalia chop wizzard"
    },
    {
        "Name": "von duprin"
    },
    {
        "Name": "wagners bird seed"
    },
    {
        "Name": "waterbrick"
    },
    {
        "Name": "waypoint geographic"
    },
    {
        "Name": "wbm international"
    },
    {
        "Name": "wilson products"
    },
    {
        "Name": "wilson sports"
    },
    {
        "Name": "wisehands"
    },
    {
        "Name": "woof washer"
    },
    {
        "Name": "xcx  cvn"
    },
    {
        "Name": "yard force"
    },
    {
        "Name": "youcopia's"
    },
    {
        "Name": "zenith"
    },
    {
        "Name": "arctic king"
    },
    {
        "Name": "bar keepers"
    },
    {
        "Name": "bar keepers friend"
    },
    {
        "Name": "bedshe"
    },
    {
        "Name": "bedshe international co."
    },
    {
        "Name": "Bush Furniture"
    },
    {
        "Name": "bush industries inc."
    },
    {
        "Name": "equinox international"
    },
    {
        "Name": "evriholder"
    },
    {
        "Name": "fdgard"
    },
    {
        "Name": "funko pop"
    },
    {
        "Name": "funko pop!"
    },
    {
        "Name": "gameriza inc"
    },
    {
        "Name": "ibgard"
    },
    {
        "Name": "lapgear"
    },
    {
        "Name": "morphy richards"
    },
    {
        "Name": "nature's care"
    },
    {
        "Name": "newell"
    },
    {
        "Name": "premier chef"
    },
    {
        "Name": "scott fetzer"
    },
    {
        "Name": "urban shop"
    },
    {
        "Name": "watersnake"
    },
    {
        "Name": "workpro"
    },
    {
        "Name": "adventure plus"
    },
    {
        "Name": "buffalo range"
    },
    {
        "Name": "bundaloo"
    },
    {
        "Name": "cetyl m®"
    },
    {
        "Name": "corta-flx"
    },
    {
        "Name": "cribwrap"
    },
    {
        "Name": "culturelle"
    },
    {
        "Name": "doggie dailies"
    },
    {
        "Name": "dr. seuss"
    },
    {
        "Name": "drunk elephant"
    },
    {
        "Name": "elitra"
    },
    {
        "Name": "espree"
    },
    {
        "Name": "everglades"
    },
    {
        "Name": "four sigmatic"
    },
    {
        "Name": "georgette klinger"
    },
    {
        "Name": "great lakes"
    },
    {
        "Name": "gvieevol"
    },
    {
        "Name": "harris farms"
    },
    {
        "Name": "holm"
    },
    {
        "Name": "insane labz"
    },
    {
        "Name": "jam plastics"
    },
    {
        "Name": "macrolife naturals"
    },
    {
        "Name": "maharishi ayurveda"
    },
    {
        "Name": "mobi"
    },
    {
        "Name": "my best friend"
    },
    {
        "Name": "natural care"
    },
    {
        "Name": "nugo"
    },
    {
        "Name": "nutrawise"
    },
    {
        "Name": "ortho home"
    },
    {
        "Name": "out!"
    },
    {
        "Name": "performix"
    },
    {
        "Name": "petzlife"
    },
    {
        "Name": "picasso"
    },
    {
        "Name": "pouring masters"
    },
    {
        "Name": "psychotic gold"
    },
    {
        "Name": "quest"
    },
    {
        "Name": "raja's cup"
    },
    {
        "Name": "sammy and lou"
    },
    {
        "Name": "seseno"
    },
    {
        "Name": "shieldtec"
    },
    {
        "Name": "small world"
    },
    {
        "Name": "truefitt &amp; hill"
    },
    {
        "Name": "u.s. art supply"
    },
    {
        "Name": "us art supply"
    },
    {
        "Name": "victor allen"
    },
    {
        "Name": "vokodo"
    },
    {
        "Name": "vpk"
    },
    {
        "Name": "waverly"
    },
    {
        "Name": "youtheory"
    },
    {
        "Name": "zenoff"
    },
    {
        "Name": "zoguard"
    },
    {
        "Name": "15:00"
    },
    {
        "Name": "amold armor"
    },
    {
        "Name": "amoldarmor"
    },
    {
        "Name": "b00dao8fqo"
    },
    {
        "Name": "bertolli"
    },
    {
        "Name": "betterthanbouillon"
    },
    {
        "Name": "cheerios"
    },
    {
        "Name": "color scents"
    },
    {
        "Name": "crystalgeyser"
    },
    {
        "Name": "dales"
    },
    {
        "Name": "death wish coffee"
    },
    {
        "Name": "deathwishcoffee"
    },
    {
        "Name": "eucerin"
    },
    {
        "Name": "finding king"
    },
    {
        "Name": "findingking"
    },
    {
        "Name": "firstaidonly"
    },
    {
        "Name": "general mills"
    },
    {
        "Name": "gib cleaningtool"
    },
    {
        "Name": "gibcleaningtool"
    },
    {
        "Name": "glass plus"
    },
    {
        "Name": "glassplus"
    },
    {
        "Name": "home armor"
    },
    {
        "Name": "homearmor"
    },
    {
        "Name": "ingersoll rand"
    },
    {
        "Name": "jamie’s"
    },
    {
        "Name": "jolly rancher"
    },
    {
        "Name": "jolly rancher jello shot bundle"
    },
    {
        "Name": "js hanger"
    },
    {
        "Name": "ketch"
    },
    {
        "Name": "kinder joy"
    },
    {
        "Name": "kitkat"
    },
    {
        "Name": "krud kutter"
    },
    {
        "Name": "krudkutter"
    },
    {
        "Name": "la tourangelle"
    },
    {
        "Name": "laura ashley home"
    },
    {
        "Name": "lauraashleyhome"
    },
    {
        "Name": "lemonkind"
    },
    {
        "Name": "master lock"
    },
    {
        "Name": "master-lock"
    },
    {
        "Name": "mrclean"
    },
    {
        "Name": "natural way"
    },
    {
        "Name": "north states bird"
    },
    {
        "Name": "one plant"
    },
    {
        "Name": "panacea"
    },
    {
        "Name": "pine tree"
    },
    {
        "Name": "pinetree"
    },
    {
        "Name": "plato"
    },
    {
        "Name": "pokin"
    },
    {
        "Name": "pukka"
    },
    {
        "Name": "pukka herbs"
    },
    {
        "Name": "sanar naturals"
    },
    {
        "Name": "sheba store"
    },
    {
        "Name": "spam"
    },
    {
        "Name": "sunbeam"
    },
    {
        "Name": "true fitt"
    },
    {
        "Name": "truefitt"
    },
    {
        "Name": "upha"
    },
    {
        "Name": "urban accent"
    },
    {
        "Name": "urban accents"
    },
    {
        "Name": "village naturals therapy"
    },
    {
        "Name": "vitalproteins"
    },
    {
        "Name": "vorys"
    },
    {
        "Name": "wd-40"
    },
    {
        "Name": "wd40"
    },
    {
        "Name": "wombat"
    },
    {
        "Name": "zinsser"
    },
    {
        "Name": "zosi"
    },
    {
        "Name": "zosi store"
    },
    {
        "Name": "b07l68t17m"
    },
    {
        "Name": "beauty flower"
    },
    {
        "Name": "deep steep-me"
    },
    {
        "Name": "flower beauty-me"
    },
    {
        "Name": "palmer"
    },
    {
        "Name": "palmer's"
    },
    {
        "Name": "palmers"
    },
    {
        "Name": "purity products"
    },
    {
        "Name": "sara elizabeth"
    },
    {
        "Name": "sara elizabeth skincare"
    },
    {
        "Name": "black decker"
    },
    {
        "Name": "brach's"
    },
    {
        "Name": "brachs"
    },
    {
        "Name": "cocoa krispies"
    },
    {
        "Name": "kellog's"
    },
    {
        "Name": "kellogg's cocoa krispies"
    },
    {
        "Name": "nielsen"
    },
    {
        "Name": "test-brand1"
    },
    {
        "Name": "lindt"
    },
    {
        "Name": "magshion"
    },
    {
        "Name": "sekey"
    },
    {
        "Name": "brand1"
    },
    {
        "Name": "brand2"
    },
    {
        "Name": "brand3"
    },
    {
        "Name": "enzymedica health and personal care (including personal care applicances) - need letter and invoices"
    },
    {
        "Name": "garden of life - need letter and invoice"
    },
    {
        "Name": "now foods - need invoice and letter"
    },
    {
        "Name": "https://www.amazon.com/pyrex/b/ref=bl_dp_s_web_2599218011?ie=utf8&amp;node=2599218011&amp;field-lbr_"
    },
    {
        "Name": "3drose"
    },
    {
        "Name": "aden & kc cubs"
    },
    {
        "Name": "adm"
    },
    {
        "Name": "adrienne vittadini home"
    },
    {
        "Name": "adsystems"
    },
    {
        "Name": "advecta"
    },
    {
        "Name": "aerogarden"
    },
    {
        "Name": "alen"
    },
    {
        "Name": "alfapet"
    },
    {
        "Name": "anchor hocking"
    },
    {
        "Name": "antep rugs"
    },
    {
        "Name": "aqua ez"
    },
    {
        "Name": "aquajoe"
    },
    {
        "Name": "aries automotive"
    },
    {
        "Name": "austral lock"
    },
    {
        "Name": "axa"
    },
    {
        "Name": "b01env3uda"
    },
    {
        "Name": "baby bum"
    },
    {
        "Name": "baldr"
    },
    {
        "Name": "barluxe"
    },
    {
        "Name": "bedding by treasure2"
    },
    {
        "Name": "belmint"
    },
    {
        "Name": "belwares"
    },
    {
        "Name": "bentwood bassinet summer infant"
    },
    {
        "Name": "bird-x"
    },
    {
        "Name": "bixbee"
    },
    {
        "Name": "bon ami"
    },
    {
        "Name": "bragg's"
    },
    {
        "Name": "bricard"
    },
    {
        "Name": "briggs & stratton"
    },
    {
        "Name": "briton"
    },
    {
        "Name": "britzgo"
    },
    {
        "Name": "cisa"
    },
    {
        "Name": "clay alden home"
    },
    {
        "Name": "con-tact"
    },
    {
        "Name": "con-tact brand"
    },
    {
        "Name": "de'longhi"
    },
    {
        "Name": "deco 79"
    },
    {
        "Name": "dr. teal's"
    },
    {
        "Name": "dreamsweet"
    },
    {
        "Name": "dty"
    },
    {
        "Name": "eddie bauer home"
    },
    {
        "Name": "ellen degeneres"
    },
    {
        "Name": "exo terra"
    },
    {
        "Name": "fantasy field"
    },
    {
        "Name": "fibermarker"
    },
    {
        "Name": "firesense"
    },
    {
        "Name": "fsh"
    },
    {
        "Name": "fypo"
    },
    {
        "Name": "g &amp; f products"
    },
    {
        "Name": "gainsborough"
    },
    {
        "Name": "garden weasel"
    },
    {
        "Name": "glynn-johnson"
    },
    {
        "Name": "goobi"
    },
    {
        "Name": "good year"
    },
    {
        "Name": "great arrivals gift baskets"
    },
    {
        "Name": "h2o mop x5 as seen on tv"
    },
    {
        "Name": "home decorators collection"
    },
    {
        "Name": "humble crew"
    },
    {
        "Name": "icorer outdoors"
    },
    {
        "Name": "icustomrug"
    },
    {
        "Name": "idealbaby"
    },
    {
        "Name": "inaba foods usa"
    },
    {
        "Name": "inafer"
    },
    {
        "Name": "interflex"
    },
    {
        "Name": "isonas"
    },
    {
        "Name": "ito kilit"
    },
    {
        "Name": "jam paper"
    },
    {
        "Name": "jeremywell"
    },
    {
        "Name": "jml"
    },
    {
        "Name": "kiddycare"
    },
    {
        "Name": "kindermat"
    },
    {
        "Name": "kleen king"
    },
    {
        "Name": "kreg tools and home improvement"
    },
    {
        "Name": "kryllic"
    },
    {
        "Name": "lightning nuggets"
    },
    {
        "Name": "lillian rose"
    },
    {
        "Name": "llc"
    },
    {
        "Name": "lucky bums"
    },
    {
        "Name": "lucky bums outdoors"
    },
    {
        "Name": "luverne truck equipment"
    },
    {
        "Name": "macsports"
    },
    {
        "Name": "magic"
    },
    {
        "Name": "magnolia home"
    },
    {
        "Name": "mariell"
    },
    {
        "Name": "merimekko"
    },
    {
        "Name": "milre"
    },
    {
        "Name": "ming's mark"
    },
    {
        "Name": "mohawk"
    },
    {
        "Name": "mohawk home"
    },
    {
        "Name": "mrs. meyer's"
    },
    {
        "Name": "nex"
    },
    {
        "Name": "niagara"
    },
    {
        "Name": "nikki's baby"
    },
    {
        "Name": "nikki's baby blossom's"
    },
    {
        "Name": "nikki's baskets"
    },
    {
        "Name": "normbau"
    },
    {
        "Name": "nutribullet balance"
    },
    {
        "Name": "nutribullet®"
    },
    {
        "Name": "oneida"
    },
    {
        "Name": "p90x"
    },
    {
        "Name": "papababe"
    },
    {
        "Name": "patiosense"
    },
    {
        "Name": "pet4fun"
    },
    {
        "Name": "playz"
    },
    {
        "Name": "poo-pourri"
    },
    {
        "Name": "porter cable"
    },
    {
        "Name": "proven winners"
    },
    {
        "Name": "pure comfort"
    },
    {
        "Name": "putwo"
    },
    {
        "Name": "qmi"
    },
    {
        "Name": "republic"
    },
    {
        "Name": "round up"
    },
    {
        "Name": "sc products"
    },
    {
        "Name": "scandinavian child product"
    },
    {
        "Name": "school specialty"
    },
    {
        "Name": "scott's"
    },
    {
        "Name": "sei"
    },
    {
        "Name": "shoeslotz"
    },
    {
        "Name": "simons voss"
    },
    {
        "Name": "southern enterprises"
    },
    {
        "Name": "spectrum ail55by star series electric guitar"
    },
    {
        "Name": "standard process"
    },
    {
        "Name": "steelcraft"
    },
    {
        "Name": "sunbum"
    },
    {
        "Name": "sunjoe"
    },
    {
        "Name": "tanglefoot"
    },
    {
        "Name": "tech"
    },
    {
        "Name": "tech ent"
    },
    {
        "Name": "tgp"
    },
    {
        "Name": "the crew"
    },
    {
        "Name": "the crew furniture"
    },
    {
        "Name": "the shade & shutter factory"
    },
    {
        "Name": "tommy bahama home"
    },
    {
        "Name": "trelock"
    },
    {
        "Name": "verawang"
    },
    {
        "Name": "vip products"
    },
    {
        "Name": "welch's"
    },
    {
        "Name": "xcx cvn"
    },
    {
        "Name": "zero international"
    },
    {
        "Name": "bare home"
    },
    {
        "Name": "barretlgq"
    },
    {
        "Name": "bed bug blocker"
    },
    {
        "Name": "bottle pros"
    },
    {
        "Name": "bottlepros"
    },
    {
        "Name": "cloud/ten"
    },
    {
        "Name": "formosa covers"
    },
    {
        "Name": "i-health"
    },
    {
        "Name": "ihealth"
    },
    {
        "Name": "ilia beauty"
    },
    {
        "Name": "nifty products"
    },
    {
        "Name": "pura stainless"
    },
    {
        "Name": "softsoap"
    },
    {
        "Name": "vellux"
    },
    {
        "Name": "better homes and garden"
    },
    {
        "Name": "good'n'fun"
    },
    {
        "Name": "sunniland"
    },
    {
        "Name": "dymatize nutrition"
    },
    {
        "Name": "daway"
    },
    {
        "Name": "lakanto"
    },
    {
        "Name": "remember this amazon gated and restricted brand list is always being updated so please bookmark this"
    },
    {
        "Name": "the list below contains brands and manufacturers that amazon sellers have told us caused them proble"
    },
    {
        "Name": "innovative technology"
    },
    {
        "Name": "lightshare"
    },
    {
        "Name": "pelican"
    },
    {
        "Name": "slim fast"
    },
    {
        "Name": "sunny health"
    },
    {
        "Name": "victrola"
    },
    {
        "Name": "miracle gro"
    },
    {
        "Name": "toysopoly"
    },
    {
        "Name": "Hurricane Products"
    },
    {
        "Name": "ann willams group"
    },
    {
        "Name": "betterbuds"
    },
    {
        "Name": "brush furniture (brush industries)"
    },
    {
        "Name": "disney/pixar®"
    },
    {
        "Name": "freshware ( freshware meal prep containers)"
    },
    {
        "Name": "gaintex"
    },
    {
        "Name": "hotel spa/hotelspa"
    },
    {
        "Name": "hurricane/hurricane products"
    },
    {
        "Name": "implus footcare"
    },
    {
        "Name": "jasco product"
    },
    {
        "Name": "kona - nickle's arcade"
    },
    {
        "Name": "muscle tech"
    },
    {
        "Name": "myselectsmart"
    },
    {
        "Name": "nickle's arcade"
    },
    {
        "Name": "nutrubullet superfood"
    },
    {
        "Name": "optimum nutrution"
    },
    {
        "Name": "oxo tol® perch™"
    },
    {
        "Name": "pefeceve"
    },
    {
        "Name": "revman"
    },
    {
        "Name": "st 710"
    },
    {
        "Name": "st lves"
    },
    {
        "Name": "subshine"
    },
    {
        "Name": "think fun store"
    },
    {
        "Name": "tt tutors"
    },
    {
        "Name": "victor allen's coffee"
    },
    {
        "Name": "visit the victor allen store"
    },
    {
        "Name": "glade"
    },
    {
        "Name": "skip hop bandana buddies soft activity toy"
    },
    {
        "Name": "jasco products"
    },
    {
        "Name": "implus footcare llc"
    },
    {
        "Name": "1MORE"
    },
    {
        "Name": "4moms"
    },
    {
        "Name": "AIRCARE"
    },
    {
        "Name": "Akinger"
    },
    {
        "Name": "Alpha Industries"
    },
    {
        "Name": "Amity Jack"
    },
    {
        "Name": "Amplixin"
    },
    {
        "Name": "Ancient Nutrition"
    },
    {
        "Name": "Anova"
    },
    {
        "Name": "Anova Culinary"
    },
    {
        "Name": "APEC Water Systems"
    },
    {
        "Name": "Arvazallia"
    },
    {
        "Name": "AudioQuest"
    },
    {
        "Name": "Awapuhi Wild Ginger"
    },
    {
        "Name": "Ayr"
    },
    {
        "Name": "Azalea Skye"
    },
    {
        "Name": "BLACK DIAMOND PIGMENTS"
    },
    {
        "Name": "BLACKHAWK"
    },
    {
        "Name": "Boldify"
    },
    {
        "Name": "Bonk Fit"
    },
    {
        "Name": "Botanic Hearth"
    },
    {
        "Name": "BSkinny Global"
    },
    {
        "Name": "Care Touch"
    },
    {
        "Name": "Case-Mate"
    },
    {
        "Name": "Casual Home"
    },
    {
        "Name": "ChoiceRefill"
    },
    {
        "Name": "Comfort Click"
    },
    {
        "Name": "Country Life"
    },
    {
        "Name": "COZYCUDDLES"
    },
    {
        "Name": "Creative Baby"
    },
    {
        "Name": "Crystal Star"
    },
    {
        "Name": "Defender"
    },
    {
        "Name": "Dog Pain Away"
    },
    {
        "Name": "Doolini Nature"
    },
    {
        "Name": "EC Technology"
    },
    {
        "Name": "Emarth"
    },
    {
        "Name": "Eu Natural"
    },
    {
        "Name": "Eva Naturals"
    },
    {
        "Name": "EzyAbsorb"
    },
    {
        "Name": "Fifine"
    },
    {
        "Name": "FineVine"
    },
    {
        "Name": "Flex Tape"
    },
    {
        "Name": "Foxbrim"
    },
    {
        "Name": "Foxbrim Naturals"
    },
    {
        "Name": "GKhair"
    },
    {
        "Name": "Hilife"
    },
    {
        "Name": "Kasa Smart"
    },
    {
        "Name": "Lander"
    },
    {
        "Name": "Ledger"
    },
    {
        "Name": "Liquid Ass"
    },
    {
        "Name": "LiveWell Labs Nutrition"
    },
    {
        "Name": "Marimekko"
    },
    {
        "Name": "Melaleuca"
    },
    {
        "Name": "Metabolic Nutrition"
    },
    {
        "Name": "NaturaPrime"
    },
    {
        "Name": "nextec"
    },
    {
        "Name": "NLU Products"
    },
    {
        "Name": "Nostalgia"
    },
    {
        "Name": "Nutrition Strength"
    },
    {
        "Name": "oofoos"
    },
    {
        "Name": "Opportuniteas"
    },
    {
        "Name": "Oxx Inc"
    },
    {
        "Name": "OZ Naturals"
    },
    {
        "Name": "Photive"
    },
    {
        "Name": "Precision Naturals"
    },
    {
        "Name": "Premium Nature"
    },
    {
        "Name": "Prevagen"
    },
    {
        "Name": "Prive"
    },
    {
        "Name": "Pro Lab"
    },
    {
        "Name": "ProLab"
    },
    {
        "Name": "Pure Micronutrients"
    },
    {
        "Name": "PureGear"
    },
    {
        "Name": "Recticare"
    },
    {
        "Name": "Sanicat"
    },
    {
        "Name": "Schizandu Organics"
    },
    {
        "Name": "Sealy"
    },
    {
        "Name": "Sebastian Professional"
    },
    {
        "Name": "Silver Miracles"
    },
    {
        "Name": "srichland"
    },
    {
        "Name": "Tamron"
    },
    {
        "Name": "TB Tbuymax"
    },
    {
        "Name": "test_brand"
    },
    {
        "Name": "test_brand1"
    },
    {
        "Name": "top4cus"
    },
    {
        "Name": "Topricin"
    },
    {
        "Name": "Topsville"
    },
    {
        "Name": "Uarter"
    },
    {
        "Name": "VitaBreeze"
    },
    {
        "Name": "Vive Precision"
    },
    {
        "Name": "VOLLUCK"
    },
    {
        "Name": "Weight Watchers"
    },
    {
        "Name": "YCCTEAM"
    },
    {
        "Name": "Youngblood"
    },
    {
        "Name": "zen natural"
    },
    {
        "Name": "Zeppoli"
    },
    {
        "Name": "23andme"
    },
    {
        "Name": "2k"
    },
    {
        "Name": "3doodler"
    },
    {
        "Name": "47"
    },
    {
        "Name": "7 watts"
    },
    {
        "Name": "a penny for your thoughts"
    },
    {
        "Name": "abba"
    },
    {
        "Name": "accu chek"
    },
    {
        "Name": "adorology"
    },
    {
        "Name": "aerolatte"
    },
    {
        "Name": "ag hair cosmetics"
    },
    {
        "Name": "agave healing oil"
    },
    {
        "Name": "air hogs"
    },
    {
        "Name": "akro-mils"
    },
    {
        "Name": "all things equal"
    },
    {
        "Name": "allstar innovations"
    },
    {
        "Name": "aloha medicinals"
    },
    {
        "Name": "aurora"
    },
    {
        "Name": "baby einstein"
    },
    {
        "Name": "betty crocker"
    },
    {
        "Name": "bioworld"
    },
    {
        "Name": "bob's red mill"
    },
    {
        "Name": "boiron"
    },
    {
        "Name": "boon"
    },
    {
        "Name": "bormioli rocco"
    },
    {
        "Name": "camco"
    },
    {
        "Name": "cardinal"
    },
    {
        "Name": "cucinapro"
    },
    {
        "Name": "dc comics"
    },
    {
        "Name": "demdaco"
    },
    {
        "Name": "depend"
    },
    {
        "Name": "dr. scholl's"
    },
    {
        "Name": "dynasty hardware"
    },
    {
        "Name": "educational insights"
    },
    {
        "Name": "elmer's"
    },
    {
        "Name": "fantasy flight games"
    },
    {
        "Name": "gdf studio"
    },
    {
        "Name": "gerber graduates"
    },
    {
        "Name": "glitzhome"
    },
    {
        "Name": "glominex"
    },
    {
        "Name": "halo"
    },
    {
        "Name": "hexbug"
    },
    {
        "Name": "hic harold import co."
    },
    {
        "Name": "imagination generation"
    },
    {
        "Name": "jimmy choo"
    },
    {
        "Name": "johnson's"
    },
    {
        "Name": "kids preferred"
    },
    {
        "Name": "kisses"
    },
    {
        "Name": "kitty city"
    },
    {
        "Name": "knock knock"
    },
    {
        "Name": "lambs & ivy"
    },
    {
        "Name": "lenny & larry's"
    },
    {
        "Name": "little live pets"
    },
    {
        "Name": "littlearth"
    },
    {
        "Name": "mayfair games"
    },
    {
        "Name": "midwest homes for pets"
    },
    {
        "Name": "mr. heater"
    },
    {
        "Name": "National Geographic"
    },
    {
        "Name": "natural vitality"
    },
    {
        "Name": "neat solutions"
    },
    {
        "Name": "ozeri"
    },
    {
        "Name": "parker"
    },
    {
        "Name": "petit collage"
    },
    {
        "Name": "premier protein"
    },
    {
        "Name": "pressman"
    },
    {
        "Name": "primitives by kathy"
    },
    {
        "Name": "rephresh"
    },
    {
        "Name": "ritz"
    },
    {
        "Name": "schwinn"
    },
    {
        "Name": "schylling"
    },
    {
        "Name": "Seville Classics"
    },
    {
        "Name": "Sterilite"
    },
    {
        "Name": "suave"
    },
    {
        "Name": "tazo"
    },
    {
        "Name": "tiny love"
    },
    {
        "Name": "univen"
    },
    {
        "Name": "usaopoly"
    },
    {
        "Name": "victorinox"
    },
    {
        "Name": "vitafusion"
    },
    {
        "Name": "wellness natural pet food"
    },
    {
        "Name": "woolino"
    },
    {
        "Name": "zwilling j.a. henckels"
    },
    {
        "Name": "Costzon"
    },
    {
        "Name": "Able Life"
    },
    {
        "Name": "FITUEYES"
    },
    {
        "Name": "fresh baby"
    },
    {
        "Name": "Goplus"
    },
    {
        "Name": "goujxcy"
    },
    {
        "Name": "greendale home fashions"
    },
    {
        "Name": "inaba"
    },
    {
        "Name": "optoma"
    },
    {
        "Name": "Qaba"
    },
    {
        "Name": "rosenice"
    },
    {
        "Name": "sorbus"
    },
    {
        "Name": "tadpoles"
    },
    {
        "Name": "Tangkula"
    },
    {
        "Name": "timex"
    },
    {
        "Name": "xspec"
    },
    {
        "Name": "Brentwood Home"
    },
    {
        "Name": "Fairtex"
    },
    {
        "Name": "South Shore"
    },
    {
        "Name": "WE Furniture"
    },
    {
        "Name": "hersheys"
    },
    {
        "Name": "audio-technica"
    },
    {
        "Name": "Garden Winds"
    },
    {
        "Name": "Hotel Spa"
    },
    {
        "Name": "deltran"
    },
    {
        "Name": "Vitamix "
    },
    {
        "Name": "Yookidoo "
    },
    {
        "Name": "berenguer"
    },
    {
        "Name": "kohler engine"
    },
    {
        "Name": "petgoods"
    },
    {
        "Name": "college licensing"
    },
    {
        "Name": "plushland"
    },
    {
        "Name": "mcnile"
    },
    {
        "Name": "klein tools"
    },
    {
        "Name": "all american collection"
    },
    {
        "Name": "find back"
    },
    {
        "Name": "denta-pro"
    },
    {
        "Name": "biofreeze"
    },
    {
        "Name": "the great american hanger"
    },
    {
        "Name": "allergy research"
    },
    {
        "Name": "nutricology"
    },
    {
        "Name": "optimox"
    },
    {
        "Name": "kick foods"
    },
    {
        "Name": "scotts miracle-gro"
    },
    {
        "Name": "truefitt & hill"
    },
    {
        "Name": "jam plastics & envelope"
    },
    {
        "Name": "SKLZ"
    },
    {
        "Name": "roommates wall decals"
    },
    {
        "Name": "eo"
    },
    {
        "Name": "essential oils"
    },
    {
        "Name": "everyone"
    },
    {
        "Name": "Furinno"
    },
    {
        "Name": "mail boss"
    },
    {
        "Name": "church & dwight co."
    },
    {
        "Name": "cordinate"
    },
    {
        "Name": "timeless skin care"
    },
    {
        "Name": "annmarie skin care"
    },
    {
        "Name": "Petsafe"
    },
    {
        "Name": "bosley"
    },
    {
        "Name": "Kreg"
    },
    {
        "Name": "rene furterer"
    },
    {
        "Name": "college kitchen collection"
    },
    {
        "Name": "metabo"
    },
    {
        "Name": "lsu tigers"
    },
    {
        "Name": "boise state broncos"
    },
    {
        "Name": "kenner"
    },
    {
        "Name": "avene"
    },
    {
        "Name": "glamorise"
    },
    {
        "Name": "mcarthur golf"
    },
    {
        "Name": "stabila"
    },
    {
        "Name": "durable foil"
    },
    {
        "Name": "olyphan"
    },
    {
        "Name": "mark nason"
    },
    {
        "Name": "chicka-d"
    },
    {
        "Name": "madden girl"
    },
    {
        "Name": "fabrique innovations"
    },
    {
        "Name": "victory tailgate"
    },
    {
        "Name": "antigua"
    },
    {
        "Name": "icanvas"
    },
    {
        "Name": "alex and ani"
    },
    {
        "Name": "pam grace creations"
    },
    {
        "Name": "jack rogers"
    },
    {
        "Name": "pressbox"
    },
    {
        "Name": "mojo licensing"
    },
    {
        "Name": "authentic street signs"
    },
    {
        "Name": "wonderwink"
    },
    {
        "Name": "royce apparel"
    },
    {
        "Name": "wise"
    },
    {
        "Name": "bottle skinz"
    }
]