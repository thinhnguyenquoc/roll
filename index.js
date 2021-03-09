const axios = require('axios')
const fs = require('fs')
var request = require('request');

axios.defaults.timeout = 20000
// Login : nguyenthuytrang2304@gmail.com
// Password : LISKciUsxuZW8jta
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let path = 'cf.txt'
let cf_a = {
    bid: 1e-8,
    min: 1e-8,
    save: 1e-8,
    win: 'w',
    balance: 0,
    count: 0,
    url: 'hi',
    a: 2,
    rl: 0,
    bi: 1,
    balances: [0, 0, 0, 0, 0],
    oldr: 0,
    bii: 0
};

let cf = null;

const storeData = (data, path) => {
    try {
        fs.writeFileSync(path, JSON.stringify(data))
    } catch (err) {
        console.error(err)
    }
}

const loadData = (path) => {
    try {
        return fs.readFileSync(path, 'utf8')
    } catch (err) {
        return false
    }
}

let init = () => {
    let cfString = loadData(path)
    if (cfString) {
        cf = JSON.parse(cfString)
    }
    else
        cf = JSON.parse(JSON.stringify(cf_a))

    rollDice()
    roll()
    roll1()
    roll2()
    roll3()
    roll4()
    setInterval(() => {
        roll()
        roll1()
        roll2()
        roll3()
        roll4()
    }, 5 * 60 * 1000)
}

let rollDice = async () => {
    try {
        let providers = cf.balances.length
        if (cf.bi > 6) {
            // check empty balance
            if (cf.count > providers) {
                let flag = 0
                while (true) {
                    if (cf.balances[cf.count % providers] < cf.bid) {
                        cf.count++
                    }
                    else
                        break
                    if (flag > providers) {
                        console.log('all is empty')
                        await sleep(1200 * 1000)
                        await rollDice()
                        return
                    }
                    flag++
                }
            }
            // check over balance
            if (cf.oldr >= providers) {
                cf.oldr = 0
                console.log('over balance')
            }
        }
        else {
            if (cf.oldr > 50) {
                console.log('all is empty')
                await sleep(1200 * 1000)
                cf.bi = 0
                await rollDice()
                return
            }
        }
        let token = ''
        let res = ''
        let url = cf.url
        if (cf.count % providers == 0) {
            // nqt919
            // token = 'mkcaUXUEawCG'
            token = 'jxSbAHdp58di'
            url = `https://freebitco.in/cgi-bin/bet.pl?m=${url}&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${cf.a}&rand=${Math.random()}&csrf_token=${token}`
            res = await axios.get(url,
                {
                    headers: {
                        authority: 'freebitco.in',
                        method: 'GET',
                        path: url,
                        scheme: 'https',
                        accept: '*/*',
                        'accept-encoding': '*',
                        'accept-language': 'en-US,en;q=0.9',
                        // cookie: '_ga=GA1.2.458390613.1595837609; have_account=1; __cfduid=df0f547677f1b89b6a77f629a34a5e86e1601023232; login_auth=c7d72750786d38209141cc23d3d6642d60d80759168be2c44b616030ecb77964; btc_address=1ACAYAjGjhVTruS2UijPjLoEYtj3uY37pw; password=03bc3ff21b22459777a91080c2ecbbeb6730e3b59b126f26eab2145fa51c4446; _gid=GA1.2.1483357038.1602416380; hide_push_msg=1; last_play=1602483812; csrf_token=mkcaUXUEawCG; _gat=1',
                        cookie: '__cfduid=dabd434669599a149e428a25b67d518341601869469; _ga=GA1.2.1032445995.1601869470; have_account=1; _gid=GA1.2.957931152.1602416368; hide_push_msg=1; last_play=1602483825; csrf_token=jxSbAHdp58di; _gat=1; btc_address=1JZHAnxVbkXbsmtSz39CMFAsqryXVZT67B; password=18e5276110fc5e906d47e30842bfb448b5e039079f67140bf178b5afd068b6c7; login_auth=ea93c3147b2c1983c12e1dd78e619c5730ab935eed52bbb541dbceecda124bf0',
                        referer: 'https://freebitco.in/?op=home',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-origin',
                        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
                        'x-csrf-token': token,
                        'x-requested-with': 'XMLHttpRequest'
                    },
                    timeout: 20000
                }
            )
        }
        else if (cf.count % providers == 1) {
            // thuytrang
            token = 'PYeQawIAwULW'
            url = `https://freebitco.in/cgi-bin/bet.pl?m=${url}&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${cf.a}&rand=${Math.random()}&csrf_token=${token}`
            res = await axios.get(url,
                {
                    headers: {
                        authority: 'freebitco.in',
                        method: 'GET',
                        path: url,
                        scheme: 'https',
                        accept: '*/*',
                        'accept-encoding': '*',
                        'accept-language': 'en-US,en;q=0.9',
                        cookie: '__cfduid=d0674378b6a55cad247dfbf062a24cd5e1602484975; _ga=GA1.2.836943071.1602484977; _gid=GA1.2.817458213.1602484977; hide_push_msg=1; btc_address=13pnS7Z2qjmtaWnTo3mToDGoXFFYSduNUF; password=28e29e457ac7ab04c5629ab076d6028178955f6f577725a715ec162abec2ea12; have_account=1; login_auth=0ee38ab054624af50be42ee9cf1aedd0125fb7fde7b05435a3d3542e45372ce1; last_play=1602492277; csrf_token=PYeQawIAwULW; _gat=1',
                        referer: 'https://freebitco.in/?op=home',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-origin',
                        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
                        'x-csrf-token': token,
                        'x-requested-with': 'XMLHttpRequest'
                    },
                    timeout: 20000
                }
            )
        }
        else if (cf.count % providers == 2) {
            //nqt909
            token = 'cEsGugpPYFIm'
            url = `https://freebitco.in/cgi-bin/bet.pl?m=${url}&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${cf.a}&rand=${Math.random()}&csrf_token=${token}`
            res = await axios.get(url,
                {
                    headers: {
                        authority: 'freebitco.in',
                        method: 'GET',
                        path: url,
                        scheme: 'https',
                        accept: '*/*',
                        'accept-encoding': '*',
                        'accept-language': 'en-US,en;q=0.9',
                        cookie: '_ga=GA1.2.458390613.1595837609; have_account=1; __cfduid=df0f547677f1b89b6a77f629a34a5e86e1601023232; login_auth=c7d72750786d38209141cc23d3d6642d60d80759168be2c44b616030ecb77964; btc_address=1ACAYAjGjhVTruS2UijPjLoEYtj3uY37pw; password=03bc3ff21b22459777a91080c2ecbbeb6730e3b59b126f26eab2145fa51c4446; _gid=GA1.2.1483357038.1602416380; hide_push_msg=1; last_play=1602492434; csrf_token=cEsGugpPYFIm; _gat=1',
                        referer: 'https://freebitco.in/?op=home',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-origin',
                        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
                        'x-csrf-token': token,
                        'x-requested-with': 'XMLHttpRequest'
                    },
                    timeout: 20000
                }
            )
        }
        else if (cf.count % providers == 3) {
            //17
            token = 'us0i85wZzNgs'
            url = `https://freebitco.in/cgi-bin/bet.pl?m=${url}&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${cf.a}&rand=${Math.random()}&csrf_token=${token}`
            res = await axios.get(url,
                {
                    headers: {
                        authority: 'freebitco.in',
                        method: 'GET',
                        path: url,
                        scheme: 'https',
                        accept: '*/*',
                        'accept-encoding': '*',
                        'accept-language': 'en-US,en;q=0.9',
                        cookie: '__cfduid=d6bf0210c2676f1877d39bbc510d89fbd1602408321; have_account=1; _ga=GA1.2.1078209741.1602408565; _gid=GA1.2.2003473548.1602408565; login_auth=a48dd34c24f752a6a0ab15433a6a7501db65b5b6f62b87412fb9ff3532135a27; btc_address=17HWYXqQFWKE1rjkmzdTR4v9UoBjibRdYg; password=12b815757d7335de1f537846c873c55bc12c55326987c2b9b5a79076b03b0d45; last_play=1599463529; hide_push_msg=1; csrf_token=us0i85wZzNgs',
                        referer: 'https://freebitco.in/?op=home',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-origin',
                        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
                        'x-csrf-token': token,
                        'x-requested-with': 'XMLHttpRequest'
                    },
                    timeout: 20000
                }
            )
        }
        else if (cf.count % providers == 4) {
            //nqt929
            token = 'Bl9UDgkj3vP7'
            url = `https://freebitco.in/cgi-bin/bet.pl?m=${url}&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${cf.a}&rand=${Math.random()}&csrf_token=${token}`
            res = await axios.get(url,
                {
                    headers: {
                        authority: 'freebitco.in',
                        method: 'GET',
                        path: url,
                        scheme: 'https',
                        accept: '*/*',
                        'accept-encoding': '*',
                        'accept-language': 'en-US,en;q=0.9',
                        cookie: 'have_account=1; _ga=GA1.2.1078209741.1602408565; _gid=GA1.2.412481853.1604322156; last_play=1599463529; __cfduid=dc20daf768943fe50f0d7f423f26beb261605017013; hide_push_msg=1; btc_address=18NgKuq9Jz9DwKC2tkUkbb5AF2okXSpzPU; password=ad4df0ce42f63196b87bfdd229e35864dd600d5b3821d0363d92198363a6f3d7; login_auth=25aa532566d475e11c22cab1455da8ada93eafd6845655c2b2c9deb03727239c; default_captcha=recaptcha; csrf_token=Bl9UDgkj3vP7; _gat=1',
                        referer: 'https://freebitco.in/?op=home',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-origin',
                        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
                        'x-csrf-token': token,
                        'x-requested-with': 'XMLHttpRequest'
                    },
                    timeout: 20000
                }
            )
        }

        if (res.data) {
            cf.count++
            let data = res.data
            // console.log(data)
            var params = data.split(':');
            let currentBalance = params[23] != 0 ? params[23] : params[21]

            cf.win = params[1]
            if (cf.win != 'w' && cf.win != 'l') {
                cf.balances[(cf.count - 1) % cf.balances.length] = 0
                cf.oldr++
                return rollDice()
            }

            cf.balances[(cf.count - 1) % cf.balances.length] = parseFloat(currentBalance)
            let profit = params[23] == 0 ? parseFloat(params[21]) - parseFloat(params[20]) : parseFloat(params[23]) - parseFloat(params[22])
            cf.rl += profit
            let total = cf.balances.reduce((a, b) => a + b, 0)

            if(cf.balance - cf.min <= total){
                cf.balance = total 
                cf.bid = cf.min
                cf.rl = 0
            }

            cf.url = cf.url == 'hi' ? 'lo' : 'hi'
            if(cf.bi % 10 == 0){
                cf.bid *= 2
            }
            
            let time = 2000

            cf.bi++
            // cf.bii++
            // if(cf.bi % 10 == 0)
            console.table([{
                index: cf.bi,
                // subindex: cf.bii,
                win: cf.win,
                ccccc_bal: parseInt(currentBalance * 1e8) + ' ' + (cf.count - 1) % cf.balances.length,
                bid: parseInt(cf.bid * 1e8),
                tt: parseInt(cf.balance * 1e8) + "  " + parseInt(total * 1e8),
                rl_cccc: (cf.rl * 1e8).toFixed(0)
            }])
            
            await sleep(time)
            if(!cf.r)
            await rollDice()
        }
        else {
            await sleep(5000 * Math.random())
            storeData(cf, path)
            await rollDice()
        }
    }
    catch (e) {
        console.log('time out', e)
        if (e.response) {
            console.log(e.response.data);
        }
        await sleep(5000)
        await rollDice()
    }
}

updateBanalce = async () => {
    try {
        // nqt919
        // token = 'mkcaUXUEawCG'
        let token = 'jxSbAHdp58di'
        let url = `https://freebitco.in/cgi-bin/bet.pl?m=${url}&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${cf.a}&rand=${Math.random()}&csrf_token=${token}`
        let res = await axios.get(url,
            {
                headers: {
                    authority: 'freebitco.in',
                    method: 'GET',
                    path: url,
                    scheme: 'https',
                    accept: '*/*',
                    'accept-encoding': '*',
                    'accept-language': 'en-US,en;q=0.9',
                    // cookie: '_ga=GA1.2.458390613.1595837609; have_account=1; __cfduid=df0f547677f1b89b6a77f629a34a5e86e1601023232; login_auth=c7d72750786d38209141cc23d3d6642d60d80759168be2c44b616030ecb77964; btc_address=1ACAYAjGjhVTruS2UijPjLoEYtj3uY37pw; password=03bc3ff21b22459777a91080c2ecbbeb6730e3b59b126f26eab2145fa51c4446; _gid=GA1.2.1483357038.1602416380; hide_push_msg=1; last_play=1602483812; csrf_token=mkcaUXUEawCG; _gat=1',
                    cookie: '__cfduid=dabd434669599a149e428a25b67d518341601869469; _ga=GA1.2.1032445995.1601869470; have_account=1; _gid=GA1.2.957931152.1602416368; hide_push_msg=1; last_play=1602483825; csrf_token=jxSbAHdp58di; _gat=1; btc_address=1JZHAnxVbkXbsmtSz39CMFAsqryXVZT67B; password=18e5276110fc5e906d47e30842bfb448b5e039079f67140bf178b5afd068b6c7; login_auth=ea93c3147b2c1983c12e1dd78e619c5730ab935eed52bbb541dbceecda124bf0',
                    referer: 'https://freebitco.in/?op=home',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin',
                    'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
                    'x-csrf-token': token,
                    'x-requested-with': 'XMLHttpRequest'
                },
                timeout: 20000
            }
        )
        let data = res.data
        var params = data.split(':');
        let currentBalance = params[23] != 0 ? params[23] : params[21]
        cf.balance[0] = currentBalance

    }
    catch (e) {

    }
    try {
        // thuytrang
        let token = 'PYeQawIAwULW'
        let url = `https://freebitco.in/cgi-bin/bet.pl?m=${url}&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${cf.a}&rand=${Math.random()}&csrf_token=${token}`
        let res = await axios.get(url,
            {
                headers: {
                    authority: 'freebitco.in',
                    method: 'GET',
                    path: url,
                    scheme: 'https',
                    accept: '*/*',
                    'accept-encoding': '*',
                    'accept-language': 'en-US,en;q=0.9',
                    cookie: '__cfduid=d0674378b6a55cad247dfbf062a24cd5e1602484975; _ga=GA1.2.836943071.1602484977; _gid=GA1.2.817458213.1602484977; hide_push_msg=1; btc_address=13pnS7Z2qjmtaWnTo3mToDGoXFFYSduNUF; password=28e29e457ac7ab04c5629ab076d6028178955f6f577725a715ec162abec2ea12; have_account=1; login_auth=0ee38ab054624af50be42ee9cf1aedd0125fb7fde7b05435a3d3542e45372ce1; last_play=1602492277; csrf_token=PYeQawIAwULW; _gat=1',
                    referer: 'https://freebitco.in/?op=home',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin',
                    'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
                    'x-csrf-token': token,
                    'x-requested-with': 'XMLHttpRequest'
                },
                timeout: 20000
            }
        )
        let data = res.data
        var params = data.split(':');
        let currentBalance = params[23] != 0 ? params[23] : params[21]
        cf.balance[1] = currentBalance

    }
    catch (e) {

    }
    try {
        //nqt909
        let token = 'cEsGugpPYFIm'
        let url = `https://freebitco.in/cgi-bin/bet.pl?m=${url}&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${cf.a}&rand=${Math.random()}&csrf_token=${token}`
        let res = await axios.get(url,
            {
                headers: {
                    authority: 'freebitco.in',
                    method: 'GET',
                    path: url,
                    scheme: 'https',
                    accept: '*/*',
                    'accept-encoding': '*',
                    'accept-language': 'en-US,en;q=0.9',
                    cookie: '_ga=GA1.2.458390613.1595837609; have_account=1; __cfduid=df0f547677f1b89b6a77f629a34a5e86e1601023232; login_auth=c7d72750786d38209141cc23d3d6642d60d80759168be2c44b616030ecb77964; btc_address=1ACAYAjGjhVTruS2UijPjLoEYtj3uY37pw; password=03bc3ff21b22459777a91080c2ecbbeb6730e3b59b126f26eab2145fa51c4446; _gid=GA1.2.1483357038.1602416380; hide_push_msg=1; last_play=1602492434; csrf_token=cEsGugpPYFIm; _gat=1',
                    referer: 'https://freebitco.in/?op=home',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin',
                    'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
                    'x-csrf-token': token,
                    'x-requested-with': 'XMLHttpRequest'
                },
                timeout: 20000
            }
        )
        let data = res.data
        var params = data.split(':');
        let currentBalance = params[23] != 0 ? params[23] : params[21]
        cf.balance[2] = currentBalance
    }
    catch (e) {

    }
    try {
        //17
        let token = 'us0i85wZzNgs'
        let url = `https://freebitco.in/cgi-bin/bet.pl?m=${url}&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${cf.a}&rand=${Math.random()}&csrf_token=${token}`
        let res = await axios.get(url,
            {
                headers: {
                    authority: 'freebitco.in',
                    method: 'GET',
                    path: url,
                    scheme: 'https',
                    accept: '*/*',
                    'accept-encoding': '*',
                    'accept-language': 'en-US,en;q=0.9',
                    cookie: '__cfduid=d6bf0210c2676f1877d39bbc510d89fbd1602408321; have_account=1; _ga=GA1.2.1078209741.1602408565; _gid=GA1.2.2003473548.1602408565; login_auth=a48dd34c24f752a6a0ab15433a6a7501db65b5b6f62b87412fb9ff3532135a27; btc_address=17HWYXqQFWKE1rjkmzdTR4v9UoBjibRdYg; password=12b815757d7335de1f537846c873c55bc12c55326987c2b9b5a79076b03b0d45; last_play=1599463529; hide_push_msg=1; csrf_token=us0i85wZzNgs',
                    referer: 'https://freebitco.in/?op=home',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin',
                    'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
                    'x-csrf-token': token,
                    'x-requested-with': 'XMLHttpRequest'
                },
                timeout: 20000
            }
        )
        let data = res.data
        var params = data.split(':');
        let currentBalance = params[23] != 0 ? params[23] : params[21]
        cf.balance[3] = currentBalance
    }
    catch (e) {

    }
    try {
        //nqt929
        let token = 'Bl9UDgkj3vP7'
        let url = `https://freebitco.in/cgi-bin/bet.pl?m=${url}&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${cf.a}&rand=${Math.random()}&csrf_token=${token}`
        let res = await axios.get(url,
            {
                headers: {
                    authority: 'freebitco.in',
                    method: 'GET',
                    path: url,
                    scheme: 'https',
                    accept: '*/*',
                    'accept-encoding': '*',
                    'accept-language': 'en-US,en;q=0.9',
                    cookie: 'have_account=1; _ga=GA1.2.1078209741.1602408565; _gid=GA1.2.412481853.1604322156; last_play=1599463529; __cfduid=dc20daf768943fe50f0d7f423f26beb261605017013; hide_push_msg=1; btc_address=18NgKuq9Jz9DwKC2tkUkbb5AF2okXSpzPU; password=ad4df0ce42f63196b87bfdd229e35864dd600d5b3821d0363d92198363a6f3d7; login_auth=25aa532566d475e11c22cab1455da8ada93eafd6845655c2b2c9deb03727239c; default_captcha=recaptcha; csrf_token=Bl9UDgkj3vP7; _gat=1',
                    referer: 'https://freebitco.in/?op=home',
                    'sec-fetch-dest': 'empty',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-site': 'same-origin',
                    'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
                    'x-csrf-token': token,
                    'x-requested-with': 'XMLHttpRequest'
                },
                timeout: 20000
            }
        )
        let data = res.data
        var params = data.split(':');
        let currentBalance = params[23] != 0 ? params[23] : params[21]
        cf.balance[4] = currentBalance
    }
    catch (e) {

    }

}

let roll = () => {
    var headers = {
        'authority': 'freebitco.in',
        'accept': '*/*',
        'x-csrf-token': 'jxSbAHdp58di',
        'x-requested-with': 'XMLHttpRequest',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'origin': 'https://freebitco.in',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://freebitco.in/?op=home',
        'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
        cookie: '__cfduid=dabd434669599a149e428a25b67d518341601869469; _ga=GA1.2.1032445995.1601869470; have_account=1; _gid=GA1.2.957931152.1602416368; hide_push_msg=1; last_play=1602483825; csrf_token=jxSbAHdp58di; _gat=1; btc_address=1JZHAnxVbkXbsmtSz39CMFAsqryXVZT67B; password=18e5276110fc5e906d47e30842bfb448b5e039079f67140bf178b5afd068b6c7; login_auth=ea93c3147b2c1983c12e1dd78e619c5730ab935eed52bbb541dbceecda124bf0',
    };

    var dataString = 'csrf_token=jxSbAHdp58di&op=free_play&fingerprint=97d90830c715ca6308b6be46165fdc9b&client_seed=8ChXUqEVXxk7UAag&fingerprint2=4033457101&pwc=0&8e4f1d344ca1=1601855711%3Af06ae9bda58793a1bfedb60faa7501352ba7ceceeb1402ae05805227f52d38e7&30304de0fbae=048597782d10df0f509f33a2d85481c0c1a7911b6fc82abb882d0055b4c2151c';

    var options = {
        url: 'https://freebitco.in/',
        method: 'POST',
        headers: headers,
        body: dataString
    };

    request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            console.log(body);
            if (!cf.balances[0]) {
                cf.balances[0] = cf.min
            }
        }

    });
    axios.get('https://roll-1.herokuapp.com')
    axios.get('https://roll-2.herokuapp.com')
    axios.get('https://roll-3.herokuapp.com')
    axios.get('https://roll-4.herokuapp.com')
}

let roll1 = () => {
    var headers = {
        'authority': 'freebitco.in',
        'accept': '*/*',
        'x-csrf-token': 'PYeQawIAwULW',
        'x-requested-with': 'XMLHttpRequest',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'origin': 'https://freebitco.in',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://freebitco.in/?op=home',
        'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
        cookie: '__cfduid=d0674378b6a55cad247dfbf062a24cd5e1602484975; _ga=GA1.2.836943071.1602484977; _gid=GA1.2.817458213.1602484977; hide_push_msg=1; btc_address=13pnS7Z2qjmtaWnTo3mToDGoXFFYSduNUF; password=28e29e457ac7ab04c5629ab076d6028178955f6f577725a715ec162abec2ea12; have_account=1; login_auth=0ee38ab054624af50be42ee9cf1aedd0125fb7fde7b05435a3d3542e45372ce1; last_play=1602492277; csrf_token=PYeQawIAwULW; _gat=1',
    };

    var dataString = 'csrf_token=PYeQawIAwULW&op=free_play&fingerprint=97d90830c715ca6308b6be46165fdc9b&client_seed=T58X6K2FYnxt1exf&fingerprint2=4033457101&pwc=0&8e4f1d344ca1=1601855711%3Af06ae9bda58793a1bfedb60faa7501352ba7ceceeb1402ae05805227f52d38e7&30304de0fbae=048597782d10df0f509f33a2d85481c0c1a7911b6fc82abb882d0055b4c2151c';

    var options = {
        url: 'https://freebitco.in/',
        method: 'POST',
        headers: headers,
        body: dataString
    };

    request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            console.log(body);
            if (!cf.balances[1]) {
                cf.balances[1] = cf.min
            }
        }
    });
}

let roll2 = () => {
    var headers = {
        'authority': 'freebitco.in',
        'accept': '*/*',
        'x-csrf-token': 'cEsGugpPYFIm',
        'x-requested-with': 'XMLHttpRequest',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'origin': 'https://freebitco.in',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://freebitco.in/?op=home',
        'accept-language': 'en-US,en;q=0.9',
        cookie: '_ga=GA1.2.458390613.1595837609; have_account=1; __cfduid=df0f547677f1b89b6a77f629a34a5e86e1601023232; login_auth=c7d72750786d38209141cc23d3d6642d60d80759168be2c44b616030ecb77964; btc_address=1ACAYAjGjhVTruS2UijPjLoEYtj3uY37pw; password=03bc3ff21b22459777a91080c2ecbbeb6730e3b59b126f26eab2145fa51c4446; _gid=GA1.2.1483357038.1602416380; hide_push_msg=1; last_play=1602492434; csrf_token=cEsGugpPYFIm; _gat=1',
    };

    var dataString = 'csrf_token=cEsGugpPYFIm&op=free_play&fingerprint=97d90830c715ca6308b6be46165fdc9b&client_seed=K3nOr7PEhMYHLday&fingerprint2=2696687637&pwc=0&b14a22546d68=1601869542%3A90b19d69362941b5b08491f7daa603aec1c2a7b37d4a98578a53014b3cd9fa08&16989970b19f=afbb12163f60a6b4a9cc369111b88b3fde1485a6ed83b8564639fcbb6e72e706';

    var options = {
        url: 'https://freebitco.in/',
        method: 'POST',
        headers: headers,
        body: dataString
    };

    request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            console.log(body);
            if (!cf.balances[2]) {
                cf.balances[2] = cf.min
            }
        }
    });
}

let roll3 = () => {
    var headers = {
        'authority': 'freebitco.in',
        'accept': '*/*',
        'x-csrf-token': 'x9BT3SJhQAI2',
        'x-requested-with': 'XMLHttpRequest',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'origin': 'https://freebitco.in',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://freebitco.in/?op=home',
        'accept-language': 'en-US,en;q=0.9',
        cookie: '__cfduid=d6bf0210c2676f1877d39bbc510d89fbd1602408321; have_account=1; _ga=GA1.2.1078209741.1602408565; _gid=GA1.2.2003473548.1602408565; hide_push_msg=1; csrf_token=x9BT3SJhQAI2; last_play=1599463529; login_auth=a48dd34c24f752a6a0ab15433a6a7501db65b5b6f62b87412fb9ff3532135a27; btc_address=17HWYXqQFWKE1rjkmzdTR4v9UoBjibRdYg; password=12b815757d7335de1f537846c873c55bc12c55326987c2b9b5a79076b03b0d45; _gat=1',
    };

    var dataString = 'csrf_token=x9BT3SJhQAI2&op=free_play&fingerprint=97d90830c715ca6308b6be46165fdc9b&client_seed=K3nOr7PEhMYHLday&fingerprint2=2696687637&pwc=0&b14a22546d68=1601869542%3A90b19d69362941b5b08491f7daa603aec1c2a7b37d4a98578a53014b3cd9fa08&16989970b19f=afbb12163f60a6b4a9cc369111b88b3fde1485a6ed83b8564639fcbb6e72e706';

    var options = {
        url: 'https://freebitco.in/',
        method: 'POST',
        headers: headers,
        body: dataString
    };

    request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            console.log(body);
            if (!cf.balances[3]) {
                cf.balances[3] = cf.min
            }
        }
    });

    setTimeout(function () {
        updateBanalce()
    }, 10000)
}

let roll4 = () => {
    var headers = {
        'authority': 'freebitco.in',
        'accept': '*/*',
        'x-csrf-token': 'Bl9UDgkj3vP7',
        'x-requested-with': 'XMLHttpRequest',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'origin': 'https://freebitco.in',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://freebitco.in/?op=home',
        'accept-language': 'en-US,en;q=0.9',
        cookie: 'have_account=1; _ga=GA1.2.1078209741.1602408565; _gid=GA1.2.412481853.1604322156; last_play=1599463529; __cfduid=dc20daf768943fe50f0d7f423f26beb261605017013; hide_push_msg=1; btc_address=18NgKuq9Jz9DwKC2tkUkbb5AF2okXSpzPU; password=ad4df0ce42f63196b87bfdd229e35864dd600d5b3821d0363d92198363a6f3d7; login_auth=25aa532566d475e11c22cab1455da8ada93eafd6845655c2b2c9deb03727239c; default_captcha=recaptcha; csrf_token=Bl9UDgkj3vP7; _gat=1',
    };

    var dataString = 'csrf_token=Bl9UDgkj3vP7&op=free_play&fingerprint=97d90830c715ca6308b6be46165fdc9b&client_seed=K3nOr7PEhMYHLday&fingerprint2=2696687637&pwc=1&b14a22546d68=1601869542%3A90b19d69362941b5b08491f7daa603aec1c2a7b37d4a98578a53014b3cd9fa08&16989970b19f=afbb12163f60a6b4a9cc369111b88b3fde1485a6ed83b8564639fcbb6e72e706&g_recaptcha_response=';

    var options = {
        url: 'https://freebitco.in/',
        method: 'POST',
        headers: headers,
        body: dataString
    };

    request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            console.log(body);
            if (!cf.balances[4]) {
                cf.balances[4] = cf.min
            }
        }
    });
}
init()

const express = require('express');
const { safeStringify } = require('request/lib/helpers');
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send(`${JSON.stringify(cf)}`)
})

app.get('/min/:min', (req, res) => {
    cf.min = parseFloat(req.params.min)
    res.send(`${JSON.stringify(cf)}`)
})

app.get('/reset', (req, res) => {
    cf = JSON.parse(JSON.stringify(cf_a))
    // init()
    res.send(`${JSON.stringify(cf)}`)
})

app.get('/stop', (req, res) => {
    cf.r = 1
    res.send(`${JSON.stringify(cf)}`)
})

app.get('/total', (req, res) => {
    let total = cf.balances.reduce((a, b) => a + b, 0)
    res.send(`${JSON.stringify(total)}`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})