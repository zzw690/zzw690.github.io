/* ============================================================
   数据层：演示企业（脱敏示例）
   ============================================================ */
const DEMO = [
  {
    name: "沪江精工制造（上海）有限公司",
    creditCode: "91310115****2026XA",
    industry: "制造业 · 小微企业",
    tags: ["行政处罚 ×2", "经营异常 ×1"],
    platforms: [
      { label: "信用中国", count: 2, unit: "条行政处罚公示", url: "https://www.creditchina.gov.cn", warn: true },
      { label: "国家企业信用信息公示系统", count: 1, unit: "条经营异常名录", url: "https://www.gsxt.gov.cn", warn: true },
      { label: "中国裁判文书网", count: 0, unit: "条涉诉记录", url: "https://wenshu.court.gov.cn", warn: false },
      { label: "中国执行信息公开网", count: 0, unit: "条被执行/失信记录", url: "https://zxgk.court.gov.cn", warn: false }
    ],
    records: [
      {
        title: "市场监管部门行政处罚：广告宣传用语不规范，罚款 2 万元",
        type: "行政处罚", typeBadge: "badge-blue",
        source: "信用中国", status: "公示中", statusBadge: "badge-red",
        questions: [
          {
            key: "wrong",
            q: "这条公示的内容和你们公司的实际情况<em>对不上</em>吗？",
            hint: "<b>怎么判断：</b>找出当初那份《行政处罚决定书》，和网上公示的页面逐条对照——公司名称、处罚文号、罚款金额、日期是否一致。如果处罚已经被撤销、变更过但网上还挂着旧的，也算「对不上」。<br><b>举例：</b>处罚决定书写的罚款是 1 万，公示页面写成 10 万 → 选「是」。"
          },
          {
            key: "severe",
            q: "这条处罚是否涉及这些「红线」领域：<em>食品药品安全、生产安全事故、偷逃税款巨大、恶意拖欠员工工资</em>？",
            hint: "<b>什么是红线领域：</b>国家规定的严重失信行为，法定公示期内不能提前修复，谁承诺能删谁就是骗子。<br><b>怎么判断：</b>看处罚决定书的「违法事实」部分。一般的广告用语不规范、小额环保罚款通常<b>不属于</b>红线；出了安全事故、涉及食品药品安全的通常<b>属于</b>。"
          },
          {
            key: "fulfilled",
            q: "罚款<em>交清了</em>吗？要求整改的地方<em>改完并通过检查</em>了吗？",
            hint: "<b>怎么判断：</b>找两样东西——① 缴款凭证或罚没票据；② 整改报告、复查意见或行政机关的验收文件。两样都齐，才算「履行完毕」。<br><b>注意：</b>只交了钱但没整改，或整改了但没留证据，都算没完成。"
          },
          {
            key: "expired",
            q: "这条处罚在网上<em>挂够 3 个月</em>了吗？",
            hint: "<b>怎么查：</b>打开公示页面，上面标有「公示日期」或「公示期」。一般行政处罚的最短公示期是 3 个月——挂满 3 个月才有资格申请修复。<br><b>举例：</b>8 月 1 日开始公示，11 月 1 日之后才满足条件。"
          }
        ],
        preset: { wrong: false, severe: false, fulfilled: true, expired: true }
      },
      {
        title: "生态环境部门行政处罚：危废暂存不规范，罚款 5 万元",
        type: "行政处罚", typeBadge: "badge-blue",
        source: "信用中国", status: "公示中", statusBadge: "badge-red",
        questions: [
          {
            key: "wrong",
            q: "这条公示的内容和你们公司的实际情况<em>对不上</em>吗？",
            hint: "<b>怎么判断：</b>对照《行政处罚决定书》看公示页面的名称、文号、金额、日期。处罚已撤销或已变更但网上还是旧信息的，也算「对不上」。"
          },
          {
            key: "severe",
            q: "这条处罚是否涉及「红线」领域（<em>食品药品、安全事故、偷逃税巨大、恶意欠薪</em>）？",
            hint: "<b>怎么判断：</b>看处罚决定书的「违法事实」。一般的环保管理不规范罚款通常<b>不属于</b>红线领域；造成环境事故或严重后果的才可能属于。"
          },
          {
            key: "fulfilled",
            q: "罚款交清了吗？整改<em>验收通过</em>了吗？",
            hint: "<b>怎么判断：</b>需要①缴款凭证 + ②整改验收材料（复查意见、验收单等）。环保部门这类处罚通常要求现场复查合格才算完成。"
          },
          {
            key: "expired",
            q: "这条处罚在网上<em>挂够 3 个月</em>了吗？",
            hint: "<b>怎么查：</b>看公示页面的「公示日期」。没挂满最短公示期的，申请了也会被退回——但可以先把材料准备好，期满当天就提交。"
          }
        ],
        preset: { wrong: false, severe: false, fulfilled: true, expired: false }
      },
      {
        title: "未按规定报送年度报告，被列入经营异常名录",
        type: "经营异常", typeBadge: "badge-amber",
        source: "国家企业信用信息公示系统", status: "列异中", statusBadge: "badge-red",
        questions: [
          {
            key: "wrong",
            q: "被列异这件事和你们实际情况<em>对不上</em>吗？（比如年报其实已经报过了）",
            hint: "<b>怎么判断：</b>登录国家企业信用信息公示系统，查「年度报告」栏目——如果该年份年报状态是「已公示」，说明列异可能有误。<br><b>举例：</b>系统显示 2025 年年报已公示，但仍因「未年报」被列异 → 选「是」。"
          },
          {
            key: "fulfilled",
            q: "欠的「作业」<em>补上了</em>吗？（年报已补报并公示 / 地址变更已办好 / 场所证明已备齐）",
            hint: "<b>怎么判断：</b>① 没报年报的 → 补报并公示；② 地址联系不上的 → 办好住所变更登记或准备场地使用证明；③ 信息没公示的 → 完成公示。哪条原因列异，就补哪条。"
          }
        ],
        preset: { wrong: false, fulfilled: true }
      }
    ]
  },
  {
    name: "悦庭餐饮管理（上海）有限公司",
    creditCode: "91310112****8831YB",
    industry: "住宿餐饮业 · 小微企业",
    tags: ["疑似信息错误 ×1"],
    platforms: [
      { label: "信用中国", count: 1, unit: "条行政处罚公示", url: "https://www.creditchina.gov.cn", warn: true },
      { label: "国家企业信用信息公示系统", count: 0, unit: "条经营异常名录", url: "https://www.gsxt.gov.cn", warn: false },
      { label: "中国裁判文书网", count: 0, unit: "条涉诉记录", url: "https://wenshu.court.gov.cn", warn: false },
      { label: "中国执行信息公开网", count: 0, unit: "条被执行/失信记录", url: "https://zxgk.court.gov.cn", warn: false }
    ],
    records: [
      {
        title: "消防行政处罚：罚款 1 万元——企业称罚款已缴且处罚决定已依法撤销，平台仍公示",
        type: "行政处罚", typeBadge: "badge-blue",
        source: "信用中国", status: "公示中（存疑）", statusBadge: "badge-amber",
        questions: [
          {
            key: "wrong",
            q: "这条公示和实际情况<em>对不上</em>吗？（比如处罚已经撤销、钱早就交了但网上还没更新）",
            hint: "<b>这家企业的典型情形：</b>处罚决定已被依法撤销，或者罚款缴清后平台迟迟没更新状态——这属于「信息错误」，要走的是<b>异议更正</b>程序，不是信用修复。<br><b>怎么判断：</b>手里有《撤销行政处罚决定书》或缴款凭证，但公示页面仍显示「处罚中/未履行」→ 选「是」。"
          },
          {
            key: "severe",
            q: "这条处罚涉及「红线」领域吗？（食品药品安全、安全事故等）",
            hint: "<b>怎么判断：</b>看处罚决定书的「违法事实」。普通消防器材摆放不规范的小额罚款通常不属于红线。"
          }
        ],
        preset: { wrong: true }
      }
    ]
  },
  {
    name: "恒安化工（江苏）有限公司",
    creditCode: "91320500****4107ZC",
    industry: "化工 · 中型企业",
    tags: ["严重失信 ×1", "司法失信 ×1"],
    platforms: [
      { label: "信用中国", count: 1, unit: "条严重行政处罚公示", url: "https://www.creditchina.gov.cn", warn: true },
      { label: "国家企业信用信息公示系统", count: 0, unit: "条经营异常名录", url: "https://www.gsxt.gov.cn", warn: false },
      { label: "中国裁判文书网", count: 1, unit: "条涉诉记录", url: "https://wenshu.court.gov.cn", warn: true },
      { label: "中国执行信息公开网", count: 1, unit: "条失信被执行人记录", url: "https://zxgk.court.gov.cn", warn: true }
    ],
    records: [
      {
        title: "应急管理部门重大行政处罚：安全生产事故负有主要责任，罚款 80 万元并责令停产整顿",
        type: "行政处罚", typeBadge: "badge-blue",
        source: "信用中国", status: "公示中", statusBadge: "badge-red",
        questions: [
          {
            key: "wrong",
            q: "这条公示和实际情况<em>对不上</em>吗？",
            hint: "<b>怎么判断：</b>对照《行政处罚决定书》核实公示页面的名称、文号、金额。"
          },
          {
            key: "severe",
            q: "这条处罚是不是<em>安全生产事故</em>造成的？",
            hint: "<b>怎么判断：</b>处罚决定书写了「生产安全事故责任」「责令停产整顿」等字样的，基本属于安全生产严重失信——法定公示期内<b>不能提前修复</b>，任何「花钱删记录」的承诺都是骗局。"
          }
        ],
        preset: { wrong: false, severe: true }
      },
      {
        title: "失信被执行人：拖欠供应商货款 120 万元，法院已发布失信信息",
        type: "司法失信", typeBadge: "badge-red",
        source: "中国执行信息公开网", status: "失信公示中", statusBadge: "badge-red",
        questions: [
          {
            key: "wrong",
            q: "这条失信公示和实际情况<em>对不上</em>吗？（比如钱其实已经还清了，但名单还没撤）",
            hint: "<b>怎么判断：</b>如果已经履行完毕，手里应有法院的《结案通知书》或执行完毕证明。有证明但名单还在 → 选「是」，走异议更正。"
          },
          {
            key: "fulfilled",
            q: "欠的钱<em>还清了</em>吗？或者，愿意坐下来和对方<em>谈一个还款方案</em>吗？",
            hint: "<b>为什么问这个：</b>债务不清，失信信息就无法删除，这是硬条件。<br><b>谈不拢怎么办：</b>可以先通过<b>商事调解</b>和对方谈分期还款——调解成功并履行后，同样可以申请删除失信信息，成本比硬扛低得多。"
          }
        ],
        preset: { wrong: false, fulfilled: false }
      }
    ]
  }
];

/* ============================================================
   规则引擎：律师三分类判断逻辑的代码化
   输出：repair（可依法修复）/ objection（异议更正）/
         reject（法定不可修复·拒接）/ pending（暂不满足条件·辅导达标）
   ============================================================ */
function judge(rec, ans) {
  if (ans.wrong === true) {
    return {
      kind: "objection", title: "路径 B · 异议更正（信息纠错）",
      text: "该条属于信息录入/更新错误，适用《征信业管理条例》异议处理程序，<b>不是信用修复</b>——两条程序不能混淆。",
      steps: [
        "收集证据：处罚撤销决定书、缴款凭证、结案证明等原始文书",
        "向信息提供单位及信用平台提交《信用信息异议申请表》及证明材料",
        "信息主体有权要求在 20 日内核查处理并书面答复",
        "异议不成立或逾期不处理的，可依法申请行政复议或提起行政诉讼"
      ]
    };
  }
  if (ans.severe === true) {
    return {
      kind: "reject", title: "路径 C · 法定不可修复 · 本所不予承接",
      text: "该记录属于严重失信范畴，法定公示期内<b>不得提前修复</b>。任何声称「花钱可删」的承诺均涉嫌违规甚至诈骗，本所坚决拒接此类委托，并如实告知企业。",
      steps: [
        "如实告知企业法定公示期限，杜绝非法中介幻想",
        "公示期满后依法自动停止公示，届时可协助核验更新",
        "现阶段重点转向合规整改与信用合规体系建设，防止新增失信"
      ]
    };
  }
  /* 有「不确定」或未作答 → 律师人工复核（免费初判，获客入口） */
  if (rec.questions.some(q => ans[q.key] === null || ans[q.key] === undefined)) {
    return {
      kind: "manual", title: "路径 D · 情况待核实 · 律师人工免费初判",
      text: "有些情况拿不准——这很正常，文书核查本来就需要专业训练。<b>把材料发给律师，15 分钟免费初判</b>，路径确认后再决定怎么办。",
      steps: [
        "拍下《行政处罚决定书》或公示页面截图，发给对接律师",
        "律师人工核对事实与程序，出具书面分诊意见",
        "路径确认后，再决定自行办理还是委托代理"
      ],
      cta: true
    };
  }
  if (rec.type === "经营异常") {
    if (ans.fulfilled === true) {
      return {
        kind: "repair", title: "路径 A · 移出经营异常名录",
        text: "列入事由已消除，符合移出条件，办理周期短、成功率高。",
        steps: [
          "补报未报年份年度报告并公示 / 完成住所变更登记",
          "准备《移出经营异常名录申请表》及证明材料",
          "向登记机关提交申请，20 日内核查并作出移出决定",
          "移出后核验公示系统信息同步更新"
        ]
      };
    }
    return {
      kind: "pending", title: "路径 A · 辅导达标后移出",
      text: "列异事由尚未消除，<b>先辅导企业完成法定义务</b>，再行申请移出。",
      steps: ["协助补报年报 / 办理住所变更 / 准备场所使用证明", "义务履行完成后启动移出申请"]
    };
  }
  if (rec.type === "司法失信") {
    if (ans.fulfilled === true) {
      return {
        kind: "repair", title: "路径 A · 司法失信信息删除",
        text: "履行完毕或达成执行和解并履行后，可依法申请删除失信信息。",
        steps: [
          "优先引入商事调解，与申请执行人协商还款方案",
          "取得法院结案/履行完毕证明",
          "向执行法院申请删除失信信息（法定期限内处理）",
          "同步向各信用平台申请信息更新"
        ]
      };
    }
    return {
      kind: "pending", title: "路径 A · 调解先行 · 源头化解",
      text: "债务未清偿前无法删除失信信息。建议<b>先启动商事调解</b>，以可履行的还款方案换取申请执行人配合，从根源消除失信事由。",
      steps: ["对接商事调解中心，制定分期还款方案", "调解协议司法确认后履行", "履行完毕后申请删除失信信息"]
    };
  }
  /* 行政处罚类 */
  if (ans.fulfilled === true && ans.expired === true) {
    return {
      kind: "repair", title: "路径 A · 可依法申请信用修复",
      text: "法定义务已履行、整改已完成、最短公示期已届满，<b>符合《信用修复管理办法》修复条件</b>，建议立即启动。",
      steps: [
        "起草《信用修复申请书》《信用承诺书》，律师进行材料法律审核",
        "证据组卷：缴款凭证、整改证明、合规制度文件",
        "向作出处罚的机关提交申请并跟进沟通",
        "申请被驳回的，评估提起行政复议或行政诉讼"
      ]
    };
  }
  if (ans.fulfilled === true && ans.expired === false) {
    return {
      kind: "pending", title: "路径 A · 条件临近成就 · 预约修复",
      text: "义务已履行，但<b>最短公示期尚未届满</b>，暂不能提交。建议提前备齐材料，公示期一满即第一时间申请，抢占融资/投标窗口。",
      steps: ["现在即完成材料组卷与法律审核", "设置公示期届满提醒", "届满当日提交修复申请"]
    };
  }
  return {
    kind: "pending", title: "路径 A · 辅导达标后修复",
    text: "法定义务尚未履行完毕，<b>修复申请必然被退回</b>。先辅导企业完成缴款与整改，再启动修复程序。",
    steps: ["辅导缴纳罚款 / 完成整改验收", "固化整改证据", "条件成就后提交修复申请"]
  };
}

/* ============================================================
   状态与渲染
   ============================================================ */
let current = null;         // 当前企业
let answers = {};           // { recordIdx: {key: bool} }
let verdicts = {};          // { recordIdx: verdict }

const $ = s => document.querySelector(s);

function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(t._timer); t._timer = setTimeout(() => t.classList.remove("show"), 2200);
}

function gotoScreen(name) {
  document.querySelectorAll(".nav button").forEach(b => b.classList.toggle("is-active", b.dataset.screen === name));
  document.querySelectorAll(".screen").forEach(s => s.classList.toggle("is-on", s.id === "screen-" + name));
  $(".main").scrollTop = 0;
}
document.querySelectorAll(".nav button").forEach(b => b.onclick = () => gotoScreen(b.dataset.screen));

/* ----- 屏 1：体检 ----- */
function renderDemoTags() {
  $("#demoTags").innerHTML = DEMO.map((d, i) =>
    `<button class="demo-tag" data-i="${i}" onclick="pickDemo(${i})">${d.name}<i>${d.tags.join(" · ")}</i></button>`
  ).join("");
}

function pickDemo(i) {
  current = DEMO[i]; answers = {}; verdicts = {};
  $("#searchInput").value = current.name;
  document.querySelectorAll(".demo-tag").forEach((t, j) => t.classList.toggle("is-active", j === i));
  renderCheck();
  renderTriage();
  toast("已完成跨平台信用信息调取（演示数据）");
}

function startCheck() {
  const v = $("#searchInput").value.trim();
  const i = DEMO.findIndex(d => v && d.name.includes(v.slice(0, 4)));
  if (i >= 0) pickDemo(i);
  else if (current) renderCheck(), toast("已刷新体检结果");
  else toast("演示版请先点击下方示例企业");
}

function renderCheck() {
  $("#checkEmpty").style.display = "none";
  $("#checkResult").style.display = "block";
  $("#checkCompanyName").textContent = current.name;
  $("#checkCompanyMeta").textContent = `${current.industry} · 统一社会信用代码 ${current.creditCode} · 体检时间 ${new Date().toLocaleDateString("zh-CN")}`;
  $("#statGrid").innerHTML = current.platforms.map(p => `
    <div class="stat-card ${p.count > 0 ? "warn" : "ok"}">
      <b>${p.count}</b>
      <span>${p.label}<br>${p.unit}</span>
      <a href="${p.url}" target="_blank" rel="noopener">前往官方平台核验 ↗</a>
    </div>`).join("");
  $("#recCount").textContent = current.records.length;
  $("#recTableBody").innerHTML = current.records.map((r, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${r.title}</td>
      <td><span class="badge ${r.typeBadge}">${r.type}</span></td>
      <td>${r.source}</td>
      <td><span class="badge ${r.statusBadge}">${r.status}</span></td>
    </tr>`).join("");
}

/* ----- 屏 2：分诊 ----- */
function renderTriage() {
  if (!current) { $("#triageEmpty").style.display = "block"; $("#triageList").innerHTML = ""; $("#triageActions").style.display = "none"; return; }
  $("#triageEmpty").style.display = "none";
  $("#triageActions").style.display = "block";
  $("#triageFor").textContent = `体检对象：${current.name}`;
  $("#triageList").innerHTML = current.records.map((r, i) => `
    <div class="panel triage-card" id="triage-${i}">
      <div class="triage-head">
        <h4>记录 ${i + 1} ｜ ${r.title}</h4>
        <span class="badge ${r.typeBadge}">${r.type}</span>
      </div>
      <div class="triage-desc">来源：${r.source} ｜ 状态：${r.status}</div>
      ${r.questions.map((q, qi) => `
        <div class="q-row">
          <span class="q">${q.q}</span>
          <button class="hint-toggle" title="看不懂？点我" onclick="toggleHint(${i},${qi})">?</button>
          <span class="seg" data-rec="${i}" data-key="${q.key}">
            <button onclick="setAns(${i},'${q.key}',false,this)">否</button>
            <button onclick="setAns(${i},'${q.key}',true,this)">是</button>
            <button onclick="setAns(${i},'${q.key}',null,this)">不确定</button>
          </span>
          <div class="hint" id="hint-${i}-${qi}">${q.hint}</div>
        </div>`).join("")}
      <div class="verdict" id="verdict-${i}"></div>
    </div>`).join("");
}

function toggleHint(i, qi) {
  const el = document.getElementById(`hint-${i}-${qi}`);
  if (el) el.classList.toggle("show");
}

function setAns(i, key, val, btn) {
  if (!answers[i]) answers[i] = {};
  answers[i][key] = val;
  const seg = btn.parentElement;
  seg.querySelectorAll("button").forEach(b => b.classList.remove("is-yes", "is-no", "is-unk"));
  btn.classList.add(val === true ? "is-yes" : val === false ? "is-no" : "is-unk");
  /* 该条问题全部作答后自动出结论 */
  const rec = current.records[i];
  const done = rec.questions.every(q => answers[i][q.key] !== undefined);
  if (done) showVerdict(i);
  else $("#verdict-" + i).classList.remove("show");
}

/* 官方办理入口（调研「信用修复一件事」线上服务整合） */
const ENTRY_LINKS = {
  repair: [
    { label: "信用中国 · 信用修复入口", url: "https://www.creditchina.gov.cn" },
    { label: "国家企业信用信息公示系统", url: "https://www.gsxt.gov.cn" }
  ],
  objection: [
    { label: "信用中国 · 异议申诉", url: "https://www.creditchina.gov.cn" },
    { label: "国家企业信用信息公示系统 · 异议申请", url: "https://www.gsxt.gov.cn" }
  ],
  manual: [
    { label: "信用中国", url: "https://www.creditchina.gov.cn" },
    { label: "中国执行信息公开网", url: "https://zxgk.court.gov.cn" }
  ]
};

function showVerdict(i) {
  const v = judge(current.records[i], answers[i]);
  verdicts[i] = v;
  const el = $("#verdict-" + i);
  el.className = "verdict show verdict-" + v.kind;
  const icon = { repair: "✅", objection: "🔄", reject: "⛔", pending: "🕐", manual: "🧑‍⚖️" }[v.kind];
  const links = ENTRY_LINKS[v.kind]
    ? `<div class="v-links">🔗 官方办理入口：${ENTRY_LINKS[v.kind].map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a>`).join("")}</div>`
    : "";
  const cta = v.cta
    ? `<div class="v-cta"><button class="btn btn-sm btn-primary" onclick="toast('已收到您的材料请求，律师将在 1 个工作日内与您联系（演示）')">📩 预约律师免费初判</button><span style="font-size:11px;opacity:.6">不承诺结果 · 不收取前期费用</span></div>`
    : "";
  el.innerHTML = `<h5>${icon} ${v.title}</h5><p>${v.text}</p><ul>${v.steps.map(s => `<li>${s}</li>`).join("")}</ul>${links}${cta}`;
}

function autoFill() {
  if (!current) return;
  current.records.forEach((r, i) => {
    if (!r.preset) return;   // 手动录入的记录无预填答案
    answers[i] = { ...r.preset };
    document.querySelectorAll(`.seg[data-rec="${i}"]`).forEach(seg => {
      const key = seg.dataset.key, val = r.preset[key];
      seg.querySelectorAll("button").forEach(b => b.classList.remove("is-yes", "is-no", "is-unk"));
      if (val !== undefined) {
        const btn = [...seg.querySelectorAll("button")].find(b => (b.textContent === "是") === val);
        if (btn) btn.classList.add(val ? "is-yes" : "is-no");
      }
    });
    showVerdict(i);
  });
  toast("规则引擎已完成全部分流判断");
}

/* ----- 屏 3：报告 ----- */
function buildReport(skipSave) {
  if (!current) { toast("请先完成信用体检"); gotoScreen("check"); return; }
  const doneIdx = Object.keys(verdicts);
  if (doneIdx.length === 0) { toast("请先完成智能分诊（或用一键预填）"); gotoScreen("triage"); return; }
  const kindName = { repair: "可依法修复", objection: "异议更正（信息纠错）", reject: "法定不可修复", pending: "辅导达标后启动", manual: "需律师人工复核" };
  const kindBadge = { repair: "badge-green", objection: "badge-blue", reject: "badge-red", pending: "badge-amber", manual: "badge-gray" };
  const today = new Date().toLocaleDateString("zh-CN");
  $("#reportHost").innerHTML = `
    <div class="report">
      <div class="report-head">
        <img src="${window.LOGO_B64}" alt="玺浩">
        <div>
          <h2>企业信用风险体检报告</h2>
          <p>上海玺浩律师事务所 · 信易修信用法律服务中心</p>
        </div>
      </div>
      <div class="report-sec">
        <h3>一、体检对象</h3>
        <dl class="kv">
          <dt>企业名称</dt><dd>${current.name}</dd>
          <dt>统一社会信用代码</dt><dd>${current.creditCode}</dd>
          <dt>行业 / 规模</dt><dd>${current.industry}</dd>
          <dt>体检日期</dt><dd>${today}</dd>
        </dl>
      </div>
      <div class="report-sec">
        <h3>二、跨平台信用记录总览</h3>
        <ul>${current.platforms.map(p => `<li>${p.label}：${p.count} ${p.unit}</li>`).join("")}</ul>
      </div>
      <div class="report-sec">
        <h3>三、分诊结论与建议路径</h3>
        ${current.records.map((r, i) => verdicts[i] ? `
          <p style="margin-bottom:6px"><b>记录 ${i + 1}</b>（${r.type} ｜ ${r.source}）<span class="badge ${kindBadge[verdicts[i].kind]}" style="margin-left:8px">${kindName[verdicts[i].kind]}</span></p>
          <p style="opacity:.78">${verdicts[i].text}</p>
          <ul>${verdicts[i].steps.map(s => `<li>${s}</li>`).join("")}</ul>
          <div style="height:10px"></div>` : `
          <p style="margin-bottom:6px"><b>记录 ${i + 1}</b>（${r.type}）<span class="badge badge-gray" style="margin-left:8px">未完成分诊</span></p>`).join("")}
      </div>
      <div class="report-sec">
        <h3>四、重要声明</h3>
        <p>本报告系依据公开信用信息作出的初步法律风险评估，不构成对修复结果的承诺。法定不可修复的严重失信信息，本所不予承接。正式法律意见以委托后出具的《信用风险法律评估报告》为准。</p>
      </div>
      <div class="report-foot">
        <b>上海玺浩律师事务所</b><br>中小微企业信用修复与异议更正一体化法律服务<br>报告编号：XYX-${Date.now().toString().slice(-8)} ｜ 出具日期：${today}
      </div>
    </div>
    <div class="print-tip no-print">💡 <b>导出说明</b>：「保存 PDF」由系统直接生成干净的 PDF 文件（无网址、无页码页脚），推荐用于交付企业；「打印」走浏览器打印对话框，如需纸质件请在其中取消勾选「页眉和页脚」。</div>`;
  $("#ctaRow").style.display = "grid";
  $("#feePanel").style.display = "block";
  $("#reportBtns").style.display = "flex";
  if (!skipSave) saveToHistory();
  renderProgress();
  gotoScreen("report");
  toast("报告已生成，可打印或保存");
}

/* ----- 屏 4：案件进度 ----- */
/* 分路径法律工作流管道：委托签约 → 按路径分流 → 救济兜底 */
function pipeStages(rec, v) {
  if (v.kind === "objection") return ["体检分诊", "委托签约", "证据收集", "提交异议申请", "核查答复（20日）", "更正核验 / 复议诉讼"];
  if (v.kind === "manual") return ["体检分诊", "律师人工初判", "路径确认", "委托签约", "按路径办理", "办结核验"];
  if (v.kind === "pending") return rec.type === "司法失信"
    ? ["体检分诊", "委托签约", "商事调解", "履行方案执行", "删除失信申请", "平台更新核验"]
    : ["体检分诊", "辅导达标 / 等公示期满", "材料组卷", "提交修复申请", "跟进沟通", "办结核验"];
  if (rec.type === "司法失信") return ["体检分诊", "委托签约", "商事调解", "履行方案执行", "删除失信申请", "平台更新核验"];
  if (rec.type === "经营异常") return ["体检分诊", "委托签约", "补报 / 变更登记", "提交移出申请", "核查决定（20日）", "信息更新核验"];
  return ["体检分诊", "委托签约", "材料组卷与法律审核", "提交修复申请", "跟进沟通", "办结核验"];
}

function pipeStage(kind) {
  /* 演示版：按分流结论给出管道当前所处阶段（1 = 委托签约待办；-1 为终止/拒接） */
  return { repair: 1, objection: 1, pending: 1, manual: 1, reject: -1 }[kind];
}

function renderProgress() {
  if (!current) return;
  const host = $("#progressHost");
  $("#progressEmpty").style.display = "none";
  $("#deadlinePanel").style.display = "block";
  host.innerHTML = current.records.map((r, i) => {
    const v = verdicts[i];
    if (!v) return `
      <div class="panel">
        <div class="panel-h"><div><h4 style="font-size:14px">记录 ${i + 1} ｜ ${r.title}</h4><p>尚未完成分诊，先到「智能分诊」页作答</p></div>
        <button class="btn btn-sm" onclick="gotoScreen('triage')">去分诊 →</button></div>
      </div>`;
    if (v.kind === "reject") return `
      <div class="panel">
        <div class="panel-h"><div><h4 style="font-size:14px">记录 ${i + 1} ｜ ${r.title}</h4><p>法定不可修复 · 本所不予承接，管道终止</p></div>
        <span class="badge badge-red">已拒接</span></div>
        <div class="pipe">${["体检分诊", "终止受理"].map((s, j) => `<div class="pipe-step ${j === 0 ? "blocked" : ""}">${s}</div>`).join("")}</div>
      </div>`;
    const cur = pipeStage(v.kind);
    const stages = pipeStages(r, v);
    return `
      <div class="panel">
        <div class="panel-h"><div><h4 style="font-size:14px">记录 ${i + 1} ｜ ${r.title}</h4><p>${v.title}</p></div>
        <span class="badge ${v.kind === "repair" ? "badge-green" : v.kind === "objection" ? "badge-blue" : "badge-amber"}">办理中</span></div>
        <div class="pipe">${stages.map((s, j) => `<div class="pipe-step ${j < cur ? "done" : j === cur ? "now" : ""}">${s}</div>`).join("")}</div>
      </div>`;
  }).join("");
  renderDeadlines();
}

function renderDeadlines() {
  const fmt = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const plus = n => { const d = new Date(); d.setDate(d.getDate() + n); return d; };
  const items = [];
  current.records.forEach((r, i) => {
    const v = verdicts[i];
    if (!v) return;
    if (v.kind === "repair" && r.type === "行政处罚")
      items.push({ date: fmt(plus(15)), text: `记录 ${i + 1}：修复申请提交后，跟进行政机关受理反馈`, tag: ["15 日内", "badge-blue"] });
    if (v.kind === "objection")
      items.push({ date: fmt(plus(20)), text: `记录 ${i + 1}：异议申请提交后 20 日内应获书面核查答复，逾期可复议`, tag: ["法定 20 日", "badge-blue"] });
    if (v.kind === "repair" && r.type === "经营异常")
      items.push({ date: fmt(plus(20)), text: `记录 ${i + 1}：移出申请提交后，登记机关 20 日内核查并作出决定`, tag: ["法定 20 日", "badge-amber"] });
    if (v.kind === "pending" && r.type === "行政处罚")
      items.push({ date: fmt(plus(45)), text: `记录 ${i + 1}：最短公示期预计届满，届满当日即可提交修复申请`, tag: ["公示期满", "badge-red"] });
    if (v.kind === "reject")
      items.push({ date: fmt(plus(365 * 2)), text: `记录 ${i + 1}：法定公示期满后可申请停止公示，届时协助核验`, tag: ["长期跟踪", "badge-gray"] });
  });
  items.push({ date: fmt(plus(90)), text: "下一季度信用体检（年度顾问服务）", tag: ["季度体检", "badge-green"] });
  $("#deadlineList").innerHTML = items.map(d =>
    `<div class="d-item"><span class="d-date">${d.date}</span><span>${d.text}</span><span class="badge ${d.tag[1]} d-tag">${d.tag[0]}</span></div>`).join("");
}

/* ----- 保存 PDF（系统直接生成，无浏览器页眉页脚） ----- */
async function savePdf() {
  const report = document.body.classList.contains("mode-ent")
    ? document.querySelector("#entReportHost .report")
    : document.querySelector("#reportHost .report");
  if (!report) { toast("请先生成报告"); return; }
  if (typeof html2canvas === "undefined" || !window.jspdf) { toast("PDF 组件未加载，请检查网络（CDN）"); return; }
  toast("正在生成 PDF…");
  try {
    const canvas = await html2canvas(report, { scale: 2, backgroundColor: "#ffffff" });
    const img = canvas.toDataURL("image/jpeg", 0.95);
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF("p", "mm", "a4");
    const margin = 10, pw = 210, ph = 297;
    const iw = pw - margin * 2;
    const ih = canvas.height * iw / canvas.width;
    const pageH = ph - margin * 2;
    let pos = 0, page = 0;
    while (pos < ih) {
      if (page > 0) pdf.addPage();
      pdf.addImage(img, "JPEG", margin, margin - pos, iw, ih);
      pos += pageH; page++;
    }
    pdf.save(`企业信用风险体检报告_${current.name.replace(/[（）()\s]/g, "")}_${new Date().toISOString().slice(0, 10)}.pdf`);
    toast("PDF 已保存到下载文件夹");
  } catch (e) {
    console.error(e);
    toast("PDF 生成失败，请改用「打印」");
  }
}

/* ----- 历史记录（localStorage 本机存档） ----- */
const HIST_KEY = "xyx_history";
function getHist() { try { return JSON.parse(localStorage.getItem(HIST_KEY)) || []; } catch (e) { return []; } }
function setHist(l) { localStorage.setItem(HIST_KEY, JSON.stringify(l)); }

function saveToHistory() {
  const list = getHist();
  list.unshift({
    id: Date.now(),
    time: new Date().toLocaleString("zh-CN", { hour12: false }),
    company: current,
    answers, verdicts,
    kinds: Object.values(verdicts).map(v => v.kind)
  });
  setHist(list.slice(0, 50));
}

function renderHistory() {
  const list = getHist();
  $("#histEmpty").style.display = list.length ? "none" : "block";
  $("#clearHistBtn").style.display = list.length ? "inline-flex" : "none";
  const kn = { repair: ["可修复", "badge-green"], objection: ["异议更正", "badge-blue"], reject: ["不可修复", "badge-red"], pending: ["辅导达标", "badge-amber"], manual: ["人工复核", "badge-gray"] };
  $("#histList").innerHTML = list.map(h => `
    <div class="hist-row">
      <div class="hist-main"><b>${h.company.name}</b><span>${h.time} ｜ ${h.company.records.length} 条不良记录</span></div>
      <div class="hist-tags">${h.kinds.map(k => `<span class="badge ${kn[k][1]}">${kn[k][0]}</span>`).join("")}</div>
      <button class="btn btn-sm btn-primary" onclick="loadHistory(${h.id})">调阅报告</button>
      <button class="btn btn-sm" onclick="deleteHistory(${h.id})">删除</button>
    </div>`).join("");
}

function loadHistory(id) {
  const h = getHist().find(x => x.id === id);
  if (!h) return;
  current = h.company; answers = h.answers || {}; verdicts = h.verdicts || {};
  $("#searchInput").value = current.name;
  document.querySelectorAll(".demo-tag").forEach(t => t.classList.remove("is-active"));
  renderCheck(); renderTriage(); restoreTriageUI(); renderProgress();
  buildReport(true);
  toast("已调阅历史报告");
}

function restoreTriageUI() {
  current.records.forEach((r, i) => {
    const ans = answers[i];
    if (!ans) return;
    Object.entries(ans).forEach(([key, val]) => {
      const seg = document.querySelector(`.seg[data-rec="${i}"][data-key="${key}"]`);
      if (!seg) return;
      seg.querySelectorAll("button").forEach(b => b.classList.remove("is-yes", "is-no", "is-unk"));
      const btn = [...seg.querySelectorAll("button")].find(b =>
        (b.textContent === "是" && val === true) || (b.textContent === "否" && val === false) || (b.textContent === "不确定" && val === null));
      if (btn) btn.classList.add(val === true ? "is-yes" : val === false ? "is-no" : "is-unk");
    });
    if (verdicts[i]) showVerdict(i);
  });
}

function deleteHistory(id) {
  setHist(getHist().filter(x => x.id !== id));
  renderHistory();
  toast("已删除该记录");
}

function clearHistory() {
  setHist([]);
  renderHistory();
  toast("历史记录已清空");
}

/* 演示用：预置三条历史记录 */
function seedHistory() {
  const mk = (di, agoDays) => {
    const c = DEMO[di], ans = {}, verd = {};
    c.records.forEach((r, i) => { ans[i] = { ...r.preset }; verd[i] = judge(r, ans[i]); });
    return {
      id: Date.now() - agoDays * 864e5 - di,
      time: new Date(Date.now() - agoDays * 864e5).toLocaleString("zh-CN", { hour12: false }),
      company: c, answers: ans, verdicts: verd,
      kinds: Object.values(verd).map(v => v.kind)
    };
  };
  setHist([mk(0, 1), mk(1, 3), mk(2, 6)]);
}

/* ----- 手动录入企业 ----- */
const QUESTION_SETS = {
  "行政处罚": [
    { key: "wrong", q: "这条公示的内容和你们公司的实际情况<em>对不上</em>吗？", hint: "<b>怎么判断：</b>对照《行政处罚决定书》看公示页面的名称、文号、金额、日期。处罚已撤销或变更但网上还是旧信息的，也算「对不上」。" },
    { key: "severe", q: "这条处罚是否涉及「红线」领域（<em>食品药品安全、生产安全事故、偷逃税款巨大、恶意欠薪</em>）？", hint: "<b>怎么判断：</b>看处罚决定书的「违法事实」部分。这几类属于严重失信，法定公示期内不能提前修复。" },
    { key: "fulfilled", q: "罚款<em>交清了</em>吗？要求整改的地方<em>改完并通过检查</em>了吗？", hint: "<b>怎么判断：</b>找①缴款凭证/罚没票据 ②整改报告或复查意见。两样都齐才算履行完毕。" },
    { key: "expired", q: "这条处罚在网上<em>挂够 3 个月</em>了吗？", hint: "<b>怎么查：</b>看公示页面的「公示日期」。一般行政处罚最短公示期 3 个月，挂满才能申请修复。" }
  ],
  "经营异常": [
    { key: "wrong", q: "被列异这件事和你们实际情况<em>对不上</em>吗？（比如年报其实已经报过了）", hint: "<b>怎么判断：</b>登录国家企业信用信息公示系统查「年度报告」栏目，该年份显示「已公示」但仍被列异的 → 选「是」。" },
    { key: "fulfilled", q: "欠的「作业」<em>补上了</em>吗？（年报已补报并公示 / 地址变更已办好 / 场所证明已备齐）", hint: "<b>怎么判断：</b>哪条原因列异就补哪条：补报年报、办住所变更、备场所证明。" }
  ],
  "司法失信": [
    { key: "wrong", q: "这条失信公示和实际情况<em>对不上</em>吗？（比如钱已还清但名单没撤）", hint: "<b>怎么判断：</b>有法院《结案通知书》或执行完毕证明但名单还在 → 选「是」，走异议更正。" },
    { key: "fulfilled", q: "欠的钱<em>还清了</em>吗？或者愿意和对方<em>谈一个还款方案</em>吗？", hint: "<b>为什么问：</b>债务不清无法删除失信信息。可通过商事调解谈分期还款，履行后同样可申请删除。" }
  ]
};

let manualRecsDraft = [];
function toggleManual() { $("#manualForm").classList.toggle("show"); }
function addManualRec() {
  const title = $("#mRecTitle").value.trim();
  if (!title) { toast("请填写记录内容"); return; }
  manualRecsDraft.push({ title, type: $("#mRecType").value });
  $("#mRecTitle").value = "";
  renderManualRecs();
}
function renderManualRecs() {
  const bm = { "行政处罚": "badge-blue", "经营异常": "badge-amber", "司法失信": "badge-red" };
  $("#manualRecs").innerHTML = manualRecsDraft.map((r, i) =>
    `<div class="manual-rec-item"><span class="badge ${bm[r.type]}">${r.type}</span><span>${r.title}</span><button onclick="delManualRec(${i})">删除</button></div>`).join("");
}
function delManualRec(i) { manualRecsDraft.splice(i, 1); renderManualRecs(); }

function createManual() {
  const name = $("#mName").value.trim();
  if (!name) { toast("请填写企业名称"); return; }
  if (!manualRecsDraft.length) { toast("请至少添加一条不良记录"); return; }
  const srcMap = { "行政处罚": "信用中国", "经营异常": "国家企业信用信息公示系统", "司法失信": "中国执行信息公开网" };
  const badgeMap = { "行政处罚": "badge-blue", "经营异常": "badge-amber", "司法失信": "badge-red" };
  const records = manualRecsDraft.map(r => ({
    title: r.title, type: r.type, typeBadge: badgeMap[r.type],
    source: srcMap[r.type], status: "公示中", statusBadge: "badge-red",
    questions: QUESTION_SETS[r.type], preset: null
  }));
  const cnt = t => records.filter(r => r.type === t).length;
  current = {
    name, creditCode: "手动录入 · 正式版自动核验", industry: $("#mIndustry").value.trim() || "未填写",
    tags: [],
    platforms: [
      { label: "信用中国", count: cnt("行政处罚"), unit: "条行政处罚公示", url: "https://www.creditchina.gov.cn", warn: cnt("行政处罚") > 0 },
      { label: "国家企业信用信息公示系统", count: cnt("经营异常"), unit: "条经营异常名录", url: "https://www.gsxt.gov.cn", warn: cnt("经营异常") > 0 },
      { label: "中国裁判文书网", count: 0, unit: "条涉诉记录", url: "https://wenshu.court.gov.cn", warn: false },
      { label: "中国执行信息公开网", count: cnt("司法失信"), unit: "条被执行/失信记录", url: "https://zxgk.court.gov.cn", warn: cnt("司法失信") > 0 }
    ],
    records
  };
  answers = {}; verdicts = {};
  $("#searchInput").value = name;
  document.querySelectorAll(".demo-tag").forEach(t => t.classList.remove("is-active"));
  manualRecsDraft = []; renderManualRecs();
  $("#manualForm").classList.remove("show");
  $("#mName").value = ""; $("#mIndustry").value = "";
  renderCheck(); renderTriage(); renderProgress();
  toast("已创建体检对象，请进入智能分诊");
}

/* ----- 渠道推广二维码 ----- */
function makeQr() {
  const url = $("#promoUrl").value.trim();
  if (!url) { toast("请输入部署网址"); return; }
  if (typeof QRCode === "undefined") { toast("二维码组件未加载"); return; }
  const box = $("#qrBox");
  box.innerHTML = "";
  new QRCode(box, { text: url, width: 132, height: 132, correctLevel: QRCode.CorrectLevel.M });
  toast("二维码已生成，可截图用于宣传物料");
}

async function copyPromoUrl() {
  const url = $("#promoUrl").value.trim();
  try {
    await navigator.clipboard.writeText(url);
    toast("链接已复制");
  } catch (e) {
    $("#promoUrl").select();
    toast("请手动复制（⌘+C）");
  }
}

/* 进入进度屏时自动刷新 */
const _gotoScreen = gotoScreen;
gotoScreen = function (name) {
  _gotoScreen(name);
  if (name === "progress" && current) renderProgress();
  if (name === "history") { renderHistory(); renderLeads(); }
};

/* ============================================================
   端口选择：企业端 / 律师端分离
   ============================================================ */
function pickRole(r) {
  try { localStorage.setItem("xyx_role", r); } catch (e) {}
  $("#roleGate").classList.remove("show");
  if (r === "ent") enterEnt();
}

/* ============================================================
   企业端 · 自助信用体检向导（零专业知识可用）
   流程：欢迎 → 取官方报告指引 → 企业信息 → 白话问卷 → 报告 + 留资
   ============================================================ */
const ENT_QS = [
  { key: "q1", q: "近三年内，公司被行政机关处罚过吗？",
    hint: "<b>怎么查：</b>市场监管、生态环境、消防、税务、应急管理等部门的罚款、警告、责令整改都算。不确定的话，打开信用中国搜索公司名，看「行政管理」栏目有没有记录。" },
  { key: "q1a", q: "罚款缴清了吗？要求整改的地方改完并通过检查了吗？", if: "q1",
    hint: "<b>怎么判断：</b>找两样东西——① 缴款凭证或罚没票据；② 整改报告、复查意见或验收文件。两样都齐才算履行完毕。只交了钱但没整改，也算没完成。" },
  { key: "q1b", q: "这条处罚在网上公示满 3 个月了吗？", if: "q1",
    hint: "<b>怎么查：</b>看公示页面的「公示日期」。一般行政处罚的最短公示期是 3 个月——挂满才有资格申请修复，没挂满申请了也会被退回。" },
  { key: "q1c", q: "处罚涉及「红线」领域吗——食品药品安全、生产安全事故、偷逃税款巨大、恶意拖欠工资？", if: "q1",
    hint: "<b>怎么判断：</b>看处罚决定书的「违法事实」部分。这几类属于严重失信，法定公示期内不能提前修复——谁承诺能删谁就是骗子。" },
  { key: "q2", q: "公司被列入过经营异常名录吗？",
    hint: "<b>怎么查：</b>登录国家企业信用信息公示系统搜索公司名，看有没有「经营异常」标记。常见原因：没报年报、注册地址联系不上。" },
  { key: "q2a", q: "欠的「作业」补上了吗？（年报已补报并公示 / 地址变更已办好）", if: "q2",
    hint: "<b>怎么判断：</b>哪条原因被列异就补哪条——没报年报的补报并公示；地址失联的办好住所变更登记或准备场地使用证明。" },
  { key: "q3", q: "公司被法院列为失信被执行人吗？（欠钱被申请强制执行）",
    hint: "<b>怎么查：</b>打开中国执行信息公开网，输入公司名可查。被强制执行还钱清不了的，才可能被列入失信名单。" },
  { key: "q3a", q: "欠的钱还清了吗？或者，愿意和对方谈一个还款方案吗？", if: "q3",
    hint: "<b>为什么问：</b>债务不清，失信信息就无法删除，这是硬条件。谈不拢可以先通过商事调解谈分期还款——履行后同样可以申请删除失信信息。" },
  { key: "q4", q: "有没有哪条记录和实际情况对不上？",
    hint: "<b>举例：</b>处罚决定已经撤销、钱早就缴清、年报其实报过了，但网上还挂着旧状态——这属于信息错误，走的是异议更正程序，不是信用修复。" }
];
let entAns = {};      // key → true(是) / false(否) / null(不确定)
let entStepIdx = 0;   // 0欢迎 1指引 2信息 3问卷 4结果

function enterEnt() {
  $("#roleGate").classList.remove("show");
  document.body.classList.add("mode-ent");
  renderEnt();
  const app = $("#entApp"); if (app) app.scrollTop = 0;
}
function exitEnt() { document.body.classList.remove("mode-ent"); }

function entSet(key, val) {
  entAns[key] = val;
  /* 父题改选「否/不确定」时，清空子题 */
  if (val !== true) ENT_QS.filter(q => q.if === key).forEach(q => delete entAns[q.key]);
  renderEnt();
}

function visibleEntQs() { return ENT_QS.filter(q => !q.if || entAns[q.if] === true); }
function entAllAnswered() { return visibleEntQs().every(q => entAns[q.key] !== undefined); }

function renderEnt() {
  $("#entSteps").innerHTML = [0, 1, 2, 3, 4].map(i => `<i class="${i <= entStepIdx ? "on" : ""}"></i>`).join("");
  const b = $("#entBody");
  if (entStepIdx === 0) {
    b.innerHTML = `
      <div class="ent-card">
        <h2>3 分钟，查清您公司的信用状况</h2>
        <div class="sub">
          这是上海玺浩律师事务所面向中小微企业推出的<b>公益信用体检</b>。您不需要任何法律或财务知识，
          跟着指引如实作答即可——系统会自动判断每条记录属于哪条办理路径，并生成一份正式的体检报告。
        </div>
        <div class="sub" style="margin-bottom:0">
          🔒 <b>隐私承诺：</b>您的作答仅保存在您自己的设备上，我们不会主动收集；
          <br>⚖️ <b>合规承诺：</b>依法修复 ≠ 花钱删记录，我们不承诺结果、不碰灰色手段。
        </div>
        <div class="ent-nav">
          <button class="btn btn-primary" onclick="entStepIdx=1;renderEnt()">开始自检 →</button>
        </div>
      </div>`;
  } else if (entStepIdx === 1) {
    b.innerHTML = `
      <div class="ent-card">
        <h2>第一步：免费拿到您公司的官方信用报告</h2>
        <div class="sub">信用信息以官方平台为准。作为企业自己，您有权<b>免费</b>查询本公司的全部信用记录——不需要找任何人代办，跟着下面做：</div>
        <div class="ent-guide">
          <h4>① 信用中国（查行政处罚、失信记录）</h4>
          <ol>
            <li>浏览器打开 <a href="https://www.creditchina.gov.cn" target="_blank" rel="noopener">creditchina.gov.cn ↗</a></li>
            <li>首页搜索框输入公司全称，点击搜索</li>
            <li>进入公司页面，查看「行政管理」「失信惩戒」等栏目</li>
            <li>有记录的话，截图保存或下载信用报告</li>
          </ol>
        </div>
        <div class="ent-guide">
          <h4>② 国家企业信用信息公示系统（查经营异常）</h4>
          <ol>
            <li>打开 <a href="https://www.gsxt.gov.cn" target="_blank" rel="noopener">gsxt.gov.cn ↗</a>，搜索公司名</li>
            <li>看有没有红色的「经营异常名录」标记</li>
            <li>顺手确认历年年报是否都已公示</li>
          </ol>
        </div>
        <div class="ent-guide" style="margin-bottom:0">
          <h4>③ 中国执行信息公开网（查司法失信）</h4>
          <ol>
            <li>打开 <a href="https://zxgk.court.gov.cn" target="_blank" rel="noopener">zxgk.court.gov.cn ↗</a></li>
            <li>用公司名查询「被执行人」「失信被执行人」两个栏目</li>
          </ol>
        </div>
        <div class="ent-nav">
          <button class="btn ghost" onclick="entStepIdx=0;renderEnt()">← 返回</button>
          <button class="btn btn-primary" onclick="entStepIdx=2;renderEnt()">查完了 / 先跳过，继续 →</button>
        </div>
      </div>`;
  } else if (entStepIdx === 2) {
    b.innerHTML = `
      <div class="ent-card">
        <h2>第二步：您的公司信息</h2>
        <div class="sub">只用于生成报告抬头，不会上传服务器。</div>
        <div class="f-row" style="display:block">
          <div style="margin-bottom:12px">
            <div style="font-size:12.5px;font-weight:600;margin-bottom:6px">公司全称 <span style="color:var(--seal)">*</span></div>
            <input class="search-input" style="max-width:none;width:100%" id="entCoName" placeholder="例：某某贸易（上海）有限公司" value="${window._entName || ""}" oninput="window._entName=this.value">
          </div>
          <div>
            <div style="font-size:12.5px;font-weight:600;margin-bottom:6px">行业与规模（选填）</div>
            <input class="search-input" style="max-width:none;width:100%" id="entCoInd" placeholder="例：批发零售业 · 小微企业" value="${window._entInd || ""}" oninput="window._entInd=this.value">
          </div>
        </div>
        <div class="ent-nav">
          <button class="btn ghost" onclick="entStepIdx=1;renderEnt()">← 上一步</button>
          <button class="btn btn-primary" onclick="entGoQuiz()">下一步：开始作答 →</button>
        </div>
      </div>`;
  } else if (entStepIdx === 3) {
    const qs = visibleEntQs();
    b.innerHTML = `
      <div class="ent-card">
        <h2>第三步：如实回答 ${qs.length} 个问题</h2>
        <div class="sub">看不懂就点题后的 <b>?</b>，有白话解释和查找方法；拿不准就选<b>「不确定」</b>——系统会自动转给律师免费人工初判，不会误判。</div>
        ${ENT_QS.map((q, qi) => {
          const visible = !q.if || entAns[q.if] === true;
          if (!visible) return "";
          return `
          <div class="ent-q">
            <div class="qq"><span class="qno">Q${qi + 1}</span><span>${q.q}</span>
              <button class="hint-toggle" title="看不懂？点我" onclick="document.getElementById('enthint-${qi}').classList.toggle('show')">?</button>
            </div>
            <div class="hint" id="enthint-${qi}">${q.hint}</div>
            <div class="ent-opts">
              ${entOptBtn(q.key, false, "没有 / 否")}
              ${entOptBtn(q.key, true, "有 / 是")}
              ${entOptBtn(q.key, null, "不确定")}
            </div>
          </div>`;
        }).join("")}
        <div class="ent-nav">
          <button class="btn ghost" onclick="entStepIdx=2;renderEnt()">← 上一步</button>
          <button class="btn btn-seal" onclick="entFinish()">生成我的体检报告 →</button>
        </div>
      </div>`;
  } else {
    b.innerHTML = entResultHtml();
  }
}

function entOptBtn(key, val, label) {
  const cur = entAns[key];
  const sel = cur === val ? (val === true ? "sel-y" : val === false ? "sel-n" : "sel-u") : "";
  return `<button class="ent-opt ${sel}" onclick="entSet('${key}',${val})">${label}</button>`;
}

function entGoQuiz() {
  const name = (window._entName || "").trim();
  if (!name) { toast("请先填写公司全称"); return; }
  entStepIdx = 3; renderEnt();
}

/* 问卷答案 → 合成信用记录 → 复用律师规则引擎 judge() 出分诊结论 */
function entFinish() {
  const name = (window._entName || "").trim();
  if (!name) { toast("请先填写公司全称"); entStepIdx = 2; renderEnt(); return; }
  if (!entAllAnswered()) { toast("还有问题没作答——拿不准的可以选「不确定」"); return; }
  const recs = [], amap = {};
  const base = { status: "公示中（以官方平台为准）", statusBadge: "badge-red" };
  if (entAns.q1 === true) {
    recs.push({ title: "行政处罚记录（企业自助申报）", type: "行政处罚", typeBadge: "badge-blue", source: "信用中国", ...base, questions: QUESTION_SETS["行政处罚"] });
    amap[recs.length - 1] = { wrong: entAns.q4, severe: entAns.q1c, fulfilled: entAns.q1a, expired: entAns.q1b };
  }
  if (entAns.q2 === true) {
    recs.push({ title: "经营异常名录记录（企业自助申报）", type: "经营异常", typeBadge: "badge-amber", source: "国家企业信用信息公示系统", ...base, questions: QUESTION_SETS["经营异常"] });
    amap[recs.length - 1] = { wrong: entAns.q4, fulfilled: entAns.q2a };
  }
  if (entAns.q3 === true) {
    recs.push({ title: "失信被执行人记录（企业自助申报）", type: "司法失信", typeBadge: "badge-red", source: "中国执行信息公开网", ...base, questions: QUESTION_SETS["司法失信"] });
    amap[recs.length - 1] = { wrong: entAns.q4, fulfilled: entAns.q3a };
  }
  if (!recs.length && entAns.q4 === true) {
    recs.push({ title: "疑似信息错误记录（企业自助申报）", type: "行政处罚", typeBadge: "badge-blue", source: "信用中国", ...base, questions: QUESTION_SETS["行政处罚"] });
    amap[recs.length - 1] = { wrong: true, severe: false, fulfilled: true, expired: true };
  }
  const cnt = t => recs.filter(r => r.type === t).length;
  current = {
    name, creditCode: "自助体检 · 以官方平台核验为准",
    industry: (window._entInd || "").trim() || "中小微企业",
    tags: [],
    platforms: [
      { label: "信用中国", count: cnt("行政处罚"), unit: "条行政处罚公示", url: "https://www.creditchina.gov.cn", warn: cnt("行政处罚") > 0 },
      { label: "国家企业信用信息公示系统", count: cnt("经营异常"), unit: "条经营异常名录", url: "https://www.gsxt.gov.cn", warn: cnt("经营异常") > 0 },
      { label: "中国裁判文书网", count: 0, unit: "条涉诉记录", url: "https://wenshu.court.gov.cn", warn: false },
      { label: "中国执行信息公开网", count: cnt("司法失信"), unit: "条被执行/失信记录", url: "https://zxgk.court.gov.cn", warn: cnt("司法失信") > 0 }
    ],
    records: recs
  };
  answers = amap; verdicts = {};
  recs.forEach((r, i) => { verdicts[i] = judge(r, answers[i]); });
  saveToHistory();
  entStepIdx = 4; renderEnt();
  const app = $("#entApp"); if (app) app.scrollTop = 0;
}

function entResultHtml() {
  const recs = current.records;
  const rCls = { repair: "r-green", objection: "", reject: "r-red", pending: "r-amber", manual: "r-amber" };
  const icon = { repair: "✅", objection: "🔄", reject: "⛔", pending: "🕐", manual: "🧑‍⚖️" };
  const kindName = { repair: "可依法修复", objection: "异议更正（信息纠错）", reject: "法定不可修复", pending: "辅导达标后启动", manual: "需律师人工复核" };
  const kindBadge = { repair: "badge-green", objection: "badge-blue", reject: "badge-red", pending: "badge-amber", manual: "badge-gray" };
  const today = new Date().toLocaleDateString("zh-CN");
  const healthy = recs.length === 0;

  const cardsHtml = healthy ? `
      <div class="ent-result r-green">
        <h4>✅ 恭喜，未发现不良信用记录</h4>
        <p>根据您的作答，公司目前在各官方平台没有需要处理的不良记录。建议每季度做一次体检，防止交易对手风险和政策变化带来的新增失信。</p>
      </div>` :
    recs.map((r, i) => {
      const v = verdicts[i];
      return `
      <div class="ent-result ${rCls[v.kind]}">
        <h4>${icon[v.kind]} 记录 ${i + 1}｜${v.title}</h4>
        <p>${v.text}</p>
        <ul>${v.steps.map(s => `<li>${s}</li>`).join("")}</ul>
      </div>`;
    }).join("");

  const priceHtml = `
      <div class="ent-card no-print">
        <h2 style="font-size:17px">如果委托律师办理，费用是多少？</h2>
        <div class="sub" style="margin-bottom:0">明码标价、按阶段收费，办到哪一步收哪一步的钱；不承诺结果、不收取「删记录」费用。</div>
        <div class="ent-price">
          <div><b>0 元</b><span>公益体检 + 律师免费初判（本次）</span></div>
          <div><b>1,800 元/件起</b><span>专项代理：异常移出 1,800 ｜ 异议更正 3,000 起 ｜ 处罚修复 6,000 起 ｜ 司法失信 8,000 起</span></div>
          <div><b>9,800 元/年起</b><span>年度信用合规顾问：季度体检 + 风险预警</span></div>
        </div>
      </div>`;

  const leadHtml = `
      <div class="ent-lead no-print" id="leadBox">
        <h4>📞 想让律师帮您处理？</h4>
        <p>留下联系方式，律师将在 <b>1 个工作日内</b>免费回电，给出书面分诊意见后再决定是否委托——不委托不收费。</p>
        <div id="leadForm">
          <input id="leadContact" placeholder="您的称呼（例：王经理）">
          <input id="leadPhone" placeholder="手机号码" inputmode="tel">
          <button class="btn btn-primary" style="width:100%;margin-top:12px;padding:11px" onclick="submitLead()">提交，请律师联系我</button>
        </div>
        <div id="leadDone" style="display:none;text-align:center;padding:14px 0 4px">
          <div style="font-size:26px">✅</div>
          <p style="opacity:.8;margin-top:6px">已收到！律师将在 1 个工作日内与您联系。<br>请保持电话畅通，也可以先保存下方报告。</p>
        </div>
      </div>`;

  const reportHtml = `
    <div id="entReportHost">
      <div class="report">
        <div class="report-head">
          <img src="${window.LOGO_B64}" alt="玺浩">
          <div>
            <h2>企业信用风险体检报告</h2>
            <p>上海玺浩律师事务所 · 信易修信用法律服务中心</p>
          </div>
        </div>
        <div class="report-sec">
          <h3>一、体检对象</h3>
          <dl class="kv">
            <dt>企业名称</dt><dd>${current.name}</dd>
            <dt>行业 / 规模</dt><dd>${current.industry}</dd>
            <dt>体检方式</dt><dd>企业自助体检（信用信息以官方平台核验为准）</dd>
            <dt>体检日期</dt><dd>${today}</dd>
          </dl>
        </div>
        <div class="report-sec">
          <h3>二、分诊结论与建议路径</h3>
          ${healthy ? `<p>经自助体检，暂未发现需要处理的不良信用记录。建议建立季度体检机制，持续监测。</p>` :
            recs.map((r, i) => `
            <p style="margin-bottom:6px"><b>记录 ${i + 1}</b>（${r.type} ｜ ${r.source}）<span class="badge ${kindBadge[verdicts[i].kind]}" style="margin-left:8px">${kindName[verdicts[i].kind]}</span></p>
            <p style="opacity:.78">${verdicts[i].text}</p>
            <ul>${verdicts[i].steps.map(s => `<li>${s}</li>`).join("")}</ul>
            <div style="height:10px"></div>`).join("")}
        </div>
        <div class="report-sec">
          <h3>三、服务费用参考</h3>
          <ul>
            <li>公益信用体检 + 律师人工免费初判（15 分钟，首次）：0 元</li>
            <li>专项代理：经营异常移出 1,800 元/件；异议更正 3,000 元/件起；行政处罚修复 6,000 元/件起；司法失信删除 8,000 元/件起；行政复议/诉讼 12,000 元/件起</li>
            <li>年度信用合规顾问：9,800 元/年起（季度体检 + 风险预警 + 交易对手资信审查）</li>
          </ul>
        </div>
        <div class="report-sec">
          <h3>四、重要声明</h3>
          <p>本报告系依据企业自主申报信息作出的初步法律风险评估，不构成对修复结果的承诺。法定不可修复的严重失信信息，本所不予承接。正式法律意见以委托后出具的《信用风险法律评估报告》为准。</p>
        </div>
        <div class="report-foot">
          <b>上海玺浩律师事务所</b><br>中小微企业信用修复与异议更正一体化法律服务<br>报告编号：XYX-${Date.now().toString().slice(-8)} ｜ 出具日期：${today}
        </div>
      </div>
    </div>`;

  return `
      <div class="ent-card no-print">
        <h2>${healthy ? "体检完成" : "您的分诊结果"}</h2>
        <div class="sub" style="margin-bottom:14px">${current.name} ｜ 下方报告可保存或打印，委托律师前不收取任何费用。</div>
        ${cardsHtml}
        <div class="ent-nav" style="margin-top:14px">
          <button class="btn ghost" onclick="entRestart()">↺ 重新体检</button>
          <button class="btn" onclick="window.print()">🖨 打印报告</button>
          <button class="btn btn-primary" onclick="savePdf()">📄 保存 PDF</button>
        </div>
      </div>
      ${priceHtml}
      ${leadHtml}
      ${reportHtml}`;
}

function entRestart() {
  entAns = {}; window._entName = ""; window._entInd = "";
  entStepIdx = 0; renderEnt();
}

/* ----- 留资线索：企业端提交 → 律师端线索池 ----- */
const LEAD_KEY = "xyx_leads";
function getLeads() { try { return JSON.parse(localStorage.getItem(LEAD_KEY)) || []; } catch (e) { return []; } }
function setLeads(l) { localStorage.setItem(LEAD_KEY, JSON.stringify(l)); }

function submitLead() {
  const c = $("#leadContact").value.trim(), p = $("#leadPhone").value.trim();
  if (!c || !p) { toast("请填写您的称呼和手机号码"); return; }
  const list = getLeads();
  list.unshift({
    id: Date.now(),
    time: new Date().toLocaleString("zh-CN", { hour12: false }),
    company: current.name, contact: c, phone: p,
    kinds: Object.values(verdicts).map(v => v.kind)
  });
  setLeads(list.slice(0, 100));
  $("#leadForm").style.display = "none";
  $("#leadDone").style.display = "block";
  toast("已提交，律师将尽快与您联系");
}

function renderLeads() {
  const list = getLeads();
  const kn = { repair: ["可修复", "badge-green"], objection: ["异议更正", "badge-blue"], reject: ["不可修复", "badge-red"], pending: ["辅导达标", "badge-amber"], manual: ["人工复核", "badge-gray"] };
  $("#leadList").innerHTML = list.length ? list.map(l => `
    <div class="hist-row">
      <div class="hist-main"><b>${l.company}</b><span>${l.time} ｜ 联系人 ${l.contact} ｜ ${l.phone}</span></div>
      <div class="hist-tags">${(l.kinds || []).map(k => kn[k] ? `<span class="badge ${kn[k][1]}">${kn[k][0]}</span>` : "").join("")}</div>
      <button class="btn btn-sm" onclick="toast('已标记为已回访（演示）')">标记回访</button>
      <button class="btn btn-sm" onclick="deleteLead(${l.id})">删除</button>
    </div>`).join("") :
    `<div style="font-size:12px;opacity:.55;padding:4px 0">暂无线索。企业端用户完成自助体检并留下联系方式后，将实时出现在这里——这就是「公益体检引流 → 律师回访转化」的入口。</div>`;
}
function deleteLead(id) { setLeads(getLeads().filter(x => x.id !== id)); renderLeads(); toast("已删除该线索"); }

/* 部署版：从 assets-data.js 填充图片资源 */
document.querySelectorAll("img[data-shield]").forEach(i => { i.src = window.SHIELD_B64; });
const _sky = document.querySelector("img[data-skyline]"); if (_sky) _sky.src = window.SKYLINE_B64;
renderDemoTags();

/* URL 参数直达：?demo=0&autofill=1&screen=triage|report（演示/截图用）；?role=ent 直达企业端 */
(function () {
  const qs = new URLSearchParams(location.search);
  if (qs.get("noanim")) document.body.classList.add("noanim");

  /* 企业端直达：二维码 / 部署链接指向这里 */
  if (qs.get("role") === "ent") {
    if (qs.get("entdemo")) {
      window._entName = "顺达物流（上海）有限公司";
      window._entInd = "交通运输业 · 小微企业";
      entAns = { q1: true, q1a: true, q1b: true, q1c: false, q2: true, q2a: true, q3: false, q4: false };
      document.body.classList.add("mode-ent");
      entFinish();
    } else {
      const s = parseInt(qs.get("entstep") || "0", 10);
      entStepIdx = isNaN(s) ? 0 : Math.min(s, 4);
      enterEnt();
    }
    return;
  }

  /* 端口门禁：首次访问且无深层参数时显示 */
  const hasDeep = ["demo", "screen", "seedhist", "manual", "qr", "role"].some(k => qs.get(k) !== null);
  let roleSeen = null;
  try { roleSeen = localStorage.getItem("xyx_role"); } catch (e) {}
  if (!hasDeep && !roleSeen) $("#roleGate").classList.add("show");

  if (qs.get("seedhist")) seedHistory();
  if (qs.get("manual")) toggleManual();
  if (qs.get("qr")) makeQr();
  const d = qs.get("demo");
  if (d !== null && d !== "") {
    pickDemo(+d);
    if (qs.get("autofill")) autoFill();
    if (qs.get("unk")) {
      const b = document.querySelector('.seg[data-rec="0"][data-key="wrong"] button:last-child');
      if (b) b.click();
    }
    if (qs.get("hint")) toggleHint(0, 0);
    if (qs.get("screen") === "report") buildReport();
    else if (qs.get("screen")) gotoScreen(qs.get("screen"));
    if (qs.get("pdf")) setTimeout(() => savePdf(), 600);
  } else if (qs.get("screen")) {
    gotoScreen(qs.get("screen"));
  }
})();
