function _0x41e3(_0x2468b0, _0x1f0bc9) {
  const _0x41743e = _0x4174();
  return (
    (_0x41e3 = function (_0x41e313, _0x45c576) {
      _0x41e313 = _0x41e313 - 0xcf;
      let _0x2f9096 = _0x41743e[_0x41e313];
      return _0x2f9096;
    }),
    _0x41e3(_0x2468b0, _0x1f0bc9)
  );
}
const _0x580d74 = _0x41e3;
(function (_0x4c240d, _0x52882b) {
  const _0x53cab3 = _0x41e3,
    _0x2c543d = _0x4c240d();
  while (!![]) {
    try {
      const _0x42c179 =
        (parseInt(_0x53cab3(0x125)) / 0x1) *
          (-parseInt(_0x53cab3(0x121)) / 0x2) +
        parseInt(_0x53cab3(0xfa)) / 0x3 +
        -parseInt(_0x53cab3(0xf6)) / 0x4 +
        (-parseInt(_0x53cab3(0xd0)) / 0x5) *
          (-parseInt(_0x53cab3(0x116)) / 0x6) +
        (-parseInt(_0x53cab3(0x136)) / 0x7) *
          (-parseInt(_0x53cab3(0x139)) / 0x8) +
        parseInt(_0x53cab3(0xe9)) / 0x9 +
        parseInt(_0x53cab3(0x103)) / 0xa;
      if (_0x42c179 === _0x52882b) break;
      else _0x2c543d["push"](_0x2c543d["shift"]());
    } catch (_0x5a089d) {
      _0x2c543d["push"](_0x2c543d["shift"]());
    }
  }
})(_0x4174, 0x9a848);
import { sounds } from "/modules/sounds.js";
const canvas = document[_0x580d74(0x129)](_0x580d74(0xdf)),
  ctx = canvas[_0x580d74(0x13f)]("2d"),
  rows = 0xa,
  cols = 0x11,
  squareSize = 0x32,
  padding = squareSize;
(canvas["width"] = cols * squareSize + padding * 0x2),
  (canvas[_0x580d74(0xea)] = rows * squareSize + padding * 0x2);
let scale = 0x1;
const link = document[_0x580d74(0xd4)]("#link");
link[_0x580d74(0x130)](_0x580d74(0x12b), () => {
  const _0x573668 = _0x580d74;
  (document[_0x573668(0xd4)](_0x573668(0xdc))[_0x573668(0xfb)][
    _0x573668(0xe6)
  ] = _0x573668(0xd2)),
    sounds[_0x573668(0x11f)]["play"](),
    setTimeout(() => {
      const _0x420c3d = _0x573668;
      (document["querySelector"](_0x420c3d(0xdc))[_0x420c3d(0xfb)][
        "opacity"
      ] = 0x0),
        document["querySelector"](_0x420c3d(0x140))[_0x420c3d(0x135)][
          _0x420c3d(0xfd)
        ](_0x420c3d(0xf4)),
        (document[_0x420c3d(0xd4)](_0x420c3d(0x140))[_0x420c3d(0xfb)][
          _0x420c3d(0x10b)
        ] = 0x0),
        (document[_0x420c3d(0xd4)]("#error")["innerText"] = ""),
        (document[_0x420c3d(0xd4)]("#link")[_0x420c3d(0xe8)] = "");
    }, 0x3e8),
    setTimeout(() => {
      const _0x320e2e = _0x573668;
      (document[_0x320e2e(0xd4)]("#overlay")[_0x320e2e(0xfb)][
        _0x320e2e(0x10b)
      ] = 0x1),
        (document[_0x320e2e(0xd4)]("#intro")["style"][_0x320e2e(0x10b)] = 0x0),
        document[_0x320e2e(0xd4)]("#intro>img")["classList"][_0x320e2e(0xfd)](
          _0x320e2e(0xe2)
        );
    }, 0x44c),
    setTimeout(() => {
      const _0x29c921 = _0x573668;
      (document["querySelector"](_0x29c921(0x140))[_0x29c921(0xfb)][
        _0x29c921(0x12f)
      ] = "none"),
        (document[_0x29c921(0xd4)](_0x29c921(0xdc))["style"][_0x29c921(0x12f)] =
          _0x29c921(0xed));
    }, 0x2328);
});
function updateScale() {
  const _0x495d86 = _0x580d74;
  (scale = Math[_0x495d86(0x101)](
    0x1,
    window["innerWidth"] / canvas[_0x495d86(0x10e)],
    window[_0x495d86(0xe5)] / canvas[_0x495d86(0xea)]
  )),
    (canvas[_0x495d86(0xfb)][_0x495d86(0xe6)] = _0x495d86(0xdd) + scale + ")"),
    (canvas[_0x495d86(0xfb)][_0x495d86(0xd9)] = "center"),
    console[_0x495d86(0xe1)](
      window[_0x495d86(0xd7)] > window["innerHeight"]
        ? _0x495d86(0x11c)
        : _0x495d86(0x13e)
    );
  const _0x393cf2 = document["querySelector"]("#info");
  _0x393cf2[_0x495d86(0xfb)]["flexDirection"] =
    window[_0x495d86(0xd7)] > window["innerHeight"]
      ? _0x495d86(0x11c)
      : _0x495d86(0x13e);
  if (window[_0x495d86(0xe5)] < 0x1c2) {
    const _0x4085aa = document[_0x495d86(0xd4)](_0x495d86(0x13b));
    (_0x4085aa[_0x495d86(0xfb)]["display"] = "block"),
      (canvas[_0x495d86(0xfb)]["transform"] = _0x495d86(0x10a)),
      (canvas[_0x495d86(0xfb)]["transformOrigin"] = "top");
  }
}
window[_0x580d74(0x130)]("resize", updateScale), updateScale();
function getEventPos(_0x41da35) {
  const _0x54cdb4 = _0x580d74,
    _0x57e5b1 = canvas[_0x54cdb4(0x126)](),
    _0x39778c = canvas[_0x54cdb4(0x10e)] / _0x57e5b1["width"],
    _0x541b86 = canvas[_0x54cdb4(0xea)] / _0x57e5b1[_0x54cdb4(0xea)];
  return _0x41da35[_0x54cdb4(0x110)]
    ? {
        x:
          (_0x41da35[_0x54cdb4(0x110)][0x0][_0x54cdb4(0x113)] -
            _0x57e5b1[_0x54cdb4(0x132)]) *
          _0x39778c,
        y:
          (_0x41da35[_0x54cdb4(0x110)][0x0][_0x54cdb4(0x118)] -
            _0x57e5b1[_0x54cdb4(0xe4)]) *
          _0x541b86,
      }
    : {
        x: (_0x41da35[_0x54cdb4(0x113)] - _0x57e5b1["left"]) * _0x39778c,
        y:
          (_0x41da35[_0x54cdb4(0x118)] - _0x57e5b1[_0x54cdb4(0xe4)]) *
          _0x541b86,
      };
}
const offsetX = padding,
  offsetY = padding;
let grid,
  isDragging,
  startX,
  startY,
  currentX,
  currentY,
  selectedSquares,
  timeLeft,
  timerId;
_0x580d74(0xeb) in navigator &&
  navigator[_0x580d74(0xeb)]
    [_0x580d74(0x138)](_0x580d74(0xd1))
    [_0x580d74(0xf3)]((_0x39c0dc) =>
      console["log"](_0x580d74(0x131), _0x39c0dc)
    )
    [_0x580d74(0x124)]((_0x3a5025) =>
      console["log"]("Service\x20Worker\x20registration\x20failed:", _0x3a5025)
    );
function startGame() {
  const _0x3cf9de = _0x580d74,
    _0x2b94a9 = document[_0x3cf9de(0xd4)]("#pageNotFound");
  (_0x2b94a9[_0x3cf9de(0xfb)][_0x3cf9de(0x12f)] = "none"),
    (overlay["style"][_0x3cf9de(0x12f)] = _0x3cf9de(0xed)),
    initGame();
}
function initGame() {
  const _0x2ac4b3 = _0x580d74;
  (grid = Array[_0x2ac4b3(0x137)]({ length: rows }, (_0x4a0cb0, _0x39287e) =>
    Array[_0x2ac4b3(0x137)](
      { length: cols },
      (_0x263d50, _0x1a7c37) =>
        new Square(
          offsetX + _0x1a7c37 * squareSize,
          offsetY + _0x39287e * squareSize,
          squareSize
        )
    )
  )),
    (timeLeft = 0x78),
    (isDragging = ![]),
    (selectedSquares = []),
    drawGrid(),
    updateScore(),
    updateTimer(),
    (sounds["bgm"][_0x2ac4b3(0x12a)] = !![]),
    sounds[_0x2ac4b3(0x11a)]["play"]();
}
class Square {
  constructor(_0x10b642, _0xc555f3, _0x5db71f) {
    const _0x1060d0 = _0x580d74;
    (this["x"] = _0x10b642),
      (this["y"] = _0xc555f3),
      (this["size"] = _0x5db71f),
      (this[_0x1060d0(0xf5)] =
        Math["floor"](Math[_0x1060d0(0xf9)]() * 0x9) + 0x1),
      (this[_0x1060d0(0x115)] = !![]);
  }
  [_0x580d74(0x12d)]() {
    const _0x628dd4 = _0x580d74;
    return {
      cx: this["x"] + this[_0x628dd4(0x111)] / 0x2,
      cy: this["y"] + this[_0x628dd4(0x111)] / 0x2,
    };
  }
  ["draw"](_0x5552c2 = _0x580d74(0xd8)) {
    const _0x2c33ed = _0x580d74;
    (ctx["fillStyle"] = _0x5552c2),
      ctx["fillRect"](
        this["x"],
        this["y"],
        this["size"],
        this[_0x2c33ed(0x111)]
      ),
      (ctx[_0x2c33ed(0xfe)] = "#000"),
      ctx[_0x2c33ed(0x10d)](
        this["x"],
        this["y"],
        this[_0x2c33ed(0x111)],
        this[_0x2c33ed(0x111)]
      ),
      this[_0x2c33ed(0x115)] &&
        ((ctx[_0x2c33ed(0x104)] = _0x2c33ed(0xff)),
        (ctx["font"] = this[_0x2c33ed(0x111)] / 0x2 + _0x2c33ed(0x109)),
        (ctx[_0x2c33ed(0x12c)] = _0x2c33ed(0xde)),
        (ctx[_0x2c33ed(0x112)] = _0x2c33ed(0x122)),
        ctx[_0x2c33ed(0xdb)](
          this[_0x2c33ed(0xf5)],
          this["x"] + this[_0x2c33ed(0x111)] / 0x2,
          this["y"] + this[_0x2c33ed(0x111)] / 0x2
        ));
  }
}
function drawGrid(_0x531061 = [], _0x2d54d8 = _0x580d74(0xd8)) {
  const _0x5a9b42 = _0x580d74;
  ctx["clearRect"](0x0, 0x0, canvas[_0x5a9b42(0x10e)], canvas[_0x5a9b42(0xea)]),
    grid["forEach"]((_0x347035) =>
      _0x347035[_0x5a9b42(0xec)]((_0x4671c1) => {
        const _0x5f4f76 = _0x5a9b42,
          _0x114f78 = _0x531061[_0x5f4f76(0xef)](_0x4671c1);
        _0x4671c1[_0x5f4f76(0x100)](_0x114f78 ? _0x2d54d8 : _0x5f4f76(0xd8));
      })
    );
}
function updateScore() {
  const _0x4bceb3 = _0x580d74,
    _0x2b985e = grid[_0x4bceb3(0xd3)]()[_0x4bceb3(0x108)](
      (_0x17ec9b) => !_0x17ec9b["active"]
    )[_0x4bceb3(0x119)];
  document[_0x4bceb3(0x129)](_0x4bceb3(0xf0))["textContent"] =
    _0x2b985e + "\x20수";
}
function updateTimer() {
  const _0x94e6f4 = _0x580d74,
    _0x2ea487 = Math[_0x94e6f4(0x106)](timeLeft / 0x3c),
    _0x53d747 = timeLeft % 0x3c;
  document[_0x94e6f4(0x129)]("timer")[_0x94e6f4(0xee)] =
    _0x94e6f4(0xd5) +
    _0x2ea487 +
    ":" +
    _0x53d747[_0x94e6f4(0x105)]()[_0x94e6f4(0x10f)](0x2, "0");
  if (timeLeft > 0x0) timeLeft--, setTimeout(updateTimer, 0x3e8);
  else {
    const _0x1c90b9 = grid[_0x94e6f4(0xd3)]()[_0x94e6f4(0x108)](
        (_0x47870e) => !_0x47870e[_0x94e6f4(0x115)]
      )[_0x94e6f4(0x119)],
      _0x24fac6 = document[_0x94e6f4(0xd4)](
        "#overlay\x20>\x20.container\x20>\x20#overlayMessage"
      );
    (document[_0x94e6f4(0xd4)](_0x94e6f4(0x102))[_0x94e6f4(0xe8)] =
      _0x94e6f4(0x120)),
      (_0x24fac6[_0x94e6f4(0xe8)] = _0x1c90b9 + "\x20수"),
      (overlay[_0x94e6f4(0xfb)][_0x94e6f4(0x12f)] = _0x94e6f4(0x11d)),
      sounds[_0x94e6f4(0x11a)]["pause"](),
      (sounds[_0x94e6f4(0x11a)]["currentTime"] = 0x0),
      sounds["over"]["play"]();
  }
}
function handleStart(_0x38d38c) {
  _0x38d38c["preventDefault"](), (isDragging = !![]);
  const _0x42f070 = getEventPos(_0x38d38c);
  (startX = _0x42f070["x"]), (startY = _0x42f070["y"]);
}
function handleMove(_0x480ecb) {
  const _0x2e7800 = _0x580d74;
  if (!isDragging) return;
  const _0x58ef58 = getEventPos(_0x480ecb);
  (currentX = _0x58ef58["x"]), (currentY = _0x58ef58["y"]);
  const _0x3fb52d = Math[_0x2e7800(0x101)](startX, currentX),
    _0x5c2fe6 = Math["max"](startX, currentX),
    _0x108015 = Math[_0x2e7800(0x101)](startY, currentY),
    _0x3d5025 = Math[_0x2e7800(0x133)](startY, currentY);
  let _0x3a886 = 0x0;
  (selectedSquares = []),
    grid[_0x2e7800(0xec)]((_0x5e9faf) =>
      _0x5e9faf[_0x2e7800(0xec)]((_0xe1287a) => {
        const _0x5bf94d = _0x2e7800,
          { cx: _0xc2dd38, cy: _0x301dff } = _0xe1287a["getCenter"]();
        _0xc2dd38 >= _0x3fb52d &&
          _0xc2dd38 <= _0x5c2fe6 &&
          _0x301dff >= _0x108015 &&
          _0x301dff <= _0x3d5025 &&
          _0xe1287a[_0x5bf94d(0x115)] &&
          (selectedSquares[_0x5bf94d(0x13c)](_0xe1287a),
          (_0x3a886 += _0xe1287a["value"]));
      })
    );
  const _0x14315a = _0x3a886 === 0xa ? _0x2e7800(0x107) : "#ddd";
  drawGrid(selectedSquares, _0x14315a),
    (ctx[_0x2e7800(0xfe)] = _0x2e7800(0x11b)),
    (ctx[_0x2e7800(0xcf)] = 0x2),
    ctx[_0x2e7800(0x10d)](startX, startY, currentX - startX, currentY - startY);
}
function handleEnd() {
  const _0x52ded1 = _0x580d74;
  isDragging = ![];
  let _0x37ef28 = selectedSquares[_0x52ded1(0x114)](
    (_0xb19230, _0x3ad4b2) => _0xb19230 + _0x3ad4b2["value"],
    0x0
  );
  if (_0x37ef28 === 0xa) {
    selectedSquares[_0x52ded1(0xec)](
      (_0x5b36dc) => (_0x5b36dc[_0x52ded1(0x115)] = ![])
    ),
      updateScore();
    const _0x1fa038 = Math[_0x52ded1(0x106)](Math["random"]() * 0x4) + 0x1,
      _0x1f584a = new Audio(_0x52ded1(0xf7) + _0x1fa038 + _0x52ded1(0xd6));
    _0x1f584a[_0x52ded1(0x117)]();
  }
  drawGrid();
}
canvas["addEventListener"](_0x580d74(0x123), handleStart),
  canvas[_0x580d74(0x130)](_0x580d74(0xf1), handleMove),
  canvas[_0x580d74(0x130)](_0x580d74(0x12e), handleEnd),
  canvas[_0x580d74(0x130)](_0x580d74(0x134), handleStart),
  canvas[_0x580d74(0x130)](_0x580d74(0xf2), handleMove),
  canvas["addEventListener"](_0x580d74(0x10c), handleEnd),
  document[_0x580d74(0x11e)][_0x580d74(0x130)](
    _0x580d74(0xf2),
    (_0x474466) => {
      const _0x26b5da = _0x580d74;
      _0x474466[_0x26b5da(0xf8)]();
    },
    { passive: ![] }
  );
function copyGameUrl() {
  const _0xc8d100 = _0x580d74,
    _0x20a327 = window[_0xc8d100(0x13d)][_0xc8d100(0x13a)];
  navigator[_0xc8d100(0xfc)]
    [_0xc8d100(0xe7)](_0x20a327)
    [_0xc8d100(0xf3)](() => {
      alert("Game\x20URL\x20copied\x20to\x20clipboard!");
    })
    [_0xc8d100(0x124)]((_0x386d94) => {
      const _0x3b99dc = _0xc8d100;
      console["error"](_0x3b99dc(0xe3), _0x386d94);
    });
}
const bgm = new Audio(_0x580d74(0x128));
bgm[_0x580d74(0xe0)] = 0.5;
function pauseAudio() {
  const _0x240eb0 = _0x580d74;
  bgm[_0x240eb0(0xda)]();
}
const startBtn = document["querySelector"](_0x580d74(0x102));
startBtn[_0x580d74(0x130)]("click", () => {
  startGame();
});
const copyGameBtn = document[_0x580d74(0xd4)](_0x580d74(0x127));
copyGameBtn[_0x580d74(0x130)](_0x580d74(0x12b), () => {
  copyGameUrl();
});
function _0x4174() {
  const _0x3044ed = [
    "textContent",
    "includes",
    "score",
    "mousemove",
    "touchmove",
    "then",
    "target",
    "value",
    "4810672hMSCro",
    "/sounds/nice",
    "preventDefault",
    "random",
    "185127jnTLZf",
    "style",
    "clipboard",
    "add",
    "strokeStyle",
    "#000",
    "draw",
    "min",
    "#startBtn",
    "2777720AgapDl",
    "fillStyle",
    "toString",
    "floor",
    "#b0e57c",
    "filter",
    "px\x20Arial",
    "scale(0.5)",
    "opacity",
    "touchend",
    "strokeRect",
    "width",
    "padStart",
    "touches",
    "size",
    "textBaseline",
    "clientX",
    "reduce",
    "active",
    "78078ByxWni",
    "play",
    "clientY",
    "length",
    "bgm",
    "grey",
    "row",
    "flex",
    "body",
    "intro",
    "재수하기",
    "19948pecIbM",
    "middle",
    "mousedown",
    "catch",
    "21XKBKFS",
    "getBoundingClientRect",
    "#copyGameUrl",
    "/sounds/mte-world.m4a",
    "getElementById",
    "loop",
    "click",
    "textAlign",
    "getCenter",
    "mouseup",
    "display",
    "addEventListener",
    "Service\x20Worker\x20registered:",
    "left",
    "max",
    "touchstart",
    "classList",
    "1333283ggLNHC",
    "from",
    "register",
    "32PncaXn",
    "href",
    "#container",
    "push",
    "location",
    "column",
    "getContext",
    "#pageNotFound",
    "lineWidth",
    "185btCYIG",
    "/service-worker.js",
    "translateX(0)",
    "flat",
    "querySelector",
    "시간:\x20",
    ".mp3",
    "innerWidth",
    "#fff",
    "transformOrigin",
    "pause",
    "fillText",
    "#intro",
    "scale(",
    "center",
    "gameCanvas",
    "volume",
    "log",
    "mte",
    "Failed\x20to\x20copy\x20URL:\x20",
    "top",
    "innerHeight",
    "transform",
    "writeText",
    "innerText",
    "4159692BHJFob",
    "height",
    "serviceWorker",
    "forEach",
    "none",
  ];
  _0x4174 = function () {
    return _0x3044ed;
  };
  return _0x4174();
}
