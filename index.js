const axios = require("axios");
const request = require("request");
const fs = require("fs");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let path = "cf.txt";
const storeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
};

const loadData = (path) => {
  try {
    return fs.readFileSync(path, "utf8");
  } catch (err) {
    return false;
  }
};

let cf_a = {
  bid: 1e-8,
  min: 1e-8,
  win: "w",
  balance: 0,
  count: 0,
  url: "hi",
  a: 2,
  rl: 0,
  balances: [0, 0, 0, 0],
  bet: 1,
  total: 0,
  delta: 1e-8,
};

var cf = null;

// nqt919
let token1 = "IPlAo6fs3X6c";
let cookie1 =
  "have_account=1; userid=2819475; last_play=1698995872; csrf_token=IPlAo6fs3X6c; _gid=GA1.2.1899082485.1699344919; _gat_gtag_UA_44778688_1=1; btc_address=1JZHAnxVbkXbsmtSz39CMFAsqryXVZT67B; password=e056920de2efdbe81ab18156a6887d080e987cc557a3f600acc47d035f67ff16; fbtc_userid=2829049; fbtc_session=T7sZTaXjg894rWD9VR2h0QDa; login_auth=S1FMsyo30X14MDRqddgGtGSt; _ga=GA1.2.1120139054.1697527157; mp_8920a80048e2c0ab5edd7839d1977ce2_mixpanel=%7B%22distinct_id%22%3A%20%2218b3c80d0af1a12-02ff7bdcf27436-18525634-13c680-18b3c80d0b02ab6%22%2C%22%24device_id%22%3A%20%2218b3c80d0af1a12-02ff7bdcf27436-18525634-13c680-18b3c80d0b02ab6%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Ffreebitco.in%2Fsignup%2F%3Fop%3Ds%22%2C%22%24initial_referring_domain%22%3A%20%22freebitco.in%22%7D; hide_push_msg=1; _ga_M568G97V6N=GS1.1.1699344918.133.1.1699344971.0.0.0";

// demo
let token2 = "Egn1x4G5tw0h";
let cookie2 =
  "have_account=1; userid=2819475; _gid=GA1.2.1899082485.1699344919; hide_push_msg=1; csrf_token=Egn1x4G5tw0h; btc_address=17HWYXqQFWKE1rjkmzdTR4v9UoBjibRdYg; password=b4c0ad89dcc982a3c0759434385d9026e6275c300d22d87f73531beac62be774; fbtc_userid=2819475; fbtc_session=XtPgeCT4HyZ4b0ezhuUCmaQO; login_auth=f03DAt2r63bE5jiYSSmGga8s; last_play=1699346589; _ga=GA1.2.1120139054.1697527157; mp_8920a80048e2c0ab5edd7839d1977ce2_mixpanel=%7B%22distinct_id%22%3A%20%2218b3c80d0af1a12-02ff7bdcf27436-18525634-13c680-18b3c80d0b02ab6%22%2C%22%24device_id%22%3A%20%2218b3c80d0af1a12-02ff7bdcf27436-18525634-13c680-18b3c80d0b02ab6%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Ffreebitco.in%2Fsignup%2F%3Fop%3Ds%22%2C%22%24initial_referring_domain%22%3A%20%22freebitco.in%22%7D; _ga_M568G97V6N=GS1.1.1699344918.133.1.1699346633.0.0.0";

// nqt909
let token3 = "u5zUwT7qAXhl";
let cookie3 =
  "have_account=1; userid=2819475; _gid=GA1.2.1899082485.1699344919; hide_push_msg=1; last_play=1699346589; csrf_token=u5zUwT7qAXhl; _gat_gtag_UA_44778688_1=1; btc_address=1ACAYAjGjhVTruS2UijPjLoEYtj3uY37pw; password=807a4b97a1e5941a150e7c135064680bc53b60743732d41d64e1aeac46c38554; fbtc_userid=8669636; fbtc_session=RVrAkpUpKY9EsxDV47Ud1eDP; login_auth=t9d5xcorGlUF48rZzLB3KXJE; _ga=GA1.2.1120139054.1697527157; mp_8920a80048e2c0ab5edd7839d1977ce2_mixpanel=%7B%22distinct_id%22%3A%20%2218b3c80d0af1a12-02ff7bdcf27436-18525634-13c680-18b3c80d0b02ab6%22%2C%22%24device_id%22%3A%20%2218b3c80d0af1a12-02ff7bdcf27436-18525634-13c680-18b3c80d0b02ab6%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Ffreebitco.in%2Fsignup%2F%3Fop%3Ds%22%2C%22%24initial_referring_domain%22%3A%20%22freebitco.in%22%7D; _ga_M568G97V6N=GS1.1.1699344918.133.1.1699346837.0.0.0";

// nqt90
let token4 = "808ArSVQ89U4";
let cookie4 =
  "have_account=1; userid=2819475; _gid=GA1.2.1899082485.1699344919; hide_push_msg=1; last_play=1699346589; csrf_token=808ArSVQ89U4; _gat_gtag_UA_44778688_1=1; btc_address=19meBVUKr82UxR2yo2ScFxcCD8mtkNdzcC; password=3fb7939b9772dc5cde50fce0b4a9e7366b91982ce2923b172c852ed12d0fc2f9; fbtc_userid=18345773; fbtc_session=FDcE9VkldFVa4NXAkhrEkwv4; login_auth=XuI9eGsFxjHQvYtPH5l7ZYvy; _ga=GA1.2.1120139054.1697527157; mp_8920a80048e2c0ab5edd7839d1977ce2_mixpanel=%7B%22distinct_id%22%3A%20%2218b3c80d0af1a12-02ff7bdcf27436-18525634-13c680-18b3c80d0b02ab6%22%2C%22%24device_id%22%3A%20%2218b3c80d0af1a12-02ff7bdcf27436-18525634-13c680-18b3c80d0b02ab6%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Ffreebitco.in%2Fsignup%2F%3Fop%3Ds%22%2C%22%24initial_referring_domain%22%3A%20%22freebitco.in%22%7D; _ga_M568G97V6N=GS1.1.1699344918.133.1.1699347100.0.0.0";

let init = () => {
  let data = loadData(path);
  console.log(data);
  if (data) cf = JSON.parse(data);
  else {
    cf = JSON.parse(JSON.stringify(cf_a));
  }
  rollDice();
  roll(token1, cookie1);
  roll(token2, cookie2);
  roll(token3, cookie3);
  roll(token4, cookie4);
  setInterval(() => {
    roll(token1, cookie1);
  }, 3 * 60 * 1000);
  setInterval(() => {
    roll(token2, cookie2);
  }, 3.5 * 60 * 1000);
  setInterval(() => {
    roll(token3, cookie3);
  }, 3.7 * 60 * 1000);
  setInterval(() => {
    roll(token4, cookie4);
  }, 4 * 60 * 1000);
};

let rollDice = async () => {
  try {
    let providers = cf.balances.length;
    let token = "";
    let res = "";
    let url = "";
    let cookie = "";

    if (cf.count % providers == 0) {
      // nqt919
      token = token1;
      url = `https://freebitco.in/cgi-bin/bet.pl?m=${
        cf.url
      }&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${
        cf.a
      }&rand=${Math.random()}&csrf_token=${token}`;
      cookie = cookie1;

      res = await axios.get(url, {
        headers: {
          authority: "freebitco.in",
          method: "GET",
          path: url,
          scheme: "https",
          accept: "*/*",
          "accept-encoding": "*",
          "accept-language": "en-US,en;q=0.9",
          cookie: cookie,
          referer: "https://freebitco.in/?op=home",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "user-agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
          "x-csrf-token": token,
          "x-requested-with": "XMLHttpRequest",
        },
        timeout: 4000,
      });
    } else if (cf.count % providers == 1) {
      // demo
      token = token2;
      url = `https://freebitco.in/cgi-bin/bet.pl?m=${
        cf.url
      }&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${
        cf.a
      }&rand=${Math.random()}&csrf_token=${token}`;
      cookie = cookie2;

      res = await axios.get(url, {
        headers: {
          authority: "freebitco.in",
          method: "GET",
          path: url,
          scheme: "https",
          accept: "*/*",
          "accept-encoding": "*",
          "accept-language": "en-US,en;q=0.9",
          cookie: cookie,
          referer: "https://freebitco.in/?op=home",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "user-agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
          "x-csrf-token": token,
          "x-requested-with": "XMLHttpRequest",
        },
        timeout: 4000,
      });
    } else if (cf.count % providers == 2) {
      // nqt909
      token = token3;
      url = `https://freebitco.in/cgi-bin/bet.pl?m=${
        cf.url
      }&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${
        cf.a
      }&rand=${Math.random()}&csrf_token=${token}`;
      cookie = cookie3;

      res = await axios.get(url, {
        headers: {
          authority: "freebitco.in",
          method: "GET",
          path: url,
          scheme: "https",
          accept: "*/*",
          "accept-encoding": "*",
          "accept-language": "en-US,en;q=0.9",
          cookie: cookie,
          referer: "https://freebitco.in/?op=home",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "user-agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
          "x-csrf-token": token,
          "x-requested-with": "XMLHttpRequest",
        },
        timeout: 4000,
      });
    } else if (cf.count % providers == 3) {
      // nqt90
      token = token4;
      url = `https://freebitco.in/cgi-bin/bet.pl?m=${
        cf.url
      }&client_seed=PrmXtJLWW3t7BWI8&jackpot=0&stake=${cf.bid}&multiplier=${
        cf.a
      }&rand=${Math.random()}&csrf_token=${token}`;
      cookie = cookie4;

      res = await axios.get(url, {
        headers: {
          authority: "freebitco.in",
          method: "GET",
          path: url,
          scheme: "https",
          accept: "*/*",
          "accept-encoding": "*",
          "accept-language": "en-US,en;q=0.9",
          cookie: cookie,
          referer: "https://freebitco.in/?op=home",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "user-agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
          "x-csrf-token": token,
          "x-requested-with": "XMLHttpRequest",
        },
        timeout: 4000,
      });
    }

    if (res.data) {
      cf.count++;
      let data = res.data;

      var params = data.split(":");
      if ((parseFloat(params[18]) / 1e-8).toFixed(0) >= 1000) {
        await axios.get(
          `https://freebitco.in/?op=credit_deposit_bonus&amount=0.00001&csrf_token=${token}`,
          {
            headers: {
              authority: "freebitco.in",
              method: "GET",
              path: url,
              scheme: "https",
              accept: "*/*",
              "accept-encoding": "*",
              "accept-language": "en-US,en;q=0.9",
              cookie: cookie,
              referer: "https://freebitco.in/?op=home",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "user-agent":
                "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
              "x-csrf-token": token,
              "x-requested-with": "XMLHttpRequest",
            },
            timeout: 4000,
          }
        );
      }
      let currentBalance = parseFloat(params[23]) + parseFloat(params[21]);
      cf.win = params[1];
      cf.balances[(cf.count - 1) % cf.balances.length] = currentBalance
        ? currentBalance
        : 0;
      let profit =
        params[23] == 0
          ? parseFloat(params[21]) - parseFloat(params[20])
          : parseFloat(params[23]) - parseFloat(params[22]);
      cf.rl += profit ? profit : 0;
      total = cf.balances.reduce((a, b) => a + b, 0);
      cf.total = total;

      if (cf.count % 40 == 0) {
        if (cf.rl < 0) cf.url = "lo";
        else cf.url = "hi";
      }

      if (cf.rl >= 0) {
        cf.bid = cf.min;
      } else {
        cf.bid += cf.min;
      }

      if (cf.count % 20 == 0)
        console.table([
          {
            count: cf.count,
            bid: parseInt(cf.bid / cf.min),
            tt: parseInt(cf.total / cf.min),
            rl_cccc: (cf.rl / cf.min).toFixed(0),
          },
        ]);

      if (!cf.r) {
        storeData(cf, path);
        await sleep(0);
        await rollDice();
      } else {
        await sleep(parseInt(params[2]) / 5);
        await rollDice();
      }
    }
  } catch (e) {
    console.log("time out" + e);
    if (e.response) {
      console.log(e.response.data);
    }
    await sleep(10000);
    await rollDice();
  }
};

let roll = (token, cookie) => {
  var headers = {
    authority: "freebitco.in",
    accept: "*/*",
    "x-csrf-token": token,
    "x-requested-with": "XMLHttpRequest",
    "user-agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    origin: "https://freebitco.in",
    "sec-fetch-site": "same-origin",
    "sec-fetch-mode": "cors",
    "sec-fetch-dest": "empty",
    referer: "https://freebitco.in/?op=home",
    "accept-language":
      "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5",
    cookie: cookie,
  };

  var dataString = `csrf_token=${token}&op=free_play&fingerprint=97d90830c715ca6308b6be46165fdc9b&client_seed=8ChXUqEVXxk7UAag&fingerprint2=4033457101&pwc=0&8e4f1d344ca1=1601855711%3Af06ae9bda58793a1bfedb60faa7501352ba7ceceeb1402ae05805227f52d38e7&30304de0fbae=048597782d10df0f509f33a2d85481c0c1a7911b6fc82abb882d0055b4c2151c`;

  var options = {
    url: "https://freebitco.in/",
    method: "POST",
    headers: headers,
    body: dataString,
  };

  request(options, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      console.log(body);
    }
  });

  let reedem = `https://freebitco.in/?op=redeem_rewards&id=fp_bonus_100&points=&csrf_token=${token}`;

  var options2 = {
    url: reedem,
    method: "GET",
    headers: headers,
  };
  request(options2, (error, response, body) => {
    // console.log(error, response);
  });
};

init();
