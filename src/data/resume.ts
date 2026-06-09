export interface PersonalInfo {
  age: number;
  gender: string;
  height: string;
  hometown: string;
  expectedSalary: string;
  availability: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  tech?: string[];
}

export interface Project {
  name: string;
  period: string;
  description: string;
  tech: string[];
  responsibilities: string[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  items: string[];
}

const resumeData = {
  name: "石伟",
  nameEn: "Shi Wei",
  title: "嵌入式 Linux 软件工程师",
  tagline: "7 年嵌入式开发经验 · 专注智能安防与行车记录仪 · C/Shell/Linux",
  email: "1183614070@qq.com",
  phone: "15578216171",
  location: "深圳",
  personalInfo: {
    age: 29,
    gender: "男",
    height: "175cm",
    hometown: "桂林",
    expectedSalary: "36W+",
    availability: "一个月内到岗",
  },
  education: {
    school: "广西科技大学",
    degree: "测控技术与仪器（本科）",
    period: "2015.09 - 2019.06",
    courses: "微机原理、计算机网络、C 语言、数据结构、单片机等",
  },
  skills: [
    {
      name: "编程语言",
      icon: "code",
      items: ["C（精通）", "Shell（熟练）", "Python（了解）"],
    },
    {
      name: "开发平台",
      icon: "terminal",
      items: ["Linux 应用开发", "UcosⅡ", "Rockchip RK3566", "Mstar/爱芯芯片"],
    },
    {
      name: "网络与通信",
      icon: "network",
      items: ["Socket/TCP/IP", "P2P 通信", "KCP 协议", "UDP 多播"],
    },
    {
      name: "开发工具",
      icon: "wrench",
      items: ["Git", "GDB", "Makefile", "交叉编译", "Wireshark", "数据加密"],
    },
    {
      name: "业务领域",
      icon: "camera",
      items: ["智能安防（Eufy）", "行车记录仪", "GPS/ADAS", "OTA 升级", "音视频推流"],
    },
  ] as SkillCategory[],
  experience: [
    {
      company: "安克创新科技股份有限公司",
      role: "IPC 传输优化工程师",
      period: "2025.01 - 至今",
      tech: ["C", "KCP", "TCP/UDP", "P2P", "Linux", "Ring Buffer"],
      highlights: [
        "Eufy IoT SDK 嵌入式通信框架开发，基于 C 语言与自定义二进制协议",
        "弱网优化：调优 KCP 协议参数，显著降低音视频传输卡顿与延迟",
        "内存优化：环形缓冲区零拷贝改造，减少 30% 内存拷贝，CPU 占用显著降低",
        "组网拓展：由单一 WiFi 点对点直连拓展为局域网组网绑定",
        "问题诊断：定位/修复产品绑定、离线、音视频传输异常，构造 AI Skills 分析工具赋能团队",
      ],
    },
    {
      company: "安克创新科技股份有限公司",
      role: "软件工程师",
      period: "2022.08 - 至今",
      tech: ["C", "P2P", "nanomsg", "Rockchip RK3566", "Linux", "OTA", "GDB"],
      highlights: [
        "基于 RK3566 开发 Eufy 智能安防设备管理中控，支持摄像头、门铃、门传感器、移动传感器、智能锁等多种设备",
        "实现 P2P 端到端通信、多设备管理、报警策略、音视频推流、录像存储、云端推送、OTA 升级",
        "支持低功耗电池设备与太阳能充电管理，通过 nanomsg 进程间通信框架实现多模块解耦",
        "负责 ToB 专业布防方案设计、评审与实施",
        "应用 P2P 技术设计实现多基站录像、抠图等数据大迁移方案",
      ],
    },
    {
      company: "深圳市爱培科技术股份有限公司",
      role: "软件工程师",
      period: "2019.03 - 2022.07",
      tech: ["C", "UcosⅡ", "Mstar", "I2C", "GPS", "G-Sensor"],
      highlights: [
        "基于 Mstar/爱芯等芯片开发 70 迈、盯盯拍、惠普等多品牌行车记录仪软件",
        "定制化录像回放、GPS、电子狗、ADAS、停车监控等功能界面",
        "应用 I2C 技术接入新触摸按键方案",
        "对工厂产测维护支持，对客诉问题处理澄清",
      ],
    },
  ] as Experience[],
  projects: [
    {
      name: "EufySecurity 新旧设备接入基站业务",
      period: "2022 - 至今",
      description:
        "基于 Linux 平台维护整个业务框架，当有新设备（门铃、门锁、camera、sensor）接入立项后，作为设备接入基站的主责，支持设备接入直到 CR，随后对所有接入设备的客诉问题进行澄清。",
      tech: ["Linux 线程通信", "线程池管理", "P2P 通信", "数据加密", "视频传输与存储", "GDB 分析"],
      responsibilities: [
        "维护子设备管理模块",
        "维护设备行为逻辑模块",
        "维护录像存储与实时流中转传输",
        "维护 OTA 升级交互模块",
        "维护安防布防、联动模块",
        "维护上下游指令交互解析（连接层、PUSH 层、APP 交互层）",
      ],
    },
    {
      name: "基站一键迁移方案",
      period: "半年周期",
      description:
        "通过 P2P、socket 通信技术，将旧款基站绑定关系、视频和图片数据迁移到新款基站，省去客户繁琐的逐个迁移动作，为客户提供省心体验。",
      tech: ["P2P 通信", "Socket 编程", "数据结构拆解", "数据加密", "视频传输与存储"],
      responsibilities: [
        "参与技术方案研究，作为负责人拉齐技术会议",
        "输出方案详细设计报告",
        "部署一键迁移代码逻辑",
        "澄清客诉关联问题，主导客诉问题处理",
      ],
    },
    {
      name: "神达/小米品牌 DVR",
      period: "2019 - 2022",
      description:
        "基于 Mstar 平台的 SDK 开发和定制，由公司主线项目迭代新项目，定制化调试 UI、音视频录制回放，定制化客户电子狗、停车监控等功能。",
      tech: ["C 语言", "UcosⅡ", "数据结构", "GPS 解析"],
      responsibilities: [
        "项目前期对项目立案评估",
        "接收客户定制化的 UI 需求",
        "定制化行车记录仪的录像、Gsensor、ADAS、电子狗、停车监控功能",
        "配合工厂进行产测代码维护与迭代",
      ],
    },
  ] as Project[],
  selfReview:
    "本人具有丰富的行车记录仪和家居安防软件开发经验和技术背景，对新技术具有强烈的学习意愿和快速的学习能力。在团队中，我能够发挥领导作用，指导新员工，并通过团队合作不断推进项目的进展。我注重细节，具有良好的分析和解决问题的能力，能够在高压环境下工作，并保持积极的态度。我渴望在一个充满挑战和机遇的环境中进一步发展我的职业生涯。",
};

export default resumeData;
