const _0x1e7c = [
  ".srch",
  "slice",
  "deezerdevs-deezer.p.rapidapi.com",
  "data",
  "next",
  "cover_medium",
  "log",
  "281OtAwOV",
  "653ozbFVq",
  "json",
  "setAttributeNode",
  "paused\x20music",
  "All\x20set\x20to\x20play\x20Music",
  "div",
  ".button",
  "pause",
  ".SearchBtn",
  "then",
  "466309OMtkgg",
  "GET",
  "84854bnqLwH",
  "catch",
  "album",
  "appendChild",
  "c501483659msha19926282ae5e09p18db78jsnedca9925bcac",
  "stopPropagation",
  "src",
  "click",
  "preview",
  "addEventListener",
  "\x22\x20title=\x22play\x22></i>\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20<i\x20class=\x22fas\x20fa-forward\x22\x20id=\x22next\x22\x20title=\x22Next\x22></i>\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20<!--<audio\x20src=\x22",
  "\x22\x20data-title=\x22",
  "classList",
  "innerHTML",
  "replace",
  "createAttribute",
  ".audioplayer",
  "761rrqrAL",
  "length",
  "163wGkTSp",
  "263489tnjRUO",
  "2CRmLgd",
  "getAttribute",
  "fa-pause",
  "querySelector",
  "error",
  "123acxFqb",
  "setAttribute",
  "value",
  "col-12\x20col-md-3\x20col-lg-3\x20output\x20justify-content-center\x20d-flex\x20mt-5",
  "artist",
  "fa-play",
  "\x22\x20data=\x22",
  "target",
  "187171rTafTR",
  "class",
  "1009UStwBc",
  "name",
  ".play",
  "</h3>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h6\x20class=\x22card-title\x20font-weight-light\x20\x22>\x20<i>\x20Artist:</i>\x20",
  "preventDefault",
];
const _0x436c = function (_0x4f54aa, _0x562234) {
  _0x4f54aa = _0x4f54aa - 0x10c;
  let _0x1e7c78 = _0x1e7c[_0x4f54aa];
  return _0x1e7c78;
};
const _0x13f5e9 = _0x436c;
(function (_0x4dee70, _0x3502e5) {
  const _0x146012 = _0x436c;
  while (!![]) {
    try {
      const _0x534c93 =
        parseInt(_0x146012(0x148)) +
        -parseInt(_0x146012(0x145)) * -parseInt(_0x146012(0x111)) +
        -parseInt(_0x146012(0x119)) * -parseInt(_0x146012(0x10c)) +
        -parseInt(_0x146012(0x134)) +
        -parseInt(_0x146012(0x147)) * parseInt(_0x146012(0x128)) +
        -parseInt(_0x146012(0x127)) * -parseInt(_0x146012(0x11b)) +
        -parseInt(_0x146012(0x132));
      if (_0x534c93 === _0x3502e5) break;
      else _0x4dee70["push"](_0x4dee70["shift"]());
    } catch (_0x38ec28) {
      _0x4dee70["push"](_0x4dee70["shift"]());
    }
  }
})(_0x1e7c, 0x573f1);
const input = document["querySelector"](_0x13f5e9(0x120)),
  srchbtn = document[_0x13f5e9(0x10f)](_0x13f5e9(0x130)),
  card = document[_0x13f5e9(0x10f)](".card"),
  Nbtn = document[_0x13f5e9(0x10f)](_0x13f5e9(0x12e)),
  audiosrc = document[_0x13f5e9(0x10f)](_0x13f5e9(0x144));
let isplaying = ![],
  mainURl = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";
srchbtn[_0x13f5e9(0x13d)](_0x13f5e9(0x13b), (_0x3a32a3) => {
  const _0x18d52b = _0x13f5e9;
  _0x3a32a3["preventDefault"]();
  let _0x2cf2b5 = input[_0x18d52b(0x113)];
  console[_0x18d52b(0x126)](_0x2cf2b5),
    fetch(mainURl + _0x2cf2b5, {
      method: _0x18d52b(0x133),
      headers: {
        "x-rapidapi-key": _0x18d52b(0x138),
        "x-rapidapi-host": _0x18d52b(0x122),
      },
    })
      [_0x18d52b(0x131)]((_0x3e01de) => _0x3e01de[_0x18d52b(0x129)]())
      ["then"]((_0x201f6f) => {
        const _0x3425e1 = _0x18d52b;
        console[_0x3425e1(0x126)](_0x201f6f),
          (Urlnext = _0x201f6f["next"][_0x3425e1(0x121)](0x1e)),
          console[_0x3425e1(0x126)](Urlnext),
          Showdata(_0x201f6f);
      })
      ["catch"]((_0x28ee7c) => {
        const _0x57a810 = _0x18d52b;
        console[_0x57a810(0x110)](_0x28ee7c);
      });
});
let Showdata = (_0x140ad8) => {
  const _0x355bc5 = _0x13f5e9,
    _0xb25d36 = document["querySelector"](".music_container");
  _0xb25d36["innerHTML"] = "";
  for (
    let _0x3896eb = 0x0;
    _0x3896eb < _0x140ad8[_0x355bc5(0x123)][_0x355bc5(0x146)];
    _0x3896eb++
  ) {
    const _0x1bba8b = document[_0x355bc5(0x143)](_0x355bc5(0x11a));
    _0x1bba8b["value"] = _0x355bc5(0x114);
    const _0x4101c0 = document["createElement"](_0x355bc5(0x12d));
    _0x4101c0["ad"];
    const _0x26f724 = _0x140ad8[_0x355bc5(0x123)][_0x3896eb];
    let _0x4010aa, _0x3b6ea6, _0x4f641d, _0x5c94b2;
    ([_0x4010aa, _0x3b6ea6, _0x4f641d, _0x5c94b2] = [
      _0x26f724["title"],
      _0x26f724[_0x355bc5(0x136)][_0x355bc5(0x125)],
      _0x26f724[_0x355bc5(0x115)][_0x355bc5(0x11c)],
      _0x26f724[_0x355bc5(0x13c)],
    ]),
      (_0x4101c0[_0x355bc5(0x141)] =
        "\x0a\x20\x20\x20\x20<div\x20class=\x22card\x22\x20style=\x22width:\x2018rem;\x22>\x0a\x20\x20\x20\x20<img\x20class=\x22card-img-top\x22\x20src=\x22" +
        _0x3b6ea6 +
        "\x22\x20alt=\x22Card\x20image\x20cap\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22card-body\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h3\x20class=\x22card-title\x20font-weight-bold\x22>" +
        _0x4010aa +
        _0x355bc5(0x11e) +
        _0x4f641d +
        "</h6>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22musicControls\x22>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20<i\x20class=\x22fas\x20fa-backward\x20\x22\x20id=\x22prev\x22\x20title=\x22previous\x22></i>\x20-->\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22play_btn\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<i\x20class=\x22\x20fas\x20fa-play\x20play\x22\x20\x20data-image=\x22" +
        _0x3b6ea6 +
        _0x355bc5(0x13f) +
        _0x4010aa +
        _0x355bc5(0x117) +
        _0x5c94b2 +
        _0x355bc5(0x13e) +
        _0x5c94b2 +
        "\x22\x20class=\x22audioplayer\x22\x20conyrols></audio>-->\x0a\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x20\x0a\x20\x20\x20"),
      _0x4101c0[_0x355bc5(0x12a)](_0x1bba8b),
      _0xb25d36[_0x355bc5(0x137)](_0x4101c0),
      console[_0x355bc5(0x126)](_0x4010aa);
  }
  let _0x70a934 = document["querySelectorAll"](_0x355bc5(0x11d));
  for (
    let _0x5a1dbf = 0x0;
    _0x5a1dbf < _0x70a934[_0x355bc5(0x146)];
    _0x5a1dbf++
  ) {
    const _0x4613af = () => {
        const _0x222a04 = _0x355bc5;
        isplaying = !![];
        var _0x15e8dc = event[_0x222a04(0x118)][_0x222a04(0x10d)](
          _0x222a04(0x123)
        );
        audiosrc[_0x222a04(0x112)](_0x222a04(0x13a), _0x15e8dc),
          event[_0x222a04(0x139)](),
          audiosrc["play"](),
          _0x70a934[_0x5a1dbf][_0x222a04(0x140)][_0x222a04(0x142)](
            _0x222a04(0x116),
            _0x222a04(0x10e)
          );
      },
      _0x23aa36 = () => {
        const _0x12fbf2 = _0x355bc5;
        console[_0x12fbf2(0x126)](_0x12fbf2(0x12b)),
          (isplaying = ![]),
          audiosrc[_0x12fbf2(0x12f)](),
          _0x70a934[_0x5a1dbf]["classList"][_0x12fbf2(0x142)](
            "fa-pause",
            "fa-play"
          );
      };
    _0x70a934[_0x5a1dbf][_0x355bc5(0x13d)]("click", (_0x31f5e6) => {
      const _0x38ee53 = _0x355bc5;
      console[_0x38ee53(0x126)](_0x38ee53(0x12c)),
        isplaying ? _0x23aa36() : _0x4613af();
    });
  }
};
Nbtn[_0x13f5e9(0x13d)](_0x13f5e9(0x13b), (_0x738af1) => {
  const _0x5aa4b8 = _0x13f5e9;
  _0x738af1[_0x5aa4b8(0x11f)](),
    fetch(mainURl + Urlnext, {
      method: "GET",
      headers: {
        "x-rapidapi-key": _0x5aa4b8(0x138),
        "x-rapidapi-host": _0x5aa4b8(0x122),
      },
    })
      ["then"]((_0x1d6aa8) => _0x1d6aa8[_0x5aa4b8(0x129)]())
      [_0x5aa4b8(0x131)]((_0x275f47) => {
        const _0x49b50f = _0x5aa4b8;
        console["log"](_0x275f47),
          Showdata(_0x275f47),
          (Urlnext = _0x275f47[_0x49b50f(0x124)][_0x49b50f(0x121)](0x1e));
      })
      [_0x5aa4b8(0x135)]((_0x48374b) => {
        const _0x217dd = _0x5aa4b8;
        console[_0x217dd(0x110)](_0x48374b);
      }),
    console[_0x5aa4b8(0x126)](Urlnext);
});
