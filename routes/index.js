var express = require('express');
var router = express.Router();

var guesses = [];

class cord{
  constructor(lon, lat){
    this.lon = lon;
    this.lat = lat;
  }
}

const cords = new Map();

cords.set('afghanistan',new cord(66,33))
cords.set('albania',new cord(20,41))
cords.set('algeria',new cord(3,29))
cords.set('andorra',new cord(1.5,42.5))
cords.set('angola',new cord(18.5,-12.5))
cords.set('antigua and barbuda',new cord(-61.8,17.05))
cords.set('argentina',new cord(-64,-34))
cords.set('armenia',new cord(45,40))
cords.set('australia',new cord(135,-25))
cords.set('austria',new cord(13.333333,47.333333))
cords.set('azerbaijan',new cord(47.5,40.5))
cords.set('bahamas',new cord(-76,24))
cords.set('bahrain',new cord(50.5,26))
cords.set('bangladesh',new cord(90,24))
cords.set('barbados',new cord(-59.533333,13.166667))
cords.set('belarus',new cord(28,53))
cords.set('belgium',new cord(4,50.833333))
cords.set('belize',new cord(-88.75,17.25))
cords.set('benin',new cord(2.25,9.5))
cords.set('bhutan',new cord(90.5,27.5))
cords.set('bolivia',new cord(-65,-17))
cords.set('bosnia and herzegovina',new cord(17.833333,44.25))
cords.set('botswana',new cord(24,-22))
cords.set('brazil',new cord(-55,-10))
cords.set('brunei darussalam',new cord(114.666667,4.5))
cords.set('bulgaria',new cord(25,43))
cords.set('burkina faso',new cord(-2,13))
cords.set('burundi',new cord(30,-3.5))
cords.set('cabo verde',new cord(-24,16))
cords.set('cambodia',new cord(105,13))
cords.set('cameroon',new cord(12,6))
cords.set('canada',new cord(-96,60))
cords.set('central african republic',new cord(21,7))
cords.set('chad',new cord(19,15))
cords.set('chile',new cord(-71,-30))
cords.set('china',new cord(105,35))
cords.set('colombia',new cord(-72,4))
cords.set('comoros',new cord(44.25,-12.166667))
cords.set('congo',new cord(15,-1))
cords.set('costa rica',new cord(-84,10))
cords.set('côte d’ivoire',new cord(-5,8))
cords.set('croatia',new cord(15.5,45.166667))
cords.set('cuba',new cord(-79.5,22))
cords.set('cyprus',new cord(33,35))
cords.set('czech republic',new cord(15,49.75))
cords.set('democratic people’s republic of korea',new cord(127,40))
cords.set('democratic republic of the congo',new cord(25,0))
cords.set('denmark',new cord(10,56))
cords.set('djibouti',new cord(42.5,11.5))
cords.set('dominica',new cord(-61.333333,15.5))
cords.set('dominican republic',new cord(-70.666667,19))
cords.set('ecuador',new cord(-77.5,-2))
cords.set('egypt',new cord(30,27))
cords.set('el salvador',new cord(-88.916667,13.833333))
cords.set('equatorial guinea',new cord(10,2))
cords.set('eritrea',new cord(39,15))
cords.set('estonia',new cord(26,59))
cords.set('ethiopia',new cord(38,8))
cords.set('fiji',new cord(178,-18))
cords.set('finland',new cord(26,64))
cords.set('france',new cord(2,46))
cords.set('gabon',new cord(11.75,-1))
cords.set('gambia',new cord(-15.5,13.5))
cords.set('georgia',new cord(43.499905,41.999981))
cords.set('germany',new cord(10.5,51.5))
cords.set('ghana',new cord(-2,8))
cords.set('greece',new cord(22,39))
cords.set('grenada',new cord(-61.666667,12.116667))
cords.set('guatemala',new cord(-90.25,15.5))
cords.set('guinea',new cord(-10,11))
cords.set('guinea-bissau',new cord(-15,12))
cords.set('guyana',new cord(-59,5))
cords.set('haiti',new cord(-72.416667,19))
cords.set('honduras',new cord(-86.5,15))
cords.set('hungary',new cord(20,47))
cords.set('iceland',new cord(-18,65))
cords.set('india',new cord(77,20))
cords.set('indonesia',new cord(120,-5))
cords.set('iran',new cord(53,32))
cords.set('iraq',new cord(44,33))
cords.set('ireland',new cord(-8,53))
cords.set('israel',new cord(34.75,31.5))
cords.set('italy',new cord(12.833333,42.833333))
cords.set('jamaica',new cord(-77.5,18.25))
cords.set('japan',new cord(138,36))
cords.set('jordan',new cord(36,31))
cords.set('kazakhstan',new cord(68,48))
cords.set('kenya',new cord(38,1))
cords.set('kiribati',new cord(-170,-5))
cords.set('kuwait',new cord(47.75,29.5))
cords.set('kyrgyzstan',new cord(75,41))
cords.set('laos',new cord(105,18))
cords.set('latvia',new cord(25,57))
cords.set('lebanon',new cord(35.833333,33.833333))
cords.set('lesotho',new cord(28.25,-29.5))
cords.set('liberia',new cord(9.5,6.5))
cords.set('libya',new cord(17,25))
cords.set('liechtenstein',new cord(9.533333,47.166667))
cords.set('lithuania',new cord(24,56))
cords.set('luxembourg',new cord(6.166667,49.75))
cords.set('macedonia',new cord(22,41.833333))
cords.set('madagascar',new cord(47,-20))
cords.set('malawi',new cord(34,-13.5))
cords.set('malaysia',new cord(112.5,2.5))
cords.set('maldives',new cord(73,3.2))
cords.set('mali',new cord(-4,17))
cords.set('malta',new cord(14.433333,35.916667))
cords.set('marshall islands',new cord(167,10))
cords.set('mauritania',new cord(-12,20))
cords.set('mauritius',new cord(57.583333,-20.3))
cords.set('mexico',new cord(-102,23))
cords.set('federated states of micronesia',new cord(152,5))
cords.set('monaco',new cord(7.4,43.733333))
cords.set('mongolia',new cord(105,46))
cords.set('montenegro',new cord(19.3,42.5))
cords.set('morocco',new cord(-5,32))
cords.set('mozambique',new cord(35,-18.25))
cords.set('myanmar',new cord(98,22))
cords.set('namibia',new cord(17,-22))
cords.set('nauru',new cord(166.916667,-0.533333))
cords.set('nepal',new cord(84,28))
cords.set('netherlands',new cord(5.75,52.5))
cords.set('new zealand',new cord(174,-42))
cords.set('nicaragua',new cord(-85,13))
cords.set('niger',new cord(8,16))
cords.set('nigeria',new cord(8,10))
cords.set('norway',new cord(10,62))
cords.set('oman',new cord(57,21))
cords.set('pakistan',new cord(70,30))
cords.set('palau',new cord(134,6))
cords.set('panama',new cord(-80,9))
cords.set('papua new guinea',new cord(147,-6))
cords.set('paraguay',new cord(-57.996389,-22.993333))
cords.set('peru',new cord(-76,-10))
cords.set('philippines',new cord(122,13))
cords.set('poland',new cord(20,52))
cords.set('portugal',new cord(-8,39.5))
cords.set('qatar',new cord(51.25,25.5))
cords.set('republic of korea',new cord(127.5,37))
cords.set('republic of moldova',new cord(29,47))
cords.set('romania',new cord(25,46))
cords.set('russian federation',new cord(100,60))
cords.set('rwanda',new cord(30,-2))
cords.set('saint kitts and nevis',new cord(-62.75,17.333333))
cords.set('saint lucia',new cord(-60.966667,13.883333))
cords.set('saint vincent and the grenadines',new cord(-61.2,13.083333))
cords.set('samoa',new cord(-172.178309,-13.803096))
cords.set('san marino',new cord(12.416667,43.933333))
cords.set('sao tome and principe',new cord(7,1))
cords.set('saudi arabia',new cord(45,25))
cords.set('senegal',new cord(-14,14))
cords.set('serbia',new cord(21,44))
cords.set('seychelles',new cord(55.666667,-4.583333))
cords.set('sierra leone',new cord(-11.5,8.5))
cords.set('singapore',new cord(103.8,1.366667))
cords.set('slovakia',new cord(19.5,48.666667))
cords.set('slovenia',new cord(15.166667,46.25))
cords.set('solomon islands',new cord(159,-8))
cords.set('somalia',new cord(48,6))
cords.set('south africa',new cord(26,-30))
cords.set('south sudan',new cord(30,8))
cords.set('spain',new cord(-4,40))
cords.set('sri lanka',new cord(81,7))
cords.set('sudan',new cord(30,16))
cords.set('suriname',new cord(-56,4))
cords.set('swaziland',new cord(31.5,-26.5))
cords.set('sweden',new cord(15,62))
cords.set('switzerland',new cord(8,47))
cords.set('syrian arab republic',new cord(38,35))
cords.set('tajikistan',new cord(71,39))
cords.set('tanzania',new cord(35,-6))
cords.set('thailand',new cord(100,15))
cords.set('timor-leste',new cord(125.75,-8.833333))
cords.set('togo',new cord(1.166667,8))
cords.set('tonga',new cord(-175,-20))
cords.set('trinidad and tobago',new cord(-61,11))
cords.set('tunisia',new cord(9,34))
cords.set('turkey',new cord(34.911546,39.059012))
cords.set('turkmenistan',new cord(60,40))
cords.set('tuvalu',new cord(178,-8))
cords.set('uganda',new cord(33,2))
cords.set('ukraine',new cord(32,49))
cords.set('united arab emirates',new cord(54,24))
cords.set('united kingdom',new cord(-4,54))
cords.set('united states of america',new cord(-98.5795,39.828175))
cords.set('uruguay',new cord(-56,-33))
cords.set('uzbekistan',new cord(63.84911,41.707542))
cords.set('vanuatu',new cord(167,-16))
cords.set('venezuela',new cord(-66,8))
cords.set('vietnam',new cord(107.833333,16.166667))
cords.set('yemen',new cord(47.5,15.5))
cords.set('zambia',new cord(30,-15))
cords.set('zimbabwe',new cord(29,-19))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/room', function(req, res, next){
  res.render('room', { title: 'Room 1'})
});

router.get('/pickCountry', function(req, res, next){
  res.render('pickCountry', { title: 'Pick Country Game'})
});

router.get('/guessShape', function(req, res, next){
  res.render('guessShape', { title: 'Guess the country', guesses: []})
});

router.post('/guessShape', function(req, res, next){
  let guess = req.body.guess.toLowerCase();
  guesses.push(guess);
  console.log(guess);
  console.log(cords.get(guess));
  //let distance =
  res.render('guessShape', { title: 'Guess the country', guesses: guesses})
});


module.exports = router;
