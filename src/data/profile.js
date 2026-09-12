// ============================================================
// 个人资料配置 —— 页面上所有文字都集中在这里，改这一处即可
// 注意：
// 1) 履历时间为示意（按「四年经验」倒推），请按实际情况修改
// 2) 「解决案例」目前为按你提供的方向撰写的定性描述，
//    具体项目名、数据规模、量化结果请替换为真实数字更有说服力
// ============================================================

export const profile = {
  name: '魏鹏', // 取自 GitHub 公开昵称，可自行修改
  title: 'Web 全栈开发工程师',
  intro: '四年 Java 后端经验，主业运维监控方向：基于开源监控系统改造构建国产化监控采集平台；现转型 Django 全栈，前端用 React。',
  github: 'https://github.com/1wu-davy-2',
  githubId: '1wu-davy-2',
  email: '', // 选填，填入后页脚会自动显示

  // 「关于我」段落
  bio: '我是一名 25 岁的 Web 全栈开发工程师，本科毕业于安徽师范大学，有四年开发经验，长期从事运维监控方向的研发。此前以 Java 技术栈为主，从 Spring Boot 单体应用到 Spring Cloud 微服务都有实际项目经验；目前的主线是基于开源监控系统（Zabbix）二次开发，构建国产化的监控采集与告警平台。随着公司技术栈转型，我转向 Python / Django 做后端、React 做前端，能独立完成从数据模型到页面交互的完整链路。业余时间喜欢写一些小工具，题材多为量化数据、效率工具和 Agent 应用。',

  // 基本信息栏（value 为空字符串的项会自动隐藏）
  facts: [
    { label: '年龄', value: '25 岁' },
    { label: '性别', value: '男' },
    { label: '学历', value: '本科 · 安徽师范大学' },
    { label: '经验', value: '4 年' },
    { label: '主栈', value: 'Java · Django' },
    { label: '方向', value: '运维监控 · 全栈' },
  ],

  // 首屏标签
  chips: ['25 岁', '本科 · 安徽师范大学', '四年经验', '运维监控方向'],

  // 首屏下方的数字统计卡
  stats: [
    { value: 4, suffix: '年', label: '开发经验', sub: 'Java 起步 · 全栈进行中' },
    { value: 22, suffix: '个', label: '开源仓库', sub: '量化 · 工具 · MCP' },
    { value: 6, suffix: '组', label: '技术领域', sub: '后端 · 监控 · 数据' },
    { value: 8, suffix: '个', label: '解决案例', sub: '运维监控视角 · 持续补充' },
  ],

  // 技术栈跑马灯
  ticker: [
    'Java',
    'Spring Cloud',
    'Django',
    'DRF',
    'React',
    'Zabbix 二次开发',
    'Prometheus',
    'APM 链路追踪',
    'ClickHouse',
    'Kafka',
    'NATS',
    'NetworkX',
    'C / Go Agent',
    'Nginx',
    'Gunicorn',
    'MySQL',
    'PostgreSQL',
    'Oracle',
    'DuckDB',
    'Docker',
    'Linux',
    'MCP',
  ],

  // 采集链路架构图（主攻方向板块顶部）
  arch: [
    { node: 'C / Go Agent', desc: '多对象采集' },
    { node: 'Kafka / NATS', desc: '削峰管道' },
    { node: '采集平台核心', desc: 'Zabbix 二开 · Django' },
    { node: 'ClickHouse', desc: '指标底座' },
    { node: '大盘 · 告警 · 拓扑', desc: '可视化与定位' },
  ],

  // 技能分组（note 为空则不显示备注）
  skills: [
    {
      group: 'Java 后端',
      note: '四年主栈',
      items: [
        'Java',
        'Spring Boot',
        'Spring MVC / Spring Web',
        'Spring Cloud',
        'MyBatis',
        '单体 / 微服务架构',
        'JVM 与线程池调优',
      ],
    },
    {
      group: '监控与可观测',
      note: '主业方向',
      items: [
        'Zabbix 深度定制',
        'Prometheus',
        'APM / 链路追踪',
        '拓扑分析 · NetworkX',
        'C / Go 采集框架',
        '国产化平台改造',
      ],
    },
    {
      group: 'Python 后端',
      note: '转型主攻',
      items: ['Python', 'Django', 'Django REST Framework', 'FastAPI', '数据建模与迁移'],
    },
    {
      group: '数据库',
      note: '',
      items: [
        'MySQL / MariaDB',
        'PostgreSQL',
        'Oracle',
        'SQLite',
        'ClickHouse',
        'DuckDB',
        '连接池优化',
      ],
    },
    {
      group: '中间件与 Web 服务',
      note: '',
      items: ['Kafka', 'NATS', '消息队列', 'Nginx', 'Gunicorn', '门户统一鉴权'],
    },
    {
      group: '前端与工具',
      note: '',
      items: ['React', 'JavaScript / TypeScript', 'HTML / CSS', 'Vite', 'Linux', 'Docker', 'Git'],
    },
  ],

  // 主攻方向（运维监控视角）
  domains: [
    {
      title: '国产化监控采集平台',
      desc: '以开源监控系统（Zabbix）为基座做二次开发，构建面向信创环境的监控采集与告警平台：自定义采集项与插件、告警策略编排、与门户及多子系统打通。',
    },
    {
      title: '采集框架与 Agent',
      desc: '使用 C / Go 编写采集 Agent 与采集框架，覆盖主机、中间件、数据库等监控对象；结合 Kafka / NATS 构建削峰解耦的数据上报管道。',
    },
    {
      title: '拓扑与故障定界',
      desc: '基于 NetworkX 构建资源与业务拓扑，让监控数据和拓扑关系联动，支撑告警的影响面分析、根因定位与故障传播路径推演。',
    },
    {
      title: '指标与链路可观测',
      desc: '以 Prometheus 指标体系 + APM 链路追踪补齐调用链观测，与平台采集数据互为补充，形成「指标 + 链路 + 拓扑」的定位能力。',
    },
    {
      title: '监控数据底座',
      desc: '以 ClickHouse 承接海量指标与事件的存储查询，DuckDB 做轻量离线分析，支撑监控大盘的秒级查询与告警回溯。',
    },
  ],

  // 解决案例（定性描述，具体数字请按真实项目替换）
  cases: [
    {
      tag: 'Java',
      title: '线程池堆积导致服务假死',
      text: '服务周期性无响应，多次采样 jstack 对比发现工作线程持续堆积，定位为下游慢调用叠加固定线程池配置；实施线程池隔离与参数调整，并补充活跃线程数、队列深度的监控告警。',
      result: '同类问题可提前发现，不再演化为线上故障。',
    },
    {
      tag: 'Linux',
      title: '生产环境负载异常排查',
      text: '主机负载缓慢攀升并触发交换，结合 top / vmstat / iostat 与监控指标收敛到单进程内存泄漏，用 pmap 分析内存分布后回归代码修复；排查路径沉淀为标准手册与自动采集脚本。',
      result: '同类问题按图索骥，不再依赖个人经验。',
    },
    {
      tag: 'Web 服务',
      title: 'Nginx + Gunicorn 吞吐瓶颈',
      text: 'Django 接口高峰期大面积超时，压测定位到同步 worker 阻塞；调整 Gunicorn worker 类型、数量与超时，配合 Nginx 缓冲与 keepalive 优化。',
      result: '高峰期接口保持稳定，吞吐明显提升。',
    },
    {
      tag: '数据库',
      title: '连接池与慢查询治理',
      text: 'MySQL（MariaDB）频繁连接数告警，排查出连接未复用与慢 SQL 两个根因；统一 HikariCP / Django CONN_MAX_AGE 连接池配置，建立慢查询采集与治理流程。',
      result: '连接数恢复平稳，慢 SQL 持续被收敛。',
    },
    {
      tag: '数据库',
      title: 'ClickHouse 指标存储落地',
      text: '监控指标写入量增长后查询明显变慢，将指标与事件迁移到 ClickHouse，按时间分区并优化排序键与编码。',
      result: '大盘恢复秒级查询，支撑更长周期回溯。',
    },
    {
      tag: '中间件',
      title: 'Kafka / NATS 采集数据管道',
      text: '采集上报高峰期出现丢数与消费积压，引入 Kafka / NATS 做削峰填谷与服务解耦，统一上报协议、分区与重试策略。',
      result: '高峰期数据不再丢失，管道可平滑扩容。',
    },
    {
      tag: '架构 · 安全',
      title: '门户多子系统统一鉴权',
      text: '多个子系统账号各自维护、权限分散，建设统一门户认证：单点登录、token 签发与续期、子系统权限收敛。',
      result: 'Java 与 Django 双栈统一接入，账号权限一处管理。',
    },
    {
      tag: '可观测',
      title: 'APM 链路追踪接入',
      text: '微服务间慢调用难以定界，接入 APM 覆盖关键业务链路，配合 Prometheus 指标与拓扑数据交叉定位瓶颈环节。',
      result: '跨服务排障从「逐台登录」变为「按链路下钻」。',
    },
  ],

  // 履历（时间为示意，请按实际修改）
  timeline: [
    {
      year: '2022 – 2023',
      title: 'Java 后端开发',
      text: '基于 Spring Boot / Spring MVC 参与单体应用的开发与迭代，熟悉从库表设计、接口开发到部署上线的完整流程。',
    },
    {
      year: '2023 – 2025',
      title: '微服务与监控系统建设',
      text: '参与单体应用的微服务化改造：服务拆分、注册中心与网关、缓存与消息队列；同期深度参与监控采集与告警平台的研发，承担核心模块设计与实现。',
    },
    {
      year: '2025 – 至今',
      title: 'Django 全栈 · 国产化监控采集系统',
      text: '随公司技术栈转向 Python，以 Django / DRF 为后端、React 为前端，主攻基于开源监控系统二次开发的国产化监控采集平台，覆盖采集 Agent、拓扑、APM 与门户鉴权。',
    },
  ],

  // 开源作品（数据抓取自 GitHub 公开主页，描述略有润色）
  repos: [
    {
      name: 'PharosDB',
      desc: '全栈式数据库上下文监控枢纽，以 Go · ClickHouse · Django 构建。',
      lang: 'Python',
      tags: ['Django', 'ClickHouse', '监控'],
      url: 'https://github.com/1wu-davy-2/PharosDB',
    },
    {
      name: 'RecruitMCP',
      desc: '招聘自动化 MCP 服务：简历解析、人岗匹配、面试排期一站式完成。',
      lang: '',
      tags: ['MCP', 'Agent', '自动化'],
      url: 'https://github.com/1wu-davy-2/RecruitMCP',
    },
    {
      name: 'LexParse-MCP',
      desc: '面向中国大陆与香港的法律文书结构化解析 MCP 服务，输出规范化 JSON。',
      lang: '',
      tags: ['MCP', '文书解析'],
      url: 'https://github.com/1wu-davy-2/LexParse-MCP',
    },
    {
      name: 'fund-sector-lab',
      desc: 'A 股板块与基金量化研究工具，React / Vite + FastAPI + DuckDB。',
      lang: 'Python',
      tags: ['量化', 'FastAPI', 'DuckDB'],
      url: 'https://github.com/1wu-davy-2/fund-sector-lab',
    },
    {
      name: 'lanying-jipai',
      desc: '约拍派单管理平台：派单、订单、结算一体化管理。',
      lang: 'Python',
      tags: ['业务系统', '管理后台'],
      url: 'https://github.com/1wu-davy-2/lanying-jipai',
    },
    {
      name: 'promptcraft-tishici',
      desc: '多语言 AI 提示词学习平台，开箱即可部署至 Vercel。',
      lang: 'TypeScript',
      tags: ['AI', 'Prompt', '全栈'],
      url: 'https://github.com/1wu-davy-2/promptcraft-tishici',
    },
    {
      name: 'PixivFanbox',
      desc: 'Pixiv FANBOX 批量下载器，提供 CLI 与 GUI 双端。',
      lang: 'TypeScript',
      tags: ['CLI', 'GUI', '工具'],
      url: 'https://github.com/1wu-davy-2/PixivFanbox',
    },
    {
      name: 'huiliao',
      desc: '关系沟通练习应用，纯前端 React 实现。',
      lang: 'TypeScript',
      tags: ['React', '前端'],
      url: 'https://github.com/1wu-davy-2/huiliao',
    },
    {
      name: 'douyin-archive',
      desc: '抖音公开内容订阅与增量归档的本地工具。',
      lang: 'Python',
      tags: ['归档', '工具'],
      url: 'https://github.com/1wu-davy-2/douyin-archive',
    },
    {
      name: 'feixi',
      desc: 'A 股板块资金流、自选股与盘中资金估值监测。',
      lang: 'Python',
      tags: ['量化', '数据'],
      url: 'https://github.com/1wu-davy-2/feixi',
    },
  ],

  // 作品区脚注
  reposNote: '此外还有若干 Agent Skill 与练习项目，',
}
