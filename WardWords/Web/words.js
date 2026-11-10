// WardWords original bilingual vocabulary for Australian hospital social work.
// Format: term | meaning | clinical example | example translation | category
const CORE_WORDS_RAW = String.raw`
admission|入院|The patient was referred to social work shortly after admission.|患者入院后不久便被转介给社会工作部门。|ward
inpatient|住院患者|The inpatient has been on the surgical ward for six days.|这位住院患者已经在外科病房住了六天。|ward
outpatient|门诊患者|The patient will attend an outpatient appointment next week.|患者下周将参加门诊预约。|ward
ward|病房|The social worker visits several patients on the ward each morning.|社工每天早上会到病房探访几位患者。|ward
referral|转介|The nurse made a referral because the patient lives alone.|护士因患者独居而提出社工转介。|ward
referral reason|转介原因|Please check the referral reason before meeting the patient.|与患者见面前，请先查看转介原因。|ward
handover|交班、信息交接|During handover, the team discussed barriers to discharge.|交班时，团队讨论了妨碍患者出院的问题。|ward
ward round|病房查房|The ward round starts at nine each morning.|每天早上九点开始查房。|ward
progress note|病程记录|The social worker added a progress note after the family meeting.|家庭会议后，社工补充了一条病程记录。|ward
electronic medical record|电子病历|Check the electronic medical record before the assessment.|进行评估前先查看电子病历。|ward
care plan|照护计划|The care plan should reflect the patient's goals.|照护计划应当体现患者自己的目标。|ward
clinical review|临床复查、评估|A clinical review was requested after the patient's condition changed.|患者情况发生变化后，团队要求进行临床复查。|ward
multidisciplinary team|多学科团队|The multidisciplinary team met to review the discharge plan.|多学科团队召开会议讨论出院计划。|ward
allied health|专职医疗支持服务|Social work is part of the hospital's allied health services.|社会工作属于医院的专职医疗支持服务。|ward
patient liaison|患者联络与协调|Patient liaison staff helped the family raise a concern.|患者联络人员帮助家属提出了一项关切。|ward
interpreter|口译员|We arranged an interpreter so the patient could make an informed choice.|我们安排了口译员，帮助患者在充分知情后作出选择。|ward
consent|同意|We need the patient's consent before sharing information with family.|与家属分享信息前，需要征得患者同意。|ward
next of kin|近亲或指定联系人|The recorded next of kin is not automatically the legal decision-maker.|病历中登记的近亲不一定自动拥有法律决策权。|ward
primary care|初级医疗保健|The patient will follow up with their GP for primary care.|患者将继续由全科医生提供初级医疗保健。|ward
follow-up appointment|复诊预约|The discharge plan includes a follow-up appointment.|出院计划包含一次复诊预约。|ward
clinical escalation|向更高级别临床人员报告|Clinical escalation is needed when an immediate safety concern is identified.|发现紧急安全风险时，需要按流程上报。|ward
length of stay|住院时长|The team discussed the patient's length of stay at handover.|团队在交班时讨论了患者的住院时长。|ward
patient flow|患者流转与床位周转|Delays in discharge can affect patient flow across the hospital.|出院延迟会影响医院整体的患者流转。|ward
bedside assessment|床旁评估|The student observed a bedside assessment with their supervisor.|实习生在督导陪同下观摩了一次床旁评估。|ward
surgical procedure|外科手术或操作|The patient is recovering from a major surgical procedure.|患者正在从一项大型外科手术中恢复。|surgery
elective surgery|择期手术|The family had time to plan support before the elective surgery.|家属在择期手术前有时间安排支持。|surgery
emergency surgery|急诊手术|The patient needed emergency surgery after an accident.|患者因事故需要接受急诊手术。|surgery
pre-operative|术前的|The pre-operative assessment identified limited family support.|术前评估发现患者的家庭支持有限。|surgery
post-operative|术后的|The post-operative recovery period may affect daily activities.|术后恢复阶段可能影响患者的日常活动。|surgery
anaesthesia|麻醉|The doctor explained the anaesthesia plan to the patient.|医生向患者解释了麻醉计划。|surgery
incision|手术切口|The nurse checked the incision during the morning review.|护士在早间检查中查看了手术切口。|surgery
wound care|伤口护理|The patient may need help with wound care after discharge.|患者出院后可能需要伤口护理方面的帮助。|surgery
complication|并发症|A complication has delayed the patient's recovery.|一项并发症延缓了患者的康复。|surgery
infection|感染|The team is monitoring the patient for signs of infection.|医疗团队正在监测患者是否出现感染迹象。|surgery
sepsis|脓毒症|The team explained that sepsis is a serious medical emergency.|团队解释了脓毒症是一种严重的医疗急症。|surgery
pain management|疼痛管理|Poor pain management may affect mobility and sleep.|疼痛控制不佳可能影响行动与睡眠。|surgery
mobility|行动能力|Reduced mobility is a concern for the patient's return home.|行动能力下降是患者回家的一个隐忧。|surgery
falls risk|跌倒风险|The nurse raised a falls risk during the discharge meeting.|护士在出院会议中提出了跌倒风险。|surgery
delirium|谵妄|New confusion may be a sign of delirium and needs clinical review.|新出现的意识混乱可能提示谵妄，需要临床评估。|surgery
cognitive impairment|认知功能障碍|Cognitive impairment may affect how information is communicated.|认知功能障碍可能影响信息沟通方式。|surgery
baseline function|患者原有功能水平|We asked how the patient managed at their baseline function.|我们询问患者在入院前原有功能水平下如何生活。|surgery
functional decline|功能下降|The family reported a significant functional decline after surgery.|家属表示患者术后功能明显下降。|surgery
medically stable|医疗状况稳定|The patient is medically stable but still needs a safe discharge plan.|患者医疗状况稳定，但仍需要安全的出院安排。|surgery
intensive care unit|重症监护室|The patient was transferred from the intensive care unit yesterday.|患者昨天从重症监护室转出。|surgery
high dependency unit|高依赖护理病房|The patient spent two days in the high dependency unit.|患者在高依赖护理病房住了两天。|surgery
rehabilitation|康复治疗|The team is considering rehabilitation before the patient goes home.|团队正在考虑患者回家前是否需要康复治疗。|surgery
prolonged admission|住院时间延长|A prolonged admission has increased stress for the family.|住院时间延长增加了家庭压力。|surgery
palliative care|姑息治疗|Palliative care may support comfort and quality of life alongside other treatment.|姑息治疗可与其他治疗一起支持舒适度和生活质量。|surgery
surgical ward|外科病房|The surgical ward sees patients with a wide range of care needs.|外科病房接收护理需求各异的患者。|surgery
discharge planning|出院规划|Social work was asked to assist with discharge planning.|社工接到请求，协助制定出院计划。|discharge
estimated date of discharge|预计出院日期|The estimated date of discharge has changed to Friday.|预计出院日期已改为星期五。|discharge
discharge destination|出院去向|The patient's discharge destination is still being discussed.|患者的出院去向仍在讨论中。|discharge
safe discharge|安全出院|A safe discharge requires an appropriate support plan.|安全出院需要适当的支持计划。|discharge
discharge barrier|出院障碍|Limited home support is the main discharge barrier.|缺乏居家支持是主要出院障碍。|discharge
readmission|再次住院|The team wants to reduce the risk of avoidable readmission.|团队希望降低可避免的再次住院风险。|discharge
discharge summary|出院小结|The discharge summary will be sent to the patient's GP.|出院小结将发送给患者的全科医生。|discharge
home support|居家支持|Home support may help the patient manage everyday tasks.|居家支持可能帮助患者处理日常事务。|discharge
informal carer|非正式照护者|Her daughter is the main informal carer at home.|她的女儿是家中的主要非正式照护者。|discharge
carer strain|照护者压力|The family reported increasing carer strain.|家属表示照护者压力正在增加。|discharge
activities of daily living|基本日常生活活动|The OT assessed the patient's activities of daily living.|职业治疗师评估了患者的基本日常生活能力。|discharge
instrumental activities of daily living|工具性日常生活活动|Shopping and cooking are examples of instrumental activities of daily living.|购物和做饭是工具性日常生活活动的例子。|discharge
occupational therapist|职业治疗师|The occupational therapist reviewed whether the patient could shower safely.|职业治疗师评估了患者能否安全洗澡。|discharge
physiotherapist|物理治疗师|The physiotherapist assessed the patient's walking ability.|物理治疗师评估了患者的行走能力。|discharge
Transition Care Programme|过渡照护项目|The team discussed whether the patient might be eligible for the Transition Care Programme.|团队讨论患者是否可能符合过渡照护项目的资格。|discharge
residential aged care|住宿式老年护理服务|Residential aged care was one of the options discussed with the patient.|住宿式老年护理服务是与患者讨论的选项之一。|discharge
respite care|临时照护、喘息服务|The family asked about respite care for a short period.|家属询问了短期喘息照护服务。|discharge
My Aged Care|澳大利亚老年护理服务入口|We discussed contacting My Aged Care for an assessment.|我们讨论了联系My Aged Care申请评估。|discharge
Support at Home|澳洲居家老年护理支持项目|Support at Home may provide approved services for eligible older people.|Support at Home可为符合条件的老年人提供获批的服务。|discharge
Commonwealth Home Support Programme|联邦居家支持项目|The Commonwealth Home Support Programme can assist eligible older people with basic support needs.|联邦居家支持项目可协助有基本支持需求且符合条件的老年人。|discharge
National Disability Insurance Scheme|国家残障保险计划|The patient asked whether the National Disability Insurance Scheme could fund ongoing disability support.|患者询问NDIS是否可以资助持续性的残障支持。|discharge
support coordinator|支持协调员|The support coordinator helped arrange existing disability supports.|支持协调员协助安排已有的残障支持。|discharge
home modification|住宅改造|A home modification may be considered after an OT assessment.|职业治疗师评估后，可能考虑住宅改造。|discharge
community referral|社区服务转介|We completed a community referral with the patient's agreement.|经患者同意，我们完成了社区服务转介。|discharge
family meeting|家庭会议|A family meeting was arranged to discuss discharge options.|安排了一次家庭会议讨论出院选择。|discharge
case conference|个案讨论会议|The case conference brought together the patient and several clinicians.|个案会议让患者与多名临床人员共同讨论。|discharge
psychosocial assessment|心理社会评估|A psychosocial assessment explored housing, support and emotional needs.|心理社会评估了解了住房、支持和情绪方面的需求。|assessment
presenting concern|当前主要问题|The presenting concern was the patient's fear of returning home alone.|当前主要问题是患者害怕独自回家。|assessment
strengths-based practice|优势视角实践|Strengths-based practice recognises the patient's existing coping skills.|优势视角实践重视患者已经具备的应对能力。|assessment
person-centred care|以人为中心的照护|Person-centred care involves listening to the patient's priorities.|以人为中心的照护需要倾听患者最重视的事情。|assessment
rapport|信任关系、融洽关系|Building rapport helped the patient feel comfortable discussing concerns.|建立信任关系让患者更愿意谈论自己的担忧。|assessment
risk assessment|风险评估|The social worker discussed the concerns identified during risk assessment.|社工讨论了风险评估中发现的问题。|assessment
protective factor|保护性因素|Regular contact with family was an important protective factor.|与家人保持定期联系是一项重要的保护性因素。|assessment
vulnerability|脆弱处境、易受伤害性|Housing insecurity increased the patient's vulnerability.|住房不稳定加重了患者的脆弱处境。|assessment
social isolation|社会孤立|Social isolation may affect the patient's recovery at home.|社会孤立可能影响患者在家的康复。|assessment
financial hardship|经济困难|The patient reported financial hardship after being unable to work.|患者表示因无法工作而面临经济困难。|assessment
housing insecurity|住房不稳定|Housing insecurity was identified as a barrier to discharge.|住房不稳定被确定为一项出院障碍。|assessment
family dynamics|家庭互动关系|Understanding family dynamics helped us plan a respectful meeting.|理解家庭关系帮助我们安排一场尊重各方的会议。|assessment
support network|支持网络|The assessment explored the patient's support network.|评估了解了患者的支持网络。|assessment
health literacy|健康信息理解能力|Limited health literacy may affect understanding of discharge advice.|健康信息理解能力有限可能影响对出院建议的理解。|assessment
adjustment to illness|适应疾病带来的变化|The patient needed support with adjustment to illness.|患者需要支持来适应疾病带来的变化。|assessment
grief and loss|悲伤与失落|The social worker acknowledged the patient's feelings of grief and loss.|社工认可了患者的悲伤与失落感受。|assessment
coping strategies|应对策略|We explored coping strategies that had helped the patient before.|我们探讨了此前对患者有帮助的应对策略。|assessment
crisis intervention|危机干预|The team requested crisis intervention after an unexpected diagnosis.|患者获得意外诊断后，团队请求危机干预。|assessment
brief counselling|短期辅导|Brief counselling focused on the patient's immediate concerns.|短期辅导聚焦患者当下最紧迫的担忧。|assessment
patient advocacy|患者权益倡导|Patient advocacy helped ensure the patient's wishes were heard.|患者权益倡导帮助确保患者的意愿被听到。|assessment
capacity|特定决策的决策能力|Capacity for a specific decision may need a formal assessment.|针对某项具体决定的决策能力可能需要正式评估。|assessment
supported decision-making|支持性决策|Supported decision-making helps the person participate in their own choices.|支持性决策帮助当事人参与自己的选择。|assessment
advance care directive|预先医疗照护指示|The team checked whether the patient had an advance care directive.|团队查看患者是否已有预先医疗照护指示。|assessment
guardianship|监护安排、监护制度|The family asked for information about guardianship arrangements.|家属询问了监护安排的信息。|assessment
trauma-informed care|创伤知情照护|Trauma-informed care prioritises safety, choice and collaboration.|创伤知情照护重视安全感、选择权与合作。|assessment
confidentiality|保密原则|Confidentiality must be considered before speaking with relatives.|与亲属交谈前必须考虑保密原则。|ethics
privacy|隐私|The student checked the hospital's privacy requirements before documenting.|实习生在记录前查阅了医院的隐私要求。|ethics
informed consent|知情同意|Informed consent requires understandable information and a voluntary choice.|知情同意需要易于理解的信息及自愿的选择。|ethics
professional boundaries|专业边界|Professional boundaries help keep the helping relationship safe.|专业边界有助于保持助人关系的安全性。|ethics
self-determination|自决权|Self-determination means supporting the patient's own goals where possible.|自决权意味着在可能的情况下支持患者自己的目标。|ethics
dignity of risk|承担适当风险的尊严与权利|Dignity of risk is relevant when a patient chooses an option others consider risky.|当患者选择别人认为有风险的方案时，需要考虑其承担风险的权利。|ethics
cultural safety|文化安全|Cultural safety involves reflecting on power and the patient's experience.|文化安全要求反思权力关系及患者的体验。|ethics
reflective practice|反思性实践|Reflective practice helps students identify assumptions in their work.|反思性实践帮助学生发现工作中的个人假设。|ethics
professional supervision|专业督导|Professional supervision is a space to discuss complex decisions.|专业督导提供讨论复杂决策的空间。|ethics
mandatory reporting|法定强制报告|Mandatory reporting obligations depend on the relevant law and situation.|强制报告义务取决于相关法律和具体情况。|ethics
duty of care|注意义务、照护责任|Duty of care should guide responses to foreseeable harm.|注意义务应指导对可预见伤害的应对。|ethics
clinical reasoning|临床专业推理|The student explained the clinical reasoning behind the referral.|实习生解释了转介背后的临床专业推理。|ethics
shared decision-making|共同决策|Shared decision-making includes the patient's preferences and clinical information.|共同决策同时考虑患者偏好与临床信息。|ethics
de-escalation|缓和冲突、降低激动程度|The worker used de-escalation skills during a tense conversation.|工作人员在紧张对话中使用了缓和冲突的技巧。|ethics
teach-back|复述确认理解法|Teach-back can help check whether the patient understood the plan.|复述确认理解法有助于检查患者是否理解计划。|ethics
family violence|家庭暴力|Family violence concerns must be handled through appropriate safety pathways.|家庭暴力风险必须通过适当的安全流程处理。|ethics
Aboriginal liaison|原住民患者联络与文化支持|The team discussed offering Aboriginal liaison support with the patient's agreement.|团队讨论了在患者同意下提供原住民联络支持。|ethics
incident report|事件报告|An incident report was completed according to local policy.|工作人员根据本地规定完成了事件报告。|ethics
safeguarding|保护免受虐待、忽视与其他伤害|Safeguarding concerns were escalated to the appropriate team.|保护安全方面的担忧已上报给合适的团队。|ethics
case note|个案记录|The student wrote a factual case note for supervisor review.|实习生撰写了一份事实清楚的个案记录，供督导审核。|ethics
MDT|多学科团队（缩写）|The MDT agreed that more home support was needed before discharge.|多学科团队认为出院前需要更多居家支持。|acronym
OT|职业治疗师（缩写）|OT will assess showering and dressing before discharge.|职业治疗师将评估患者出院前的洗澡和穿衣能力。|acronym
Physio|物理治疗师（常用简称）|Physio is reviewing the patient's walking distance.|物理治疗师正在评估患者的步行距离。|acronym
ADLs|基本日常生活活动（缩写）|The patient needs help with some ADLs.|患者需要他人协助完成部分基本日常生活活动。|acronym
IADLs|工具性日常生活活动（缩写）|Cooking and shopping are examples of IADLs.|做饭和购物属于工具性日常生活活动。|acronym
EDD|预计出院日期（缩写）|The patient's EDD has been moved to next week.|患者预计出院日期已推迟到下周。|acronym
LOS|住院时长（缩写）|The team reviewed the patient's LOS at the meeting.|团队在会议中回顾了患者的住院时长。|acronym
POD|术后第几天（缩写）|The patient is POD three following abdominal surgery.|患者接受腹部手术后目前是第三天。|acronym
ICU|重症监护室（缩写）|The patient was transferred out of ICU this morning.|患者今天上午从重症监护室转出。|acronym
HDU|高依赖护理病房（缩写）|He spent the night in HDU for closer monitoring.|他在高依赖护理病房接受了一夜的密切监测。|acronym
EMR|电子病历（缩写）|The social worker documented the assessment in the EMR.|社工在电子病历中记录了评估。|acronym
GP|全科医生（缩写）|The patient's GP will receive the discharge information.|患者的全科医生会收到出院信息。|acronym
NOK|近亲或指定联系人（缩写）|The listed NOK asked to be updated after the meeting.|登记的近亲联系人希望会议后收到更新。|acronym
ACD|预先医疗照护指示（缩写）|The team asked whether an ACD was on file.|团队询问档案中是否存有预先医疗照护指示。|acronym
ACP|预先照护规划（缩写）|ACP discussions should reflect the person's goals and values.|预先照护规划的讨论应体现当事人的目标与价值观。|acronym
TCP|过渡照护项目（缩写）|The family asked whether TCP might be an option.|家属询问过渡照护项目是否可能适用。|acronym
CHSP|联邦居家支持项目（缩写）|CHSP may assist eligible older people with entry-level support.|CHSP可为符合条件的老年人提供基础支持。|acronym
NDIS|国家残障保险计划（缩写）|The patient is an existing NDIS participant.|患者目前已参加NDIS计划。|acronym
RACF|住宿式老年护理机构（缩写）|The social worker contacted the patient's RACF with consent.|经患者同意，社工联系了患者居住的养老护理机构。|acronym
BPSD|失智症行为与心理症状（缩写）|BPSD can affect communication and care planning.|失智症行为与心理症状可能影响沟通和照护计划。|acronym
MET call|医疗紧急应对团队呼叫|A MET call was activated after a sudden clinical deterioration.|患者临床状况突然恶化后，医院启动了医疗紧急应对团队。|acronym
NBM|禁止经口饮食（常用缩写）|The patient was NBM before surgery.|患者术前按要求暂停经口饮食。|acronym
NPO|禁止经口饮食（另一常见缩写）|The patient was kept NPO before the procedure.|患者在操作前按要求暂停经口饮食。|acronym
HLO|医院联络官（在NDIS情境常见）|The team contacted the NDIS HLO about discharge coordination.|团队联系NDIS医院联络官讨论出院协调。|acronym
SW|社会工作者（常用缩写）|SW was asked to review the patient's home situation.|社工被请求评估患者的居家情况。|acronym
`;

const CATEGORIES = [
  {id:'all',label:'全部词汇',subtitle:'完整临床词库',color:'#675CF3',icon:'grid',desc:'按真实临床场景组织的词汇'},
  {id:'ward',label:'医院日常',subtitle:'病房与交班',color:'#6474FF',icon:'hospital',desc:'病房流程、交班和医疗团队'},
  {id:'surgery',label:'外科与康复',subtitle:'术前术后',color:'#E8826C',icon:'pulse',desc:'理解常见外科相关表达'},
  {id:'discharge',label:'出院与转介',subtitle:'居家支持',color:'#299D85',icon:'house',desc:'出院规划、康复和服务系统'},
  {id:'assessment',label:'心理社会评估',subtitle:'患者与家庭',color:'#B47BD7',icon:'users',desc:'患者访谈、需求和风险评估'},
  {id:'ethics',label:'伦理与沟通',subtitle:'专业判断',color:'#C9903E',icon:'shield',desc:'伦理、文化安全和临床沟通'},
  {id:'acronym',label:'高频缩写',subtitle:'MDT / EDD / POD',color:'#4089BF',icon:'hash',desc:'快速听懂医院交班中的缩写'}
];

const WORDS = CORE_WORDS_RAW.trim().split('\n').map((row,i)=>{
  const [term,zh,example,translation,category] = row.split('|');
  return {id:`w${i+1}`,term,zh,example,translation,category,custom:false};
});

const HANDOVERS = [
  {title:'早班交接 · 术后第三天',label:'Morning handover',level:'入门',text:`This patient is post-operative day three following abdominal surgery. He is medically stable, but his mobility remains poor. OT is concerned about his ability to manage activities of daily living at home. Social work has been asked to review his support network and discharge options.`,question:'社工被转介的主要原因是什么？',answers:['需要评估回家后的支持与出院选择','需要评估患者的手术伤口','需要提供药物处方','需要决定患者的麻醉方式'],correct:0,explain:'关键句：Social work has been asked to review his support network and discharge options.'},
  {title:'出院协调 · 独居患者',label:'Discharge planning',level:'入门',text:`The patient lives alone and was independent before admission. Following surgery, she now needs assistance with showering and meal preparation. The physiotherapist recommends further rehabilitation. The team will discuss a safe discharge plan with the patient.`,question:'为什么团队认为需要进一步讨论出院计划？',answers:['患者拒绝所有治疗','患者术后日常功能下降','病房没有空床位','患者要求换医生'],correct:1,explain:'关键句：she now needs assistance with showering and meal preparation.'},
  {title:'家庭会议 · 照护者压力',label:'Family meeting',level:'进阶',text:`During the family meeting, the patient's daughter explained that she works full time and cannot provide overnight care. She is worried about her father's safety if he returns home too soon. The social worker acknowledged her concerns and explored available community supports.`,question:'家属表达的主要担忧是什么？',answers:['经济账单有误','患者无法预约门诊','无法提供夜间照护，担心过早出院','希望取消所有康复服务'],correct:2,explain:'关键句：she ... cannot provide overnight care.'},
  {title:'知情同意 · 语言支持',label:'Informed consent',level:'入门',text:`The patient preferred to speak Mandarin when discussing important decisions. The social worker arranged a professional interpreter before discussing the discharge options. The patient then explained that returning home was her preferred choice.`,question:'为什么安排专业口译员？',answers:['帮助团队加快会议速度','替患者作出决定','确认患者英语成绩','使患者能够理解并参与决策'],correct:3,explain:'专业口译有助于患者充分理解信息并表达自己的选择。'},
  {title:'复杂出院 · NDIS',label:'Complex discharge',level:'进阶',text:`The patient is an existing NDIS participant and needs changes to their support arrangements after surgery. The team is working with the support coordinator and hospital liaison staff to identify which supports can be available at discharge. The patient's own goals remain central to planning.`,question:'团队正在协调什么？',answers:['原有残障支持的调整和出院衔接','新的手术方法','患者的医疗诊断','家属的就业安排'],correct:0,explain:'关键句：needs changes to their support arrangements after surgery.'},
  {title:'风险沟通 · 转介升级',label:'Risk escalation',level:'进阶',text:`During a conversation, the patient disclosed feeling unsafe at home. The student did not make promises about keeping this information secret. Instead, they discussed the immediate concern with the supervising social worker and followed the hospital safety pathway.`,question:'实习生采取了什么合适的做法？',answers:['承诺对所有人严格保密','未作记录并结束会谈','与督导讨论并遵循安全流程','独自决定患者必须住院'],correct:2,explain:'识别风险后应遵循医院政策，及时向督导或适当的专业人员报告。'}
];
