import { Language } from './i18n';

export const regionTypeKeys = [
  'river', 'mountainRange', 'settlement', 'campsite', 'peopleGroup', 'region',
  'mountain', 'spring', 'hill', 'bodyOfWater', 'road', 'canal', 'valley',
  'field', 'mountainPass', 'tree', 'mountainRidge', 'wadi', 'well', 'structure',
  'naturalArea', 'altar', 'gate', 'pool', 'ford', 'island', 'wall', 'archipelago',
  'districtInSettlement', 'rock', 'garden', 'cave', 'stoneHeap', 'harbor',
  'hall', 'intersection', 'cliff', 'forest', 'room', 'mine', 'marsh',
  'plateau', 'promontory', 'mouthOfRiver', 'fortification'
];

export const bibleBookKeys = [
  'genesis', 'exodus', 'leviticus', 'numbers', 'deuteronomy', 'joshua',
  'judges', 'ruth', 'samuel1', 'samuel2', 'kings1', 'kings2', 'chronicles1',
  'chronicles2', 'ezra', 'nehemiah', 'esther', 'job', 'psalms', 'proverbs',
  'ecclesiastes', 'songOfSongs', 'isaiah', 'jeremiah', 'lamentations',
  'ezekiel', 'daniel', 'hosea', 'joel', 'amos', 'obadiah', 'jonah', 'micah',
  'nahum', 'habakkuk', 'zephaniah', 'haggai', 'zechariah', 'malachi',
  'matthew', 'mark', 'luke', 'john', 'acts', 'romans', 'corinthians1',
  'corinthians2', 'galatians', 'ephesians', 'philippians', 'colossians',
  'thessalonians1', 'thessalonians2', 'timothy1', 'timothy2', 'titus',
  'philemon', 'hebrews', 'james', 'peter1', 'peter2', 'john1', 'john2',
  'john3', 'jude', 'revelation'
];

export function getRegionTypeName(key: string, lang: Language): string {
  const translations = {
    ko: {
      river: '강', mountainRange: '산맥', settlement: '정착지', campsite: '야영지',
      peopleGroup: '민족 집단', region: '지역', mountain: '산', spring: '샘',
      hill: '언덕', bodyOfWater: '수역', road: '길', canal: '운하',
      valley: '골짜기', field: '들판', mountainPass: '고개', tree: '나무',
      mountainRidge: '산등성이', wadi: '와디(건천)', well: '우물', structure: '구조물',
      naturalArea: '자연 지형', altar: '제단', gate: '성문', pool: '못',
      ford: '여울목', island: '섬', wall: '성벽', archipelago: '군도',
      districtInSettlement: '도시 구역', rock: '바위', garden: '정원', cave: '동굴',
      stoneHeap: '돌무더기', harbor: '항구', hall: '회관', intersection: '교차로',
      cliff: '절벽', forest: '숲', room: '방', mine: '광산', marsh: '늪지',
      plateau: '고원', promontory: '곶', mouthOfRiver: '강 하구', fortification: '요새'
    },
    en: {
      river: 'River', mountainRange: 'Mountain Range', settlement: 'Settlement',
      campsite: 'Campsite', peopleGroup: 'People Group', region: 'Region',
      mountain: 'Mountain', spring: 'Spring', hill: 'Hill', bodyOfWater: 'Body of Water',
      road: 'Road', canal: 'Canal', valley: 'Valley', field: 'Field',
      mountainPass: 'Mountain Pass', tree: 'Tree', mountainRidge: 'Mountain Ridge',
      wadi: 'Wadi (Dry Riverbed)', well: 'Well', structure: 'Structure',
      naturalArea: 'Natural Area', altar: 'Altar', gate: 'Gate', pool: 'Pool',
      ford: 'Ford', island: 'Island', wall: 'Wall', archipelago: 'Archipelago',
      districtInSettlement: 'District in Settlement', rock: 'Rock', garden: 'Garden',
      cave: 'Cave', stoneHeap: 'Stone Heap', harbor: 'Harbor', hall: 'Hall',
      intersection: 'Intersection', cliff: 'Cliff', forest: 'Forest', room: 'Room',
      mine: 'Mine', marsh: 'Marsh', plateau: 'Plateau', promontory: 'Promontory',
      mouthOfRiver: 'Mouth of River', fortification: 'Fortification'
    }
  };
  
  return translations[lang]?.[key as keyof typeof translations.ko] || key;
}

export function getBibleBookName(key: string, lang: Language): string {
  const translations = {
    ko: {
      genesis: '창세기', exodus: '출애굽기', leviticus: '레위기', numbers: '민수기',
      deuteronomy: '신명기', joshua: '여호수아', judges: '사사기', ruth: '룻기',
      samuel1: '사무엘상', samuel2: '사무엘하', kings1: '열왕기상', kings2: '열왕기하',
      chronicles1: '역대상', chronicles2: '역대하', ezra: '에스라', nehemiah: '느헤미야',
      esther: '에스더', job: '욥기', psalms: '시편', proverbs: '잠언',
      ecclesiastes: '전도서', songOfSongs: '아가', isaiah: '이사야', jeremiah: '예레미야',
      lamentations: '예레미야애가', ezekiel: '에스겔', daniel: '다니엘', hosea: '호세아',
      joel: '요엘', amos: '아모스', obadiah: '오바댜', jonah: '요나', micah: '미가',
      nahum: '나훔', habakkuk: '하박국', zephaniah: '스바냐', haggai: '학개',
      zechariah: '스가랴', malachi: '말라기', matthew: '마태복음', mark: '마가복음',
      luke: '누가복음', john: '요한복음', acts: '사도행전', romans: '로마서',
      corinthians1: '고린도전서', corinthians2: '고린도후서', galatians: '갈라디아서',
      ephesians: '에베소서', philippians: '빌립보서', colossians: '골로새서',
      thessalonians1: '데살로니가전서', thessalonians2: '데살로니가후서',
      timothy1: '디모데전서', timothy2: '디모데후서', titus: '디도서',
      philemon: '빌레몬서', hebrews: '히브리서', james: '야고보서',
      peter1: '베드로전서', peter2: '베드로후서', john1: '요한일서',
      john2: '요한이서', john3: '요한삼서', jude: '유다서', revelation: '요한계시록'
    },
    en: {
      genesis: 'Genesis', exodus: 'Exodus', leviticus: 'Leviticus', numbers: 'Numbers',
      deuteronomy: 'Deuteronomy', joshua: 'Joshua', judges: 'Judges', ruth: 'Ruth',
      samuel1: '1 Samuel', samuel2: '2 Samuel', kings1: '1 Kings', kings2: '2 Kings',
      chronicles1: '1 Chronicles', chronicles2: '2 Chronicles', ezra: 'Ezra',
      nehemiah: 'Nehemiah', esther: 'Esther', job: 'Job', psalms: 'Psalms',
      proverbs: 'Proverbs', ecclesiastes: 'Ecclesiastes', songOfSongs: 'Song of Songs',
      isaiah: 'Isaiah', jeremiah: 'Jeremiah', lamentations: 'Lamentations',
      ezekiel: 'Ezekiel', daniel: 'Daniel', hosea: 'Hosea', joel: 'Joel',
      amos: 'Amos', obadiah: 'Obadiah', jonah: 'Jonah', micah: 'Micah',
      nahum: 'Nahum', habakkuk: 'Habakkuk', zephaniah: 'Zephaniah',
      haggai: 'Haggai', zechariah: 'Zechariah', malachi: 'Malachi',
      matthew: 'Matthew', mark: 'Mark', luke: 'Luke', john: 'John',
      acts: 'Acts', romans: 'Romans', corinthians1: '1 Corinthians',
      corinthians2: '2 Corinthians', galatians: 'Galatians', ephesians: 'Ephesians',
      philippians: 'Philippians', colossians: 'Colossians', thessalonians1: '1 Thessalonians',
      thessalonians2: '2 Thessalonians', timothy1: '1 Timothy', timothy2: '2 Timothy',
      titus: 'Titus', philemon: 'Philemon', hebrews: 'Hebrews', james: 'James',
      peter1: '1 Peter', peter2: '2 Peter', john1: '1 John', john2: '2 John',
      john3: '3 John', jude: 'Jude', revelation: 'Revelation'
    }
  };
  
  return translations[lang]?.[key as keyof typeof translations.ko] || key;
}