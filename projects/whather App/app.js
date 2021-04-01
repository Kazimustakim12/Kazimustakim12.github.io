const _0x43bf = [
  "1021855cHPFFG",
  "then",
  "767651PXgLJN",
  "json",
  "weather",
  "872362BzdIxd",
  "PLz\x20enter\x20the\x20correct\x20City\x20name",
  ".button",
  "1176079oWnKVC",
  "visibility",
  "icon",
  "image",
  "linear-gradient(\x0a\x09\x09rgba(90,\x2085,\x2085,\x200.718),\x20rgba(74,\x2068,\x2068,\x200.5)\x0a\x09),url(\x27./png/main/",
  "addEventListener",
  "name",
  "&appid=",
  "style",
  "querySelector",
  "1AIaceA",
  "tempvalue",
  "https://api.openweathermap.org/data/2.5/weather?q=",
  ".jpg\x27)",
  "innerHTML",
  ".descripitionValue",
  "descripitionValue",
  "17573dSokSC",
  "329ZJIWla",
  "<img\x0a\x20\x20\x20\x20src=\x22./png/main/",
  "floor",
  "main",
  "SECRETAPI_KEY",
  "110BUPuuW",
  "log",
  ".cityvalue",
  "1cHtkzp",
  ".png\x22\x0a\x20\x20\x20\x20alt=\x22sunny\x20cloud\x22\x0a\x20\x20\x20\x20id=\x22image\x22/>",
  "catch",
  "457thBOTE",
  "city",
  "758192YrdHEN",
  "backgroundImage",
];
const _0x53d5 = function (_0x3e5783, _0x114aa4) {
  _0x3e5783 = _0x3e5783 - 0xf2;
  let _0x43bfcf = _0x43bf[_0x3e5783];
  return _0x43bfcf;
};
const _0x40d942 = _0x53d5;
(function (_0x3a77c3, _0x1f4e24) {
  const _0x1bc677 = _0x53d5;
  while (!![]) {
    try {
      const _0x1ea48b =
        -parseInt(_0x1bc677(0x10d)) * -parseInt(_0x1bc677(0xfb)) +
        -parseInt(_0x1bc677(0xf4)) * parseInt(_0x1bc677(0xfd)) +
        parseInt(_0x1bc677(0x115)) * -parseInt(_0x1bc677(0xf7)) +
        -parseInt(_0x1bc677(0x100)) +
        -parseInt(_0x1bc677(0x103)) +
        parseInt(_0x1bc677(0xf9)) +
        -parseInt(_0x1bc677(0x11a)) * -parseInt(_0x1bc677(0x114));
      if (_0x1ea48b === _0x1f4e24) break;
      else _0x3a77c3["push"](_0x3a77c3["shift"]());
    } catch (_0x1aa4cb) {
      _0x3a77c3["push"](_0x3a77c3["shift"]());
    }
  }
})(_0x43bf, 0xb6488);
const kelvin = -273.15,
  cityName = document[_0x40d942(0x10c)](".search"),
  container = document[_0x40d942(0x10c)](".container-body"),
  temp = document[_0x40d942(0x10c)](".tempvalue"),
  cityvalue = document["querySelector"](_0x40d942(0xf3)),
  button = document[_0x40d942(0x10c)](_0x40d942(0x102)),
  descripition = document["querySelector"](_0x40d942(0x112)),
  imageIcon = document[_0x40d942(0x10c)](".image-icon"),
  BodyBackground = document[_0x40d942(0x10c)](".bg-img"),
  alert = document["querySelector"](".alert");
var key = config[_0x40d942(0x119)];
console[_0x40d942(0xf2)](container), console[_0x40d942(0xf2)](BodyBackground);
function displayWheather() {
  const _0x1e5052 = _0x40d942;
  (temp[_0x1e5052(0x111)] = Math[_0x1e5052(0x117)](weather["tempvalue"])),
    (cityvalue[_0x1e5052(0x111)] = weather[_0x1e5052(0xf8)]),
    (descripition[_0x1e5052(0x111)] = weather[_0x1e5052(0x113)]),
    (imageIcon[_0x1e5052(0x111)] =
      _0x1e5052(0x116) + weather[_0x1e5052(0x106)] + _0x1e5052(0xf5)),
    (BodyBackground["style"][_0x1e5052(0xfa)] =
      _0x1e5052(0x107) + weather[_0x1e5052(0x106)] + _0x1e5052(0x110)),
    (alert[_0x1e5052(0x10b)][_0x1e5052(0x104)] = "visible");
}
const weather = {};
button[_0x40d942(0x108)]("click", () => {
  const _0x3960e1 = _0x40d942;
  fetch(_0x3960e1(0x10f) + cityName["value"] + _0x3960e1(0x10a) + key)
    [_0x3960e1(0xfc)]((_0x2c7d7d) => _0x2c7d7d[_0x3960e1(0xfe)]())
    [_0x3960e1(0xfc)]((_0x222ada) => {
      const _0x4be52e = _0x3960e1;
      console[_0x4be52e(0xf2)](_0x222ada),
        (weather[_0x4be52e(0x10e)] =
          _0x222ada[_0x4be52e(0x118)]["temp"] + kelvin),
        (weather["city"] = _0x222ada[_0x4be52e(0x109)]),
        (weather["descripitionValue"] =
          _0x222ada[_0x4be52e(0xff)][0x0]["description"]),
        (weather[_0x4be52e(0x106)] =
          _0x222ada[_0x4be52e(0xff)][0x0][_0x4be52e(0x105)]);
    })
    [_0x3960e1(0xfc)](function () {
      displayWheather();
    })
    [_0x3960e1(0xf6)]((_0x3ef8b8) => alert(_0x3960e1(0x101)));
});
