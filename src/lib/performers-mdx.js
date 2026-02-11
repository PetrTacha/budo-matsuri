// Statické importy všech MDX souborů
// Tento soubor mapuje slug na odpovídající MDX komponentu

import Aikido from '@/content/performers/aikido.mdx';
import Battojutsu from '@/content/performers/battojutsu.mdx';
import DobraCajovna from '@/content/performers/dobra-cajovna-praha.mdx';
import Iaido from '@/content/performers/iaido.mdx';
import JaponskaKaligrafie from '@/content/performers/japonska-kaligrafie.mdx';
import Judo from '@/content/performers/judo.mdx';
import KatoriShintoRyu from '@/content/performers/katori-shinto-ryu.mdx';
import Kendo from '@/content/performers/kendo.mdx';
import KenjutsuKashima from '@/content/performers/kenjutsu-stylu-Kashima-no-tachi.mdx';
import Kobudo from '@/content/performers/kobudo.mdx';
import Kyudo from '@/content/performers/kyudo.mdx';
import NaginataDo from '@/content/performers/naginata-do.mdx';
import Nihonto from '@/content/performers/nihonto.mdx';
import Ninjutsu from '@/content/performers/ninjutsu.mdx';
import OkinawskeKarate from '@/content/performers/okinawske-karate-do.mdx';
import RestauraceMiyabi from '@/content/performers/restaurace-Miyabi.mdx';
import Shakuhachi from '@/content/performers/shakuhachi.mdx';
import ShintoMusoRyu from '@/content/performers/shinto-muso-ryu-jo-a-pripojene-skoly.mdx';
import Taijutsu from '@/content/performers/taijutsu.mdx';

// Mapping slug → MDX komponenta
export const performersMdx = {
  'aikido': Aikido,
  'battojutsu': Battojutsu,
  'dobra-cajovna-praha': DobraCajovna,
  'iaido': Iaido,
  'japonska-kaligrafie': JaponskaKaligrafie,
  'judo': Judo,
  'katori-shinto-ryu': KatoriShintoRyu,
  'kendo': Kendo,
  'kenjutsu-stylu-Kashima-no-tachi': KenjutsuKashima,
  'kobudo': Kobudo,
  'kyudo': Kyudo,
  'naginata-do': NaginataDo,
  'nihonto': Nihonto,
  'ninjutsu': Ninjutsu,
  'okinawske-karate-do': OkinawskeKarate,
  'restaurace-Miyabi': RestauraceMiyabi,
  'shakuhachi': Shakuhachi,
  'shinto-muso-ryu-jo-a-pripojene-skoly': ShintoMusoRyu,
  'taijutsu': Taijutsu,
};

// Funkce pro získání MDX komponenty podle slug
export function getPerformerMdx(slug) {
  return performersMdx[slug] || null;
}
