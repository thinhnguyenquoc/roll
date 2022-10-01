const axios = require('axios');
const request = require('request')
const fs = require('fs')
// 414689
// Login : nguyenthuytrang2304@gmail.com
// Password : LISKciUsxuZW8jtaa
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let path = 'cf.txt'
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

let cf_a = {
    bid: 1e-8,
    min: 1e-8,
    save: 1e-8,
    save2: 0,
    save3: 0,
    win: 'w',
    balance: 0,
    count: 0,
    countl: 0,
    countll: 0,
    countw: 0,
    countww: 0,
    url: 'hi',
    a: 2,
    rl: 0,
    rl1: 0,
    rl2: 0,
    bi: 0,
    balances: [0, 0, 0, 0],
    oldr: 0,
    bet: 1,
    guard: 0,
    total: 0,
    oldl: 0,
    play: 0,
    window: 5,
    up: 0
};

var cf = null;

let init = () => {
    let data = loadData(path)
    console.log(data)
    if (data)
        cf = JSON.parse(data)
    else {
        cf = JSON.parse(JSON.stringify(cf_a))
    }
    rollDice()
    roll()
    roll1()
    roll2()
    roll3()
    setInterval(() => {
        roll()
        roll1()
        roll2()
        roll3()
    }, 5 * 60 * 1000)
}

let rollDice = async () => {
    try {
        let providers = cf.balances.length
        if (cf.bi > 5) {
            // check empty balance
            if (cf.count > providers) {
                let flag = 0
                while (true && cf.bi % 500 == 0) {
                    if (cf.balances[cf.count % providers] < cf.bid) {
                        if (Math.random() < 0.25)
                            break
                        cf.count++
                    }
                    else
                        break
                    if (flag > providers * 2) {
                        console.log('all is empty')
                        await sleep(60 * 1000)
                        cf.save = cf.bid = cf.min
                        cf.rl = 0
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
                await sleep(100 * 1000)
            }
        }
        else {
            if (cf.oldr > 20) {
                console.log('all is empty a')
                await sleep(60 * 1000)
                cf.bid = cf.min
                cf.rl = 0
                await rollDice()
                return
            }
        }
        let token = ''
        let res = ''
        let url = ''
        let cookie = ''

        if (cf.count % providers == 1) {
            // nqt919
            // token = 'mkcaUXUEawCG'
            token = 'jxSbAHdp58di'
            url = `https://freebitco.in/cgi-bin/bet.pl?m=${cf.url}&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${cf.a}&rand=${Math.random()}&csrf_token=${token}`
            cookie = '__cfduid=dabd434669599a149e428a25b67d518341601869469; _ga=GA1.2.1032445995.1601869470; have_account=1; _gid=GA1.2.957931152.1602416368; hide_push_msg=1; last_play=1602483825; csrf_token=jxSbAHdp58di; _gat=1; btc_address=1JZHAnxVbkXbsmtSz39CMFAsqryXVZT67B; password=18e5276110fc5e906d47e30842bfb448b5e039079f67140bf178b5afd068b6c7; login_auth=ea93c3147b2c1983c12e1dd78e619c5730ab935eed52bbb541dbceecda124bf0',
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
                            cookie: cookie,
                            referer: 'https://freebitco.in/?op=home',
                            'sec-fetch-dest': 'empty',
                            'sec-fetch-mode': 'cors',
                            'sec-fetch-site': 'same-origin',
                            'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
                            'x-csrf-token': token,
                            'x-requested-with': 'XMLHttpRequest'
                        },
                        timeout: 4000
                    }
                )


        }
        else if (cf.count % providers == 8) {
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
                    timeout: 4000
                }
            )
        }
        else if (cf.count % providers == 3) {
            //nqt909
            token = 'cEsGugpPYFIm'
            url = `https://freebitco.in/cgi-bin/bet.pl?m=${cf.url}&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${cf.a}&rand=${Math.random()}&csrf_token=${token}`
            cookie = '_ga=GA1.2.458390613.1595837609; have_account=1; __cfduid=df0f547677f1b89b6a77f629a34a5e86e1601023232; login_auth=c7d72750786d38209141cc23d3d6642d60d80759168be2c44b616030ecb77964; btc_address=1ACAYAjGjhVTruS2UijPjLoEYtj3uY37pw; password=03bc3ff21b22459777a91080c2ecbbeb6730e3b59b126f26eab2145fa51c4446; _gid=GA1.2.1483357038.1602416380; hide_push_msg=1; last_play=1602492434; csrf_token=cEsGugpPYFIm; _gat=1'

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
                        cookie: cookie,
                        referer: 'https://freebitco.in/?op=home',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-origin',
                        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
                        'x-csrf-token': token,
                        'x-requested-with': 'XMLHttpRequest'
                    },
                    timeout: 4000
                }
            )
        }
        else if (cf.count % providers == 2) {
            //17
            token = 'Dvy7SWNdzqn0'
            url = `https://freebitco.in/cgi-bin/bet.pl?m=${cf.url}&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${cf.a}&rand=${Math.random()}&csrf_token=${token}`
            cookie = '_ga=GA1.2.62283238.1594791923; have_account=1; _gid=GA1.2.629548582.1619834469; hide_push_msg=1; csrf_token=Dvy7SWNdzqn0; last_play=1621246290; login_auth=uY1qcqLKtu4tNqx1JWCGx4nP; btc_address=17HWYXqQFWKE1rjkmzdTR4v9UoBjibRdYg; password=2b5c6a202d15f82f99c612374f03971b6d0ff073cface1fadd28d69c42d21ffc; mobile=1'

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
                        cookie: cookie,
                        referer: 'https://freebitco.in/?op=home',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-origin',
                        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
                        'x-csrf-token': token,
                        'x-requested-with': 'XMLHttpRequest'
                    },
                    timeout: 4000
                }
            )
        }
        else if (cf.count % providers == 7) {
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
                    timeout: 4000
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
                    timeout: 4000
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
                    timeout: 4000
                }
            )
        }
        else if (cf.count % providers == 4) {
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
                    timeout: 4000
                }
            )
        }
        else if (cf.count % providers == 0) {
            //nqt90@yahoo
            token = '8a5fcyFHmCVa'
            url = `https://freebitco.in/cgi-bin/bet.pl?m=${cf.url}&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${cf.a}&rand=${Math.random()}&csrf_token=${token}`
            cookie = "_ga=GA1.2.397726297.1636933959; have_account=1; cookieconsent_dismissed=yes; tag=undefined; _hjSessionUser_1618870=eyJpZCI6ImU2MDIyOTRkLTliYTItNWQzYy04N2Y3LTJlYTNiYjEwOWMwNiIsImNyZWF0ZWQiOjE2NDE5MTMwNTIxNDAsImV4aXN0aW5nIjpmYWxzZX0=; _gid=GA1.2.1098726234.1645923687; hide_push_msg=1; csrf_token=8a5fcyFHmCVa; last_play=1647834801; btc_address=19meBVUKr82UxR2yo2ScFxcCD8mtkNdzcC; fbtc_userid=18345773; fbtc_session=AW4ddnCjmBFA9s7nD1kN1hmK; login_auth=1n9gku34pEn8pBY9stnR1g0o; password=ef240be36bbe80a6789243f6508e84bc4794f1a85a41130c0a57f1b2dfd55cba; _gat_gtag_UA_44778688_1=1"
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
                        cookie: cookie,
                        referer: 'https://freebitco.in/?op=home',
                        'sec-fetch-dest': 'empty',
                        'sec-fetch-mode': 'cors',
                        'sec-fetch-site': 'same-origin',
                        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
                        'x-csrf-token': token,
                        'x-requested-with': 'XMLHttpRequest'
                    },
                    timeout: 4000
                }
            )
        }


        if (res.data) {
            cf.count++
            let data = res.data
	 
            var params = data.split(':');
            if ((parseFloat(params[18]) / 1e-8).toFixed(0) > 1000) {
                await axios.get(`https://freebitco.in/?op=credit_deposit_bonus&amount=0.00001&csrf_token=${token}`,
                    {
                        headers: {
                            authority: 'freebitco.in',
                            method: 'GET',
                            path: url,
                            scheme: 'https',
                            accept: '*/*',
                            'accept-encoding': '*',
                            'accept-language': 'en-US,en;q=0.9',
                            cookie: cookie,
                            referer: 'https://freebitco.in/?op=home',
                            'sec-fetch-dest': 'empty',
                            'sec-fetch-mode': 'cors',
                            'sec-fetch-site': 'same-origin',
                            'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
                            'x-csrf-token': token,
                            'x-requested-with': 'XMLHttpRequest'
                        },
                        timeout: 4000
                    });
            }
            let currentBalance = parseFloat(params[23]) + parseFloat(params[21])
            cf.win = params[1]
            if (cf.win != 'w' && cf.win != 'l') {
		console.log(res.data, res.status)
                cf.oldr++
                sleep(10000)
                cf.balances[(cf.count - 1) % cf.balances.length] = 0
                return rollDice()
            }
            cf.oldr = 0
            cf.balances[(cf.count - 1) % cf.balances.length] = currentBalance
            let profit = params[23] == 0 ? parseFloat(params[21]) - parseFloat(params[20]) : parseFloat(params[23]) - parseFloat(params[22])
            cf.rl += profit
            total = cf.balances.reduce((a, b) => a + b, 0)
            cf.total = total
            cf.oldl++
            if (parseInt(params[2]) >= 4750 && parseInt(params[2]) <= 5250) {
                cf.countl--
                cf.rl += cf.bid * cf.window/100
                if(cf.save2 <= cf.window){
                    cf.save *= 2
		    if(cf.window > 5)	
                    	cf.window -= 2
		    else 
			cf.window = 5
                }
                cf.save2 = 0
            }
            cf.save2++
            if (cf.win == 'w') {
                cf.countw++
            }
            else {
                cf.countl++
            }

            let sleepTime = parseInt(params[2])/7.5
            if(cf.save2 <= cf.window){
                cf.bid = cf.save
		if(cf.up == 1){
		    cf.window += 1
		    cf.up = 0
		}
            }
            else{
                // sleepTime = 0
                if(cf.save2 == cf.window + 1){
                    cf.save += cf.min * 1.5
                }
                if(cf.save2 == cf.window + 2 && cf.window < 10 && cf.up == 0){
		    cf.up = 1
                }    
                cf.bid = cf.save/5
            }

            if(cf.bid < cf.min){
                cf.bid = cf.min
            }

            if(cf.balance < cf.total){
                cf.save = cf.bid = cf.min
                cf.balance = cf.total
            }

            if ( cf.rl >= (cf.countw - cf.countl) * cf.min) {
                cf.save = cf.bid = cf.min
                cf.rl = (cf.countw - cf.countl) * cf.min
            }
            
            cf.bid = cf.min
            
            cf.bi++
            if (cf.bi < 10) {
                cf.guard = cf.total
                cf.save = cf.bid = cf.min
                cf.balance = cf.total
            }
            if (cf.bi % 20 == 0 ||

                cf.bi % 20 == 1 ||
                cf.bi % 20 == 2
                ||
                cf.bi % 20 == 3
            )
                console.table([{
                    index: cf.bi,
                    win: cf.win,
                    ccccc_bal: parseInt((currentBalance) / cf.min) + ' ' + (cf.count - 1) % cf.balances.length,
                    bid: parseInt(cf.bid / cf.min),
                    tt: parseInt(cf.balance / cf.min) + "  " + parseInt((cf.total - cf.play) / cf.min),
                    rl_cccc: (cf.rl / cf.min).toFixed(0) + " " + ((cf.total - cf.play - cf.guard) / cf.min).toFixed(0),
                    debt: (parseFloat(params[17]) / cf.min).toFixed(0),
                    double: (parseFloat(params[18]) / cf.min).toFixed(0)
                }])

            if (!cf.r) {
                storeData(cf, path)
                await sleep(sleepTime)
                await rollDice()
            }
            else {
                await sleep(parseInt(params[2])/5)
                // storeData(cf, path)
                await rollDice()
            }
        }
    }
    catch (e) {
        console.log('time out' + e)
        if (e.response) {
            console.log(e.response.data);
        }
        await sleep(10000)
        await rollDice()
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
        }

    });

    let reedem = `https://freebitco.in/?op=redeem_rewards&id=fp_bonus_100&points=&csrf_token=jxSbAHdp58di`

    var options2 = {
        url: reedem,
        method: 'GET',
        headers: headers,
    }
    request(options2, (error, response, body) => {
        // console.log(error, response);
    });
}

let roll1 = () => {
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
        }
    });

    let reedem = `https://freebitco.in/?op=redeem_rewards&id=fp_bonus_100&points=&csrf_token=cEsGugpPYFIm`

    var options2 = {
        url: reedem,
        method: 'GET',
        headers: headers,
    }
    request(options2, (error, response, body) => {
        // console.log(error, response);
    });
}

let roll2 = () => {
    var headers = {
        'authority': 'freebitco.in',
        'accept': '*/*',
        'x-csrf-token': 'Dvy7SWNdzqn0',
        'x-requested-with': 'XMLHttpRequest',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'origin': 'https://freebitco.in',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://freebitco.in/?op=home',
        'accept-language': 'en-US,en;q=0.9',
        cookie: '_ga=GA1.2.62283238.1594791923; have_account=1; _gid=GA1.2.629548582.1619834469; hide_push_msg=1; csrf_token=Dvy7SWNdzqn0; last_play=1621246290; login_auth=uY1qcqLKtu4tNqx1JWCGx4nP; btc_address=17HWYXqQFWKE1rjkmzdTR4v9UoBjibRdYg; password=2b5c6a202d15f82f99c612374f03971b6d0ff073cface1fadd28d69c42d21ffc; mobile=1'
    };

    var dataString = 'csrf_token=Dvy7SWNdzqn0&op=free_play&fingerprint=97d90830c715ca6308b6be46165fdc9b&client_seed=K3nOr7PEhMYHLday&fingerprint2=2696687637&pwc=0&b14a22546d68=1601869542%3A90b19d69362941b5b08491f7daa603aec1c2a7b37d4a98578a53014b3cd9fa08&16989970b19f=afbb12163f60a6b4a9cc369111b88b3fde1485a6ed83b8564639fcbb6e72e706';

    var options = {
        url: 'https://freebitco.in/',
        method: 'POST',
        headers: headers,
        body: dataString
    };

    request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    });

    let reedem = `https://freebitco.in/?op=redeem_rewards&id=fun_token_2&points=&csrf_token=Dvy7SWNdzqn0`

    var options2 = {
        url: reedem,
        method: 'GET',
        headers: headers,
    }
    request(options2, (error, response, body) => {
        // console.log(error, response);
    });
}

let roll3 = () => {
    var headers = {
        'authority': 'freebitco.in',
        'accept': '*/*',
        'x-csrf-token': 'jERWLFfJ3Htc',
        'x-requested-with': 'XMLHttpRequest',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'origin': 'https://freebitco.in',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-mode': 'cors',
        'sec-fetch-dest': 'empty',
        'referer': 'https://freebitco.in/?op=home',
        'accept-language': 'en-US,en;q=0.9',
        cookie: '_ga=GA1.2.397726297.1636933959; have_account=1; cookieconsent_dismissed=yes; tag=undefined; _hjSessionUser_1618870=eyJpZCI6ImU2MDIyOTRkLTliYTItNWQzYy04N2Y3LTJlYTNiYjEwOWMwNiIsImNyZWF0ZWQiOjE2NDE5MTMwNTIxNDAsImV4aXN0aW5nIjpmYWxzZX0=; _gid=GA1.2.1013950942.1657964531; csrf_token=jERWLFfJ3Htc; last_play=1658365784; hide_push_msg=1; btc_address=19meBVUKr82UxR2yo2ScFxcCD8mtkNdzcC; password=ef240be36bbe80a6789243f6508e84bc4794f1a85a41130c0a57f1b2dfd55cba; fbtc_userid=18345773; fbtc_session=6EIlIxZw4lq5Af05Ja7qRWZw; login_auth=k3YjFnbKbLIr3BJJYxAa8tqP; _gat_gtag_UA_44778688_1=1',
    };

    var dataString = 'csrf_token=jERWLFfJ3Htc&op=free_play&fingerprint=97d90830c715ca6308b6be46165fdc9b&client_seed=K3nOr7PEhMYHLday&fingerprint2=2696687637&pwc=1&b14a22546d68=1601869542%3A90b19d69362941b5b08491f7daa603aec1c2a7b37d4a98578a53014b3cd9fa08&16989970b19f=afbb12163f60a6b4a9cc369111b88b3fde1485a6ed83b8564639fcbb6e72e706&g_recaptcha_response=';

    var options = {
        url: 'https://freebitco.in/',
        method: 'POST',
        headers: headers,
        body: dataString
    };

    request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    });

    let reedem = `https://freebitco.in/?op=redeem_rewards&id=fp_bonus_100&points=&csrf_token=Bl9UDgkj3vP7`

    var options2 = {
        url: reedem,
        method: 'GET',
        headers: headers,
    }
    request(options2, (error, response, body) => {
        // console.log(error, response);
    });

}

init()
// roll()
// roll1()
// roll2()
// roll3()

