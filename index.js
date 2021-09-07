const axios = require('axios');

axios.defaults.timeout = 20000
// Login : nguyenthuytrang2304@gmail.com
// Password : LISKciUsxuZW8jta
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let cf_a = {
    bid: 1e-8,
    min: 1e-8,
    save: 1e-8,
    win: 'w',
    balance: 0,
    count: 0,
    countl: 0,
    countll: 0,
    countw: 0,
    url: 'hi',
    a: 2,
    rl: 0,
    rll: 0,
    bi: 0,
    bii: 0,
    balances: [0, 0, 0, 0, 0, 0, 0, 0],
    oldr: 0,
    bet: 0
};

let cf1 = null;

let init = () => {
    cf1 = JSON.parse(JSON.stringify(cf_a))
    rollDice(cf1)
}

let rollDice = async (cf) => {
    try {
        let providers = cf.balances.length
        if (cf.bi > 5) {
            // check empty balance
            if (cf.count > providers) {
                let flag = 0
                while (true) {
                    if (cf.balances[cf.count % providers] < cf.bid) {
                        if (Math.random() < 0.1)
                            break
                        cf.count++
                    }
                    else
                        break
                    if (flag > providers * 2) {
                        console.log('all is empty')
                        await sleep(60 * 1000)
                        cf.bid = cf.min
                        await rollDice(cf)
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
            if (cf.oldr > 20) {
                console.log('all is empty a')
                await sleep(60 * 1000)
                cf.bid = cf.min
                cf.oldr = 0
                await rollDice(cf)
                return
            }
        }
        let token = ''
        let res = ''
        let url = ''

        if (cf.count % providers == 0) {
            // nqt919
            // token = 'mkcaUXUEawCG'
            token = 'jxSbAHdp58di'
            url = `https://freebitco.in/cgi-bin/bet.pl?m=${cf.url}&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${cf.a}&rand=${Math.random()}&csrf_token=${token}`
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
            url = `https://freebitco.in/cgi-bin/bet.pl?m=${cf.url}&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${cf.a}&rand=${Math.random()}&csrf_token=${token}`
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
            url = `https://freebitco.in/cgi-bin/bet.pl?m=${cf.url}&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${cf.a}&rand=${Math.random()}&csrf_token=${token}`
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
            token = 'Dvy7SWNdzqn0'
            url = `https://freebitco.in/cgi-bin/bet.pl?m=${cf.url}&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${cf.a}&rand=${Math.random()}&csrf_token=${token}`
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
                        cookie: '_ga=GA1.2.62283238.1594791923; have_account=1; _gid=GA1.2.629548582.1619834469; hide_push_msg=1; csrf_token=Dvy7SWNdzqn0; last_play=1621246290; login_auth=uY1qcqLKtu4tNqx1JWCGx4nP; btc_address=17HWYXqQFWKE1rjkmzdTR4v9UoBjibRdYg; password=2b5c6a202d15f82f99c612374f03971b6d0ff073cface1fadd28d69c42d21ffc; mobile=1',
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
            url = `https://freebitco.in/cgi-bin/bet.pl?m=${cf.url}&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${cf.a}&rand=${Math.random()}&csrf_token=${token}`
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
        else if (cf.count % providers == 5) {
            //nqt987654321@gmail.com
            token = 'TcZ651iVcPKI'
            url = `https://freebitco.in/cgi-bin/bet.pl?m=${cf.url}&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${cf.a}&rand=${Math.random()}&csrf_token=${token}`
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
                        cookie: "have_account=1; _ga=GA1.2.937244618.1622458900; _gid=GA1.2.424544382.1624125646; hide_push_msg=1; csrf_token=TcZ651iVcPKI; btc_address=1H7cQZiZ9yk9QypY6NsATkhND879KPoeJx; password=602fc7f9e641144bc3afb82166a961312569515ce362e3f5e7d0fa2d371ce934; login_auth=4MIZUXGsguqHkQvlLUFr2IaK; last_play=1624981890",
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
        else if (cf.count % providers == 6) {
            //ac.quy
            token = 'TcZ651iVcPKI'
            url = `https://freebitco.in/cgi-bin/bet.pl?m=${cf.url}&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${cf.a}&rand=${Math.random()}&csrf_token=${token}`
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
                        cookie: "have_account=1; _ga=GA1.2.937244618.1622458900; _gid=GA1.2.424544382.1624125646; hide_push_msg=1; csrf_token=TcZ651iVcPKI; btc_address=136Pv4QxAb8LzzSncH9MhpnaMM88EnzLwA; password=6a8b8dbae6930e3071678553102fd177547ac9a31c43dbb2e7c33be0dcbe2a3a; login_auth=e2h81VTBTqmzWlG4Icv5Ne77; _gat_gtag_UA_44778688_1=1; last_play=1625013665",
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
        else if (cf.count % providers == 7) {
            //nqt900
            token = 'nxYml8jDQPZN'
            url = `https://freebitco.in/cgi-bin/bet.pl?m=${cf.url}&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${cf.a}&rand=${Math.random()}&csrf_token=${token}`
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
                        cookie: "have_account=1; _ga=GA1.2.937244618.1622458900; _gid=GA1.2.424544382.1624125646; hide_push_msg=1; last_play=1625488312; csrf_token=nxYml8jDQPZN; btc_address=17fSujUXGygPohFwMaAFSfCUam7WsoyXuy; password=c435781d85ad8280c9513eaff837c6b7ad36bd056b058f7d43d82367ef65fcd5; fbtc_userid=3431817; fbtc_session=SWwyTVQzhw0B8QWI1quEObla; login_auth=teioSE4QcJKsDEWLThCtWhii",
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
            var params = data.split(':');
            let currentBalance = parseFloat(params[23]) + parseFloat(params[21])
            cf.win = params[1]
            if (cf.win != 'w' && cf.win != 'l') {
                cf.oldr++
                sleep(1000)
                cf.balances[(cf.count - 1) % cf.balances.length] = 0
                return rollDice(cf)
            }
            cf.balances[(cf.count - 1) % cf.balances.length] = currentBalance
            let profit = params[23] == 0 ? parseFloat(params[21]) - parseFloat(params[20]) : parseFloat(params[23]) - parseFloat(params[22])
            cf.rl += profit
            cf.rll += profit
            let total = cf.balances.reduce((a, b) => a + b, 0)

            let time = 1000
            
            if (cf.rl >= 0) {
                cf.balance = total  
                if(cf.bid > cf.min)
                    cf.rl = 0
                cf.bid = cf.min 
            }

            if(cf.bi % 4 == 0){
                if(cf.countl > cf.countw){
                    cf.rl += cf.countl * cf.min
                    cf.bid += (Math.abs(cf.countl - cf.countw) - 1) * cf.bid
                }                
                cf.countw = cf.countl = 0
                cf.url = cf.url == 'hi' ? 'lo' : 'hi'
            }

            if (cf.win == 'w') {
                cf.countw++
            }
            else {
                cf.countl++
            }

            cf.oldr = 0
            cf.bi++

            console.table([{
                index: cf.bi,//i + "  " + cf.bi,
                win: cf.win,
                ccccc_bal: parseInt(currentBalance / cf.min) + ' ' + (cf.count - 1) % cf.balances.length,
                bid: parseInt(cf.bid * 1e8),
                tt: parseInt(cf.balance / cf.min) + "  " + parseInt(total / cf.min),
                rl_cccc: (cf.rl / cf.min).toFixed(0) + " " + (cf.rll / cf.min).toFixed(0)
            }])

            await sleep(time)
            if (!cf.r)
                await rollDice(cf)
        }
        else {
            await sleep(3000 * Math.random())
            // storeData(cf, path)
            await rollDice(cf)
        }
    }
    catch (e) {
        console.log('time out', e)
        // if (e.response) {
        //     console.log(e.response.data);
        // }
        await sleep(3000)
        await rollDice(cf)
    }
}

init()
