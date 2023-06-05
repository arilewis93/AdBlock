function FindProxyForURL(url, host) {
    var blocked_urls = [
        "*.deloplen.com*",
        "*porn.*",
        "*.porn*",
        "*doubleclick.net*",
        "*.ads.samba.tv*",
        "*.analytics.yahoo.com*",
        "*.stickyadstv.com*",
        "*.ironsrc.mobi*",
        "*.adnxs-simple.com*",
        "*.dtignite.com*",
        "*.minutemedia-prebid.com*",
        "*.googlesyndication.com*",
        "*.adservice.google.co.uk*",
        "*.adsninja.ca*",
        "*.bidmachine.io*",
        "*.dewrain.life*",
        "*.blueduckredapple.com*",
        "*.everestop.io*",
        "*.kochava.com*",
        "*.thecatmachine.com*",
        "*.buysellads.net*",
        "*.aloofvest.com*",
        "*.securepubads.g.doubleclick.net*",
        "*.erate.co.il*",
        "*.bounceexchange.com*",
        "*.cxm-bcn.publisher-services.amazon.dev*",
        "*.bouncex.net*",
        "*.hadronid.net*",
        "*.loopme.me*",
        "*.cdnbasket.net*",
        "*.creativecdn.com*",
        "*.a-mx.com*",
        "*.a-mo.net*",
        "*.wunderkind.co*",
        "*.getadmiral.com*",
        "*.primis.tech*",
        "*.scorecardresearch.com*",
        "*.viglink.com*",
        "*.scarfsmash.com*",
        "*.rtbhouse.com*",
        "*.kargo.com*",
        "*.ad.gt*",
        "*.cdnwidget.com*",
        "*.4dex.io*",
        "*.uidapi.com*",
        "*.yovoads.com*",
        "*.adpartner.pro*",
        "*.eikegolehem.com*",
        "*.tmwunlimited.com*",
        "*.994ot5rkpch2.com*",
        "*.supative-fetioner.icu*",
        "*.seconomic.club*",
        "*.depicturalki.club*",
        "*.idealmedia.io*",
        "*.otrwaram.com*",
        "*.credible.com*",
        "*.sf9yvla26s5t.com*",
        "*.otrwaram.com*",
        "*.srtaem.bar*",
        "*.ofgogoatan.com*",
        "*.foreignsec.club*",
        "*.agacelebir.com*",
        "*.goqubit.com*",
        "*.nextlove.com*",
        "*.richmeetbeautiful.com*",
        "*.securecloud-smrt.com*",
        "*.lmyiwaakn.com*",
        "*.procdncache.com*",
        "*.notestscredi.club*",
        "*.runative-syndicate.com*",
        "*.wpu.sh*",
        "*.feed-xml.com*",
        "*.chatango.com*",
        "*.agafurretor.com*",
        "*.soom.la*",
        "*.moxielinks.com*",
        "*.adschoom.com*",
        "*.propu.sh*",
        "*.adlucent.com*",
        "*.revjet.com*",
        "*.clickfuse.com*",
        "*.gromairt.net*",
        "*.edhappearer.info*",
        "*.ydrinkletremem.site*",
        "*.burningingpushes.info*",
        "*.megaphone.fm*",
        "*.rundomforapi.biz*",
        "*.absolor.com*",
        "*.zoupsudy.com*",
        "*.uberads.com*",
        "*.viatepigan.com*",
        "*.neaintrolled.info*",
        "*.edspicuousind.site*",
        "*.otrwaram.com*",
        "*.mpqfzyh.com*",
        "*.ihosetch.com*",
        "*.interestinglinks.net*",
        "*.bilsyndication.com*",
        "*.fidelity-media.com*",
        "*.edchargina.pro*",
        "*.pitchofcase.com*",
        "*.districtm.io*",
        "*.adentifi.com*",
        "*.notalkettoft.info*",
        "*.sauwoaptain.com*",
        "*.pushsar.com*",
        "*.the-ozone-project.com*",
        "*.japsulsa.com*",
        "*.inpagepush.com*",
        "*.go8news.biz*",
        "*.go8news.com*",
        "*.epomapps.com*",
        "*.go8news.net*",
        "*.date-il.com*",
        "*.bigood.site*",
        "*.bigood.com*",
        "*.sexdating123.com*",
        "*.padsimz.com*",
        "*.contehos.com*",
        "*.valueimpression.com*",
        "*.adkernel.com*",
        "*.iuiuduiid.club*",
        "*.nativeads.com*",
        "*.ads1-adnow.com*",
        "*.ads2-adnow.com*",
        "*.ads3-adnow.com*",
        "*.ads4-adnow.com*",
        "*.imonomy.com*",
        "*.ads5-adnow.com*",
        "*.ads6-adnow.com*",
        "*.xl-trk.com*",
        "*.consensu.org*",
        "*.user-api.com*",
        "*.liqwid.net*",
        "*.insurads.com*",
        "*.haphetititletleres.club*",
        "*.adobviewe.club*",
        "*.vvpcdke43x.com*",
        "*.kistutch.net*",
        "*.jokerlivestream.com*",
        "*.adport.io*",
        "*.gbtcdn.com*",
        "*.nanovisor.io*",
        "*.rfksrv.com*",
        "*.inmobicdn.net*",
        "*.brandmetrics.com*",
        "*.jucysh.com*",
        "*.adadapted.com*",
        "*.prfct.co*",
        "*.lulachu.com*",
        "*.ugyplysh.com*",
        "*.bidmachine.io*",
        "*.bidease.com*",
        "*.oclasrv.com*",
        "*.powerad.ai*",
        "*.iasds01.com*",
        "*.glumtitu.net*",
        "*.indexww.com*",
        "*.tru.am*",
        "*.e2ertt.com*",
        "*.adrecover.com*",
        "*.000info.com*",
        "*.carbonads.net*",
        "*.xhance.io*",
        "*.concert.io*",
        "*.grooksom.com*",
        "*.targaubs.com*",
        "*.007arcadegames.com*",
        "*.remtoaku.net*",
        "*.007guard.com*",
        "*.emxdigital.com*",
        "*.sail-track.com*",
        "*.searchletter.com*",
        "*.tidaltv.com*",
        "*.bkrtx.com*",
        "*.aaxads.com*",
        "*.33across.com*",
        "*.adspirit.net*",
        "*.emxdgt.com*",
        "*.saambaa.com*",
        "*.ad-score.com*",
        "*.rtk.io*",
        "*.advsnx.net*",
        "*.bidswitch.net*",
        "*.avocet.io*",
        "*.sascdn.com*",
        "*.admaxim.com*",
        "*.360.cn #dangerous*",
        "*.1rx.io*",
        "*.admanmedia.com*",
        "*.westseven.media*",
        "*.conviva.com*",
        "*.sw88.espn.com*",
        "*.smartology.co*",
        "*.clipcentric.com*",
        "*.ad-delivery.net*",
        "*.spotad.co*",
        "*.cmpsky.com*",
        "*.gxgydnhz.com*",
        "*.yshops-ads.ynet.co.il*",
        "*.upapi.net*",
        "*.yllix.com*",
        "*.008i.com*",
        "*.00fun.com*",
        "*.sexwall.me*",
        "*.admob.com*",
        "*.00hq.com*",
        "*.00inkjets.com*",
        "*.syn-api.com*",
        "*.under2given.com*",
        "*.zumusrv19.life*",
        "*.00pro.com*",
        "*.theadultblog.com*",
        "*.jewishcontentnetwork.com*",
        "*.00z70az77mnsa-00swj1zzprh.com*",
        "*.01smith.com*",
        "*.0202search.com*",
        "*.02kmky1xgzbmsdfx.com*",
        "*.02pmnzy5eo29bfk4.com*",
        "*.0-2u.com*",
        "*.behave.com*",
        "*.pornedup.com*",
        "*.030.com*",
        "*.032439.com*",
        "*.039068a.dialer-select.com*",
        "*.0-6e4332-5ox89w3-id53454s-id8ty3-8-u5o3984mjeo4094-g3ret567yr.com*",
        "*.070.us*",
        "*.077.us*",
        "*.079.us*",
        "*.07ic5do2myz3vzpk.com*",
        "*.08nigbmwk43i01y6.com*",
        "*.ig0nr8hhhb.com*",
        "*.093qpeuqpmz6ebfa.com*",
        "*.0aaa.com*",
        "*.0calories.net*",
        "*.0cat.com*",
        "*.0catch.com*",
        "*.0cj.net*",
        "*.0-days.net*",
        "*.0dp.com*",
        "*.0fkhzhpoxstn717y.com*",
        "*.0i4ixakh2d6hun43.com*",
        "*.0ml.net*",
        "*.0-money.us*",
        "*.0nlinemeds.com*",
        "*.0ptonline.net*",
        "*.0racle.info*",
        "*.0stats.com*",
        "*.0un8yo7rh82m416k.com*",
        "*.0vibd7viihxrtpyu.com*",
        "*.0websearch.com*",
        "*.0xs.com*",
        "*.0ym6ei1saev6eiuw.com*",
        "*.0zoafrqnit8em7xa.com*",
        "*.1.im.cz*",
        "*.1.zloyamer.z8.ru*",
        "*.4dsply.com*",
        "*.10.6.87.194.dynamic.dol.ru*",
        "*.100.6.87.194.dynamic.dol.ru*",
        "*.100.goodoo.ru*",
        "*.100.smi.ru*",
        "*.100000games.net*",
        "*.10000hits.net*",
        "*.1000funnyvideos.com*",
        "*.1000stars.ru*",
        "*.1000vragen.nl*",
        "*.100-100.ru*",
        "*.1001cards.com*",
        "*.1001movie.com*",
        "*.summerhamster.com*",
        "*.googleads4.g.doubleclick.net*",
        "*.trustx.org*",
        "*.ajjhtetv87.com*",
        "*.1001porngalleries.com*",
        "*.1001-search.com*",
        "*.100bigcoupons.com*",
        "*.100free.de*",
        "*.100free.nl*",
        "*.100freescreensavers.com*",
        "*.100supertop.com*",
        "*.100topdownloads.net*",
        "*.100webads.com*",
        "*.100webspace.com*",
        "*.101.6.87.194.dynamic.dol.ru*",
        "*.1010city.com*",
        "*.1010win.com*",
        "*.101lottery.com*",
        "*.101main.com*",
        "*.101malls.com*",
        "*.101order.com*",
        "*.101-website-traffic.com*",
        "*.102.6.87.194.dynamic.dol.ru*",
        "*.103.6.87.194.dynamic.dol.ru*",
        "*.103092804.com*",
        "*.104.6.87.194.dynamic.dol.ru*",
        "*.105.6.87.194.dynamic.dol.ru*",
        "*.106.6.87.194.dynamic.dol.ru*",
        "*.107.6.87.194.dynamic.dol.ru*",
        "*.108.6.87.194.dynamic.dol.ru*",
        "*.109.6.87.194.dynamic.dol.ru*",
        "*.10finger.dk*",
        "*.10k1txdk35mt02xx.com*",
        "*.10minresume.com*",
        "*.10minutesaday.net*",
        "*.10readyformoney.com*",
        "*.10s.com.br*",
        "*.10search.com*",
        "*.11.6.87.194.dynamic.dol.ru*",
        "*.110.6.87.194.dynamic.dol.ru*",
        "*.1100i.com*",
        "*.111.6.87.194.dynamic.dol.ru*",
        "*.112.6.87.194.dynamic.dol.ru*",
        "*.113.6.87.194.dynamic.dol.ru*",
        "*.114.6.87.194.dynamic.dol.ru*",
        "*.115.6.87.194.dynamic.dol.ru*",
        "*.116.6.87.194.dynamic.dol.ru*",
        "*.117.6.87.194.dynamic.dol.ru*",
        "*.118.6.87.194.dynamic.dol.ru*",
        "*.119.6.87.194.dynamic.dol.ru*",
        "*.1-19plus.com*",
        "*.11alivenews.com*",
        "*.11hour.com*",
        "*.11readyformoney.com*",
        "*.12.10.216.131*",
        "*.12.129.165.100*",
        "*.12.129.198.41*",
        "*.12.129.201.99*",
        "*.12.129.204.125*",
        "*.12.129.204.160*",
        "*.12.129.205.167*",
        "*.12.129.211.125*",
        "*.12.129.76.14*",
        "*.12.130.12.106*",
        "*.12.130.12.30*",
        "*.12.130.91.7*",
        "*.12.130.91.8*",
        "*.12.14.172.204*",
        "*.12.148.21.23*",
        "*.12.153.20.152*",
        "*.12.153.20.157*",
        "*.12.154.224.111*",
        "*.12.159.168.28*",
        "*.12.25.11.197*",
        "*.12.25.11.206*",
        "*.12.25.11.207*",
        "*.12.28.57.240*",
        "*.12.33.56.128*",
        "*.12.33.56.131*",
        "*.12.36.78.3*",
        "*.12.36.78.4*",
        "*.12.36.78.5*",
        "*.12.36.78.51*",
        "*.12.36.78.52*",
        "*.12.36.78.53*",
        "*.12.36.78.54*",
        "*.12.36.78.55*",
        "*.12.36.78.57*",
        "*.12.38.128.35*",
        "*.3lift.com*",
        "*.lkqd.net*",
        "*.angsrvr.com*",
        "*.algovid.com*",
        "*.yesadsrv.com*",
        "*.isanalyze.com*",
        "*.advertisingpromotionpro.com*",
        "*.yazizim.com*",
        "*.aan9.comi.gdn*",
        "*.crypto-advisory.com*",
        "*.bongacams.com*",
        "*.mysagagame.com*",
        "*.game4you2017.com*",
        "*.vertamedia.com*",
        "*.pxl2015x1.com*",
        "*.zrufclmvlsct.com*",
        "*.karonty.com*",
        "*.urldelivery.com*",
        "*.coinhive.com*",
        "*.algovid.com*",
        "*.chatango.com*",
        "*.mymobilenotification.com*",
        "*.digitalmerkat.com*",
        "*.clicksor.net*",
        "*.offertogo.online*",
        "*.adk2x.com*",
        "*.adk2.com*",
        "*.redirect41.info*",
        "*.thesoftwareround2upgradeall.win*",
        "*.120.6.87.194.dynamic.dol.ru*",
        "*.120host.net*",
        "*.121.6.87.194.dynamic.dol.ru*",
        "*.1-2-1cam.com*",
        "*.121itrafficexchange.com*",
        "*.121ware.com*",
        "*.1-2-1webcam.com*",
        "*.122.6.87.194.dynamic.dol.ru*",
        "*.123.6.87.194.dynamic.dol.ru*",
        "*.1234.2bro.com*",
        "*.123banners.com*",
        "*.123cashoutnow.com*",
        "*.123count.com*",
        "*.123counts.com*",
        "*.123credit.com*",
        "*.123expressview.com*",
        "*.123found.com*",
        "*.123go.com*",
        "*.123greettings.com*",
        "*.123mail.org*",
        "*.123mania.com*",
        "*.123refiyourhome.com*",
        "*.123search.com*",
        "*.123-search.net*",
        "*.123-searchengine.com*",
        "*.123spille.dk*",
        "*.123stat.com*",
        "*.123tabs.com*",
        "*.123ticket.com*",
        "*.123webmarketing.com*",
        "*.124.6.87.194.dynamic.dol.ru*",
        "*.124365.com*",
        "*.125.6.87.194.dynamic.dol.ru*",
        "*.126.6.87.194.dynamic.dol.ru*",
        "*.126.com*",
        "*.127.6.87.194.dynamic.dol.ru*",
        "*.128.11.18.188*",
        "*.128.11.42.56*",
        "*.128.11.42.60*",
        "*.128.11.42.61*",
        "*.128.121.115.144*",
        "*.128.121.12.70*",
        "*.128.121.12.85*",
        "*.128.121.123.92*",
        "*.128.121.125.245*",
        "*.128.121.214.219*",
        "*.128.121.218.57*",
        "*.128.121.220.111*",
        "*.128.121.232.233*",
        "*.128.121.238.169*",
        "*.128.121.24.114*",
        "*.128.167.120.48*",
        "*.128.167.120.49*",
        "*.128.241.21.48*",
        "*.128.242.104.137*",
        "*.128.242.104.232*",
        "*.128.242.104.248*",
        "*.128.242.120.23*",
        "*.128.242.178.145*",
        "*.128.242.201.146*",
        "*.128.242.201.147*",
        "*.128.242.201.186*",
        "*.128.242.237.107*",
        "*.128.242.241.125*",
        "*.128.242.241.126*",
        "*.128.242.244.242*",
        "*.128.242.247.185*",
        "*.128.242.252.129*",
        "*.128.242.252.53*",
        "*.128.242.252.86*",
        "*.128.6.87.194.dynamic.dol.ru*",
        "*.129.15.10.32*",
        "*.129.15.2.123*",
        "*.129.250.177.201*",
        "*.129.250.177.207*",
        "*.129.250.177.209*",
        "*.129.33.87.51*",
        "*.129.6.87.194.dynamic.dol.ru*",
        "*.12dailypro.com*",
        "*.1-2-free.com*",
        "*.1-2-money.com*",
        "*.12readyformoney.com*",
        "*.12rix.info*",
        "*.12surf.com*",
        "*.12traffic.de*",
        "*.13.6.87.194.dynamic.dol.ru*",
        "*.130.102.2.2*",
        "*.130.102.5.40*",
        "*.130.160.240.152*",
        "*.130.6.87.194.dynamic.dol.ru*",
        "*.130.83.47.128*",
        "*.130.94.133.187*",
        "*.130.94.201.230*",
        "*.130.94.201.231*",
        "*.130.94.202.34*",
        "*.130.94.202.39*",
        "*.130.94.202.45*",
        "*.130.94.24.173*",
        "*.130.94.244.15*",
        "*.130.94.74.189*",
        "*.130.94.79.174*",
        "*.131.6.87.194.dynamic.dol.ru*",
        "*.132.6.87.194.dynamic.dol.ru*",
        "*.133.205.217.139*",
        "*.133.6.87.194.dynamic.dol.ru*",
        "*.1337creations.com*",
        "*.134.6.87.194.dynamic.dol.ru*",
        "*.135.6.87.194.dynamic.dol.ru*",
        "*.136.6.87.194.dynamic.dol.ru*",
        "*.137.6.87.194.dynamic.dol.ru*",
        "*.138.6.87.194.dynamic.dol.ru*",
        "*.139.223.200.246*",
        "*.139.6.87.194.dynamic.dol.ru*",
        "*.139.81.34.2*",
        "*.139love.com*",
        "*.13readyformoney.com*",
        "*.13thdomain.com*",
        "*.14.6.87.194.dynamic.dol.ru*",
        "*.140.174.164.214*",
        "*.140.6.87.194.dynamic.dol.ru*",
        "*.140.99.15.143*",
        "*.140.99.15.144*",
        "*.140.99.15.145*",
        "*.141.158.171.118*",
        "*.141.158.171.22*",
        "*.141.158.171.32*",
        "*.141.6.87.194.dynamic.dol.ru*",
        "*.141-211-31-118.bus.umich.edu*",
        "*.142.6.87.194.dynamic.dol.ru*",
        "*.143.6.87.194.dynamic.dol.ru*",
        "*.143fuck.com*",
        "*.144.140.254.208*",
        "*.144.140.254.209*",
        "*.144.32.128.74*",
        "*.144.6.87.194.dynamic.dol.ru*",
        "*.145.6.87.194.dynamic.dol.ru*",
        "*.146.101.163.239*",
        "*.146.101.247.52*",
        "*.146.145.16.120*",
        "*.146.6.87.194.dynamic.dol.ru*",
        "*.146.82.201.212*",
        "*.1463.emoticonsplanet.com*",
        "*.147.136.250.100*",
        "*.147.136.250.60*",
        "*.147.208.15.13*",
        "*.147.208.169.72*",
        "*.147.6.87.194.dynamic.dol.ru*",
        "*.14713804a.l2m.net*",
        "*.148.122.172.3*",
        "*.148.6.87.194.dynamic.dol.ru*",
        "*.149.1.3.10*",
        "*.149.6.87.194.dynamic.dol.ru*",
        "*.1490thebay.com*",
        "*.14readyformoney.com*",
        "*.15.6.87.194.dynamic.dol.ru*",
        "*.150.6.87.194.dynamic.dol.ru*",
        "*.150dollarsmail.com*",
        "*.150mail.com*",
        "*.150ml.com*",
        "*.151.1.216.10*",
        "*.151.138.2.32*",
        "*.151.193.164.183*",
        "*.151.193.164.184*",
        "*.151.193.164.185*",
        "*.151.193.164.186*",
        "*.151.193.164.189*",
        "*.151.193.167.136*",
        "*.151.193.167.147*",
        "*.151.193.167.150*",
        "*.151.193.167.154*",
        "*.151.196.216.221*",
        "*.151.6.87.194.dynamic.dol.ru*",
        "*.152.104.1.158*",
        "*.152.163.214.108*",
        "*.152.52.1.136*",
        "*.152.52.24.240*",
        "*.152.52.44.194*",
        "*.152.6.87.194.dynamic.dol.ru*",
        "*.153.6.87.194.dynamic.dol.ru*",
        "*.154.6.87.194.dynamic.dol.ru*",
        "*.155.6.87.194.dynamic.dol.ru*",
        "*.156.6.87.194.dynamic.dol.ru*",
        "*.15666.com*",
        "*.157.151.95.2*",
        "*.157.161.128.22*",
        "*.157.238.81.250*",
        "*.157.6.87.194.dynamic.dol.ru*",
        "*.158.6.87.194.dynamic.dol.ru*",
        "*.159.180.251.90*",
        "*.159.54.34.17*",
        "*.159.6.87.194.dynamic.dol.ru*",
        "*.15readyformoney.com*",
        "*.givirsou.net*",
        "*.15x.net*",
        "*.16.6.87.194.dynamic.dol.ru*",
        "*.160.6.87.194.dynamic.dol.ru*",
        "*.161.58.12.234*",
        "*.161.58.178.209*",
        "*.161.58.187.157*",
        "*.161.58.191.254*",
        "*.161.58.243.135*",
        "*.161.58.247.119*",
        "*.161.58.80.46*",
        "*.161.58.83.57*",
        "*.161.6.87.194.dynamic.dol.ru*",
        "*.162.42.211.167*",
        "*.162.42.211.3*",
        "*.162.6.87.194.dynamic.dol.ru*",
        "*.163.6.87.194.dynamic.dol.ru*",
        "*.163.com *",
        "*.164.6.87.194.dynamic.dol.ru*",
        "*.165.1.76.60*",
        "*.165.193.10.116*",
        "*.165.193.102.178*",
        "*.165.193.140.106*",
        "*.165.193.19.21*",
        "*.165.193.20.10*",
        "*.165.21.101.44*",
        "*.165.212.8.26*",
        "*.165.6.87.194.dynamic.dol.ru*",
        "*.166.6.87.194.dynamic.dol.ru*",
        "*.166.90.205.40*",
        "*.166.90.205.53*",
        "*.167.216.142.116*",
        "*.167.216.227.181*",
        "*.167.216.227.182*",
        "*.167.216.253.183*",
        "*.167.6.87.194.dynamic.dol.ru*",
        "*.167.8.128.41*",
        "*.168.143.112.11*",
        "*.168.143.113.11*",
        "*.168.143.119.134*",
        "*.168.143.163.201*",
        "*.168.143.163.202*",
        "*.168.144.47.190*",
        "*.168.6.87.194.dynamic.dol.ru*",
        "*.168ads.com*",
        "*.169.6.87.194.dynamic.dol.ru*",
        "*.16mail.com*",
        "*.16money.com*",
        "*.16readyformoney.com*",
        "*.17.6.87.194.dynamic.dol.ru*",
        "*.170.224.10.165*",
        "*.170.224.21.160*",
        "*.170.6.87.194.dynamic.dol.ru*",
        "*.171.6.87.194.dynamic.dol.ru*",
        "*.17173.com*",
        "*.172.6.87.194.dynamic.dol.ru*",
        "*.173.6.87.194.dynamic.dol.ru*",
        "*.174.6.87.194.dynamic.dol.ru*",
        "*.175.6.87.194.dynamic.dol.ru*",
        "*.176.6.87.194.dynamic.dol.ru*",
        "*.177.6.87.194.dynamic.dol.ru*",
        "*.17777.com*",
        "*.178.6.87.194.dynamic.dol.ru*",
        "*.179.6.87.194.dynamic.dol.ru*",
        "*.17money.com*",
        "*.17re8px9v1ypc6w7.com*",
        "*.17readyformoney.com*",
        "*.18.29.1.34*",
        "*.18.29.1.35*",
        "*.18.6.87.194.dynamic.dol.ru*",
        "*.18.7.0.11*",
        "*.18.7.0.13*",
        "*.18.7.14.127*",
        "*.180.6.87.194.dynamic.dol.ru*",
        "*.1800djsareus.com*",
        "*.1800-search.com*",
        "*.1800searchonline.com*",
        "*.180searchassistant.com*",
        "*.180solutions.com*",
        "*.181.6.87.194.dynamic.dol.ru*",
        "*.182.6.87.194.dynamic.dol.ru*",
        "*.182001web6.gq.nu*",
        "*.183.6.87.194.dynamic.dol.ru*",
        "*.184.6.87.194.dynamic.dol.ru*",
        "*.185.6.87.194.dynamic.dol.ru*",
        "*.186.6.87.194.dynamic.dol.ru*",
        "*.187.6.87.194.dynamic.dol.ru*",
        "*.188.6.87.194.dynamic.dol.ru*",
        "*.189.6.87.194.dynamic.dol.ru*",
        "*.18drillclub.com*",
        "*.18party.com*",
        "*.18readyformoney.com*",
        "*.18uz3wkpu86hbu3v.com*",
        "*.19.168.11.o7.net*",
        "*.19.6.87.194.dynamic.dol.ru*",
        "*.190.6.87.194.dynamic.dol.ru*",
        "*.191.6.87.194.dynamic.dol.ru*",
        "*.192.114.68.50*",
        "*.192.114.71.10*",
        "*.192.149.15.15*",
        "*.192.190.109.20*",
        "*.192.190.109.32*",
        "*.192.215.32.50*",
        "*.192.216.83.38*",
        "*.192.245.12.246*",
        "*.192.245.235.30*",
        "*.192.245.235.34*",
        "*.192.245.235.35*",
        "*.192.245.235.36*",
        "*.192.245.235.4*",
        "*.192.41.45.75*",
        "*.192.6.87.194.dynamic.dol.ru*",
        "*.192.85.241.142*",
        "*.192.85.241.60*",
        "*.193.108.80.106*",
        "*.193.108.80.82*",
        "*.193.110.120.30*",
        "*.193.111.160.200*",
        "*.193.111.92.37*",
        "*.193.120.248.95*",
        "*.193.124.133.175*",
        "*.193.124.133.177*",
        "*.193.124.133.180*",
        "*.193.124.133.53*",
        "*.193.125.152.10*",
        "*.193.125.152.109*",
        "*.193.128.61.168*",
        "*.193.132.149.202*",
        "*.193.149.121.11*",
        "*.193.149.121.7*",
        "*.193.149.121.8*",
        "*.193.158.37.35*",
        "*.193.173.82.15*",
        "*.193.173.82.19*",
        "*.193.19.137.251*",
        "*.193.195.1.1*",
        "*.193.210.156.114*",
        "*.193.252.117.12*",
        "*.193.252.117.15*",
        "*.193.252.71.12*",
        "*.193.254.184.86*",
        "*.193.45.3.17*",
        "*.193.45.3.23*",
        "*.193.6.87.194.dynamic.dol.ru*",
        "*.193.65.56.30*",
        "*.193.7.255.23*",
        "*.193.7.255.3*",
        "*.193.71.196.108*",
        "*.193.71.196.113*",
        "*.193.71.196.126*",
        "*.193.71.196.138*",
        "*.193.71.196.139*",
        "*.193.71.196.184*",
        "*.193.73.103.61*",
        "*.193.85.207.202*",
        "*.193.85.233.21*",
        "*.193.85.233.23*",
        "*.194.1.129.227*",
        "*.194.100.161.11*",
        "*.194.109.154.168*",
        "*.194.109.6.248*",
        "*.194.112.108.180*",
        "*.194.117.210.254*",
        "*.194.117.69.2*",
        "*.194.121.103.10*",
        "*.194.126.131.100*",
        "*.194.126.131.15*",
        "*.194.126.131.160*",
        "*.194.129.79.7*",
        "*.194.129.79.9*",
        "*.194.135.19.13*",
        "*.194.145.56.65*",
        "*.194.149.235.226*",
        "*.194.149.235.48*",
        "*.194.149.30.225*",
        "*.194.151.105.185*",
        "*.194.153.97.16*",
        "*.194.154.71.246*",
        "*.194.158.120.145*",
        "*.194.158.121.145*",
        "*.194.163.254.211*",
        "*.194.164.32.90*",
        "*.194.183.128.107*",
        "*.194.186.208.2*",
        "*.194.186.25.4*",
        "*.194.186.251.35*",
        "*.194.186.36.130*",
        "*.194.186.36.190*",
        "*.194.186.36.196*",
        "*.194.186.36.222*",
        "*.194.186.74.147*",
        "*.194.192.187.184*",
        "*.194.192.187.185*",
        "*.194.192.187.186*",
        "*.194.192.187.188*",
        "*.194.192.187.190*",
        "*.194.192.187.191*",
        "*.194.192.187.192*",
        "*.194.192.187.193*",
        "*.194.192.81.226*",
        "*.194.2.159.101*",
        "*.194.20.232.3*",
        "*.194.200.132.34*",
        "*.194.202.238.102*",
        "*.194.213.32.241*",
        "*.194.213.53.208*",
        "*.194.213.53.211*",
        "*.194.213.62.35*",
        "*.194.213.62.40*",
        "*.194.213.62.41*",
        "*.194.213.62.44*",
        "*.194.217.118.20*",
        "*.194.226.198.77*",
        "*.194.226.38.242*",
        "*.194.226.38.243*",
        "*.194.228.200.88*",
        "*.194.228.200.92*",
        "*.194.228.3.226*",
        "*.194.228.3.236*",
        "*.194.231.46.210*",
        "*.194.231.79.38*",
        "*.194.233.182.131*",
        "*.194.237.107.11*",
        "*.194.237.107.154*",
        "*.194.237.107.21*",
        "*.194.237.107.43*",
        "*.194.247.192.180*",
        "*.194.247.192.52*",
        "*.194.5.30.100*",
        "*.194.51.147.199*",
        "*.194.51.85.135*",
        "*.194.51.85.192*",
        "*.194.6.87.194.dynamic.dol.ru*",
        "*.194.64.249.244*",
        "*.194.64.249.245*",
        "*.194.67.1.166*",
        "*.194.67.18.22*",
        "*.194.67.18.5*",
        "*.194.67.23.224*",
        "*.194.67.23.226*",
        "*.194.67.246.3*",
        "*.194.67.26.89*",
        "*.194.67.35.133*",
        "*.194.67.35.205*",
        "*.194.67.45.224*",
        "*.194.67.45.226*",
        "*.194.84.234.97*",
        "*.194.84.234.98*",
        "*.194.87.10.246*",
        "*.194.87.10.60*",
        "*.194.87.11.246*",
        "*.194.87.12.129*",
        "*.194.87.13.46*",
        "*.194.87.14.246*",
        "*.194.87.5.34*",
        "*.194.87.6.246*",
        "*.194.87.8.246*",
        "*.194.9.192.102*",
        "*.194.98.19.228*",
        "*.194.98.19.242*",
        "*.195.10.228.132*",
        "*.195.101.94.105*",
        "*.195.11.246.34*",
        "*.195.110.124.130*",
        "*.195.110.96.121*",
        "*.195.114.235.100*",
        "*.195.119.180.21*",
        "*.195.120.22.106*",
        "*.195.121.7.193*",
        "*.195.124.124.56*",
        "*.195.125.111.109*",
        "*.195.128.50.163*",
        "*.195.129.80.192*",
        "*.195.129.80.193*",
        "*.195.131.4.166*",
        "*.195.133.58.246*",
        "*.195.138.124.34*",
        "*.195.138.80.37*",
        "*.195.141.34.36*",
        "*.195.146.100.29*",
        "*.195.146.192.192*",
        "*.195.153.199.70*",
        "*.195.154.195.154*",
        "*.195.154.195.40*",
        "*.195.154.195.60*",
        "*.195.154.195.80*",
        "*.195.154.216.201*",
        "*.195.154.216.228*",
        "*.195.154.77.220*",
        "*.195.154.77.242*",
        "*.195.154.98.146*",
        "*.195.154.98.157*",
        "*.195.154.98.158*",
        "*.195.154.98.159*",
        "*.195.161.113.100*",
        "*.195.161.113.136*",
        "*.195.161.113.86*",
        "*.195.161.119.224*",
        "*.195.161.119.226*",
        "*.195.161.119.240*",
        "*.195.161.119.32*",
        "*.195.170.248.118*",
        "*.195.180.6.234*",
        "*.195.193.141.40*",
        "*.195.193.95.228*",
        "*.195.2.82.138*",
        "*.195.2.82.4*",
        "*.195.2.82.63*",
        "*.195.20.224.129*",
        "*.195.20.225.10*",
        "*.195.20.225.24*",
        "*.195.209.49.42*",
        "*.195.210.91.107*",
        "*.195.219.20.20*",
        "*.195.219.20.21*",
        "*.195.219.50.217*",
        "*.195.225.1.222*",
        "*.195.225.2.105*",
        "*.195.225.2.107*",
        "*.195.225.2.56*",
        "*.195.225.2.57*",
        "*.195.225.2.63*",
        "*.195.225.2.64*",
        "*.195.225.3.56*",
        "*.195.225.3.57*",
        "*.195.225.3.63*",
        "*.195.225.3.64*",
        "*.195.226.104.136*",
        "*.195.226.104.143*",
        "*.195.226.104.144*",
        "*.195.226.104.145*",
        "*.195.234.240.226*",
        "*.195.235.97.80*",
        "*.195.239.248.14*",
        "*.195.241.74.227*",
        "*.195.241.77.2*",
        "*.195.241.77.98*",
        "*.195.241.80.35*",
        "*.195.242.9.23*",
        "*.195.249.15.19*",
        "*.195.249.15.29*",
        "*.195.249.15.6*",
        "*.195.249.15.8*",
        "*.195.249.15.9*",
        "*.195.250.144.104*",
        "*.195.250.147.210*",
        "*.195.29.253.238*",
        "*.195.3.56.5*",
        "*.195.3.56.6*",
        "*.195.3.56.7*",
        "*.195.35.187.128*",
        "*.195.36.162.14*",
        "*.195.36.166.14*",
        "*.195.39.234.140*",
        "*.195.39.234.210*",
        "*.195.39.9.33*",
        "*.195.42.162.174*",
        "*.195.42.179.163*",
        "*.195.5.227.28*",
        "*.195.54.111.69*",
        "*.195.54.192.123*",
        "*.195.54.192.231*",
        "*.195.54.209.141*",
        "*.195.54.209.142*",
        "*.195.6.87.194.dynamic.dol.ru*",
        "*.195.60.12.141*",
        "*.195.67.71.64*",
        "*.195.67.71.77*",
        "*.195.68.136.26*",
        "*.195.70.35.3*",
        "*.195.8.128.91*",
        "*.195.82.104.124*",
        "*.195.88.78.197*",
        "*.195.9.14.10*",
        "*.195.90.131.145*",
        "*.195.90.131.217*",
        "*.195.92.245.65*",
        "*.196.2.24.20*",
        "*.196.2.45.86*",
        "*.196.2.63.180*",
        "*.196.28.19.10*",
        "*.196.30.168.91*",
        "*.196.36.239.19*",
        "*.196.40.45.18*",
        "*.196.40.45.25*",
        "*.196.6.87.194.dynamic.dol.ru*",
        "*.197.6.87.194.dynamic.dol.ru*",
        "*.198.104.150.205*",
        "*.198.104.159.65*",
        "*.198.161.157.218*",
        "*.198.172.122.10*",
        "*.198.172.202.250*",
        "*.198.200.138.50*",
        "*.198.242.35.28*",
        "*.198.247.208.110*",
        "*.198.31.101.40*",
        "*.198.31.101.73*",
        "*.198.6.71.133*",
        "*.198.6.87.194.dynamic.dol.ru*",
        "*.198.64.139.114*",
        "*.198.64.149.47*",
        "*.198.65.107.28*",
        "*.198.65.116.34*",
        "*.198.65.152.9*",
        "*.198.65.220.114*",
        "*.198.65.220.232*",
        "*.198.65.220.238*",
        "*.198.65.220.244*",
        "*.198.65.220.245*",
        "*.198.65.220.250*",
        "*.198.66.219.1*",
        "*.198.77.113.195*",
        "*.198.77.36.41*",
        "*.198.77.71.38*",
        "*.198.77.78.110*",
        "*.198.87.214.23*",
        "*.198.92.250.202*",
        "*.199.106.236.21*",
        "*.199.106.64.50*",
        "*.199.106.64.53*",
        "*.199.107.237.207*",
        "*.199.172.146.114*",
        "*.199.173.152.24*",
        "*.199.173.21.65*",
        "*.199.181.132.206*",
        "*.199.181.132.78*",
        "*.199.181.132.80*",
        "*.199.181.132.9*",
        "*.199.181.135.17*",
        "*.199.193.10.13*",
        "*.199.193.10.30*",
        "*.199.193.10.90*",
        "*.199.193.13.90*",
        "*.199.193.9.23*",
        "*.199.201.233.19*",
        "*.199.201.234.17*",
        "*.199.232.145.10*",
        "*.199.232.145.90*",
        "*.199.239.136.200*",
        "*.199.239.136.245*",
        "*.199.239.137.200*",
        "*.199.239.137.229*",
        "*.199.239.137.245*",
        "*.199.243.163.108*",
        "*.199.243.163.120*",
        "*.199.246.67.114*",
        "*.199.246.67.241*",
        "*.199.246.67.242*",
        "*.199.246.67.248*",
        "*.199.246.67.251*",
        "*.199.249.170.20*",
        "*.199.6.87.194.dynamic.dol.ru*",
        "*.199.78.52.10*",
        "*.199.85.4.59*",
        "*.199.95.206.210*",
        "*.199.95.208.51*",
        "*.199.95.209.123*",
        "*.19readyformoney.com*",
        "*.1a28z2b27y.com*",
        "*.1a7r4k8ccwtfynqh.com*",
        "*.1ad2srvr-cpt-v1.com*",
        "*.1adexchange.com*",
        "*.1analmale.com*",
        "*.1asianspunk.com*",
        "*.1automationwiz.com*",
    ];

    for (var i = 0; i < blocked_urls.length; i++) {
        if (shExpMatch(url, blocked_urls[i])) {
            return "PROXY 127.0.0.1:8080";
        }
    }

    return "DIRECT";
}
