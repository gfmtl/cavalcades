import logo from './cavalcade-2023-logo_noir_transparent.png';
import itineraire from './itinerary.jpg';
import './App.css';

const Link = props => 
<a class="text-green-600 underline hover:no-underline hover:bg-green-600 hover:text-white rounded" href={props.href} target={props.href[0] === '#' ? '_self' : '_blank'}>{props.children}</a>

const Section = props => 
<section id={props.id} class="px-8">{props.children}</section>

const SectionTitle = props => 
<h2 class=" text-purple-600">{props.children}</h2>

const SubTitle = props => 
<h3 class="text-xl font-bold">{props.children}</h3>

const Timeline = props => 
<div class="not-prose">
  <ol class="relative border-l border-purple-600">{props.children}</ol>
</div>

const Jour = props => 
<li class="mb-10 relative">
  <div class="absolute w-3 h-3 bg-purple-600 rounded-full -left-1.5 border border-white top-2.5" />
  <div class="ml-4">
    <time class="mb-1 text-sm font-normal leading-none text-purple-600">{props.date}</time>
    <h3 class="text-xl font-semibold text-gray-900">
      <Link href={props.link}>{props.start} -> {props.end} | {props.length}</Link>
    </h3>
    <ul class="mt-5 leading-7 group">
      {props.children}
    </ul>
  </div>
</li>

const Heure = props => 
<li class="relative flex gap-2 my-3 group-first:group">
  <div class="font-bold">{props.start}</div>
  <div>{props.children}</div>
</li>

const Revendication = props => 
<div
  class="text-md border border-purple-600 rounded-md my-5 overflow-hidden shadow-lg">
  <div class="p-5 bg-purple-100 cursor-pointer text-purple-900">
    <svg
      class="inline-block"
      style="tran"
      width="20"
      height="20"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke="currentColor"><path d="M9 5l7 7-7 7" /></svg
    >
    {props.children}
  </div>
    <div class="p-5 bg-purple-50">
      Entre autres:
      {props.children}
    </div>
</div>

const NavItem = props => 
<li>
  <a
    href={props.href}
    target={props.href[0] === '#' ? '_self' : '_blank'}
    class="block p-3 transition-all font-semibold bg-white rounded border  text-green-600  border-green-600 shadow-md hover:text-white hover:bg-green-600"
    >{props.children}</a>
</li>

function App() {
  return (
    <div id="top" class="background pb-10">
      <div class="container mx-auto">

        <div class="mx-auto text-slate-800">
          <div class="p-8 space-y-5 mx-auto text-center text-lg text-purple-600 ">
            <div>Oyez Oyez Oyez!!! <br /> Vous êtes toutes et tous convié.e.s à la</div>
            <img src={logo} alt="Cavalcade 2023 - De Petites à Grandes Roues" class="m-auto picture" />
            <div>Du 2 au 4 septembre 2023</div>
          </div>
        </div>
        
        <nav class="flex flex-col px-8 space-y-5 ">
          <div class="not-prose ">
            <ul class="space-y-3 md:space-y-0 md:flex gap-2 justify-center flex-wrap">
              <NavItem href="#quoi">C'est quoi?!</NavItem>
              <NavItem href="#pourquoi">Revendications</NavItem>
              <NavItem href="#chemin">Itinéraire</NavItem>
              <NavItem href="#participer">Comment participer</NavItem>
              <NavItem href="#faq">Foire aux questions</NavItem>
              <NavItem href="#contact">Nous contacter</NavItem>
              <NavItem color="facebook" href="https://www.facebook.com/cavalcadevelo">Facebook</NavItem>
            </ul>
          </div>
        </nav>

        <div class="prose prose-ol:lg:my-1 prose-li:lg:my-1 lg:prose-lg mx-auto text-slate-800">
          <div>

            <Section id="quoi">
              <SectionTitle>C'est quoi?!</SectionTitle>

              <p>
                Le mot cavalcade désignant originalement une chevauchée animée de groupe, nous
                souhaitons mettre cette idée au goût du jour et en faire une balade de vélo mani-festive
                avec quelques revendications!
              </p>
              <p>
                Une randonnée vélo-camping de trois jours ayant pour objectif de faire
                valoir l'importance du déplacement actif au sein de notre société.
              </p>
              <dl>
                <dt>Quand</dt>
                <dd>Du 2 au 4 septembre 2023, samedi au lundi de la fête du Travail.</dd>
                <dt>Trajet</dt>
                <dd>Montréal -> Granby -> Montréal {/*(<Link href="https://www.google.com/maps/d/edit?mid=1JQ0GqPk1kZXJiGJGs2jmEFNbp3l5BTc&ll=45.439593264489424%2C-73.21891102031331&z=11">détails...</Link>)*/}</dd>
              </dl>
            </Section>

            <Section id="pourquoi">
              <SectionTitle>Revendications</SectionTitle>

              <h5 class="font-bold">Étant donné que</h5>
              <ul>
                <li>
                  Moins de 20 % des écoliers québécois se déplacent activement alors que 80 % le faisaient dans les années ’80.
                </li>
                <li>
                  Le sentiment d’insécurité est généralisé chez les parents québécois.
                </li>
              </ul>

              <h5 class="font-bold">Nous déplorons que</h5>
              <ul>
                <li>
                  Les cheminements scolaires ne soient pas adéquatement protégés, générant de l’insécurité, des blessés, et des morts.
                </li>
                <li>
                  Les mesures déployées pour y remédier se limitent trop souvent à des campagnes peu efficaces ou temporaires de signalisation, de répression, ou de sensibilisation.
                </li>
                <li>
                  L’absence de responsable et de normes devant assurer la sécurité des enfants en route vers l’école ait engendré la mise en place et le maintien d’aménagements dangereux à travers le Québec.
                </li>
              </ul>

              <h5 class="font-bold">Nous demandons que</h5>
              <ul>
                <li>
                  Respectent le principe selon lequel la responsabilité de la sécurité des enfants se déplaçant activement incombe principalement aux responsables des infrastructures,
                </li>
                <li>
                  S’appliquent au périmètre des cheminements scolaires de toutes les écoles du Québec tant sur les routes municipales que sur celles sous la responsabilité du MTMD,
                </li>
                <li>
                  Protègent effectivement les enfants se déplaçant activement vers l’école au moyen d’aménagements sécurisant l’environnement routier et démontrés efficaces.
                </li>
              </ul>

              {/*<div class="p-5 bg-purple-100 cursor-pointer text-purple-900">
                Créer un plan de mobilité active national et décennal, avec un financement conséquent,
                et en faire un projet de société.
                <ul slot="content">
                  <li>
                    Exiger lors de la réfection de toute route provinciale l'installation d'aménagements
                    sécuritaires et quatre-saisons pour les cyclistes, afin de connecter les villes et
                    villages de la province par des infrastructures cyclables.
                  </li>
                  <li>
                    Financer à hauteur de 500 millions $ par année les réseaux cyclables de la province.
                  </li>
                  <li>Étendre le réseau de la Route verte, et sécuriser tous ces tronçons.</li>
                  <li>
                    Créer un lien express et sécuritaire, dédié au vélo, entre Montréal et Québec.
                  </li>
                  <li>
                    Mesurer les résultats de ces actions sur la santé physique et mentale de la
                    population, ainsi que les retombées sociales et économiques.
                  </li>
                </ul>
              </div>
              <div class="p-5 bg-purple-100 cursor-pointer text-purple-900">
                Revoir les standards d'aménagements routiers, en priorisant les plus vulnérables sur la
                route.
                <ul slot="content">
                  <li>
                    Rendre les municipalités redevables pour la mise en place d'une politique nationale
                    de Vision Zéro des transports actifs.
                  </li>
                  <li>
                    Prioriser la sécurité des individus à pied et à vélo, par rapport à la fluidité de
                    la circulation automobile.
                  </li>
                  <li>
                    Exiger des aménagements physiques pour apaiser le trafic automobile dans toute
                    réfection de rue résidentielle, par exemple des woonerfs ou des vélorues.
                  </li>
                  <li>
                    Obliger les municipalités à mettre en place une limite de vitesse de 30 km/h dans
                    toutes les rues résidentielles.
                  </li>
                  <li>
                    Instaurer une politique du “dernier kilomètre” pour connecter les pôles de mobilité
                    (stations de train, terminus de bus régional) avec des infrastructures de transport
                    actif.
                  </li>
                  <li>
                    Coordonner la mission du Ministère des Transports du Québec avec celle du Ministère
                    des Affaires municipales et de l'Habitation.
                  </li>
                </ul>
              </div>
              <div class="p-5 bg-purple-100 cursor-pointer text-purple-900">
                Faire une refonte du Code de la sécurité routière pour l'adapter aux transports actifs.
                <ul slot="content">
                  <li>
                    Rendre obligatoire un test de sensibilisation aux cyclistes et aux piétons à tous
                    les nouveaux détenteurs de permis de conduire de véhicule motorisé.
                  </li>
                  <li>Autoriser l'arrêt Idaho aux cyclistes.</li>
                  <li>
                    Modifier l'ensemble du Code de la sécurité routière pour que le transport actif soit
                    prioritaire vis-à-vis le transport motorisé.
                  </li>
                </ul>
              </div>
              <div class="p-5 bg-purple-100 cursor-pointer text-purple-900">
                Démocratiser l'usage du vélo, et promouvoir le transport actif.
                <ul slot="content">
                  <li>
                    Subventionner l'achat de vélos pour tous. À 100% pour les personnes à faible revenu.
                  </li>
                  <li>Accorder des crédits d'impôt aux citoyens qui ne possèdent pas d'auto.</li>
                  <li>Lancer une campagne publicitaire valorisant le transport actif utilitaire.</li>
                </ul>
              </div>*/}
            </Section>

            <Section id="chemin">
              <SectionTitle>Itinéraire</SectionTitle>

              <a href="https://www.google.com/maps/d/u/0/edit?mid=1JQ0GqPk1kZXJiGJGs2jmEFNbp3l5BTc&ll=45.35870631813201%2C-73.02884105000001&z=9">
                <img src={itineraire} alt="Itineraire" class="m-auto itineraire" />
              </a>
              <p></p>

              <Timeline>
                
                <Jour
                  link=""
                  date="Samedi 2 septembre 2023"
                  start="Montréal"
                  end="Saint-Jean-sur-Richelieu"
                  length="59 km"
                >
                  <Heure start="08h00">
                    Rassemblement à l'<Link
                    href="https://www.google.com/maps/place/%C3%89cole+primaire+Jean-Baptiste-Meilleur/@45.5316737,-73.558441,446m/data=!3m1!1e3!4m6!3m5!1s0x4cc91bbe35017fef:0xd4f00925a2a08a3e!8m2!3d45.5320839!4d-73.5579646!16s%2Fg%2F1w04jqnp?entry=ttu"
                    >École primaire Jean-Baptiste-Meilleur</Link>
                  </Heure>
                  <Heure start="09h00">Montréal - > Sainte Catherine (22.0 km)</Heure>
                  <Heure start="10h15">Collation au <Link
                    href="https://www.google.com/maps/place/Parc+Francis-Xavier-Fontaine/@45.4057333,-73.5761976,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc911add3c7f823:0x70b6ca08d31ac5c5!8m2!3d45.4057333!4d-73.5736227!16s%2Fg%2F11qpjk06s0?entry=ttu"
                    >Parc Francis-Xavier-Fontaine</Link> 🚻 🚰
                  </Heure>
                  <Heure start="10h45">Sainte Catherine -> Saint-Philippe (12.0 km)</Heure>
                  <Heure start="11h30">
                    Dîner au <Link
                    href="https://www.google.com/maps/place/Parc+G%C3%A9rard-Laframboise/@45.3616101,-73.4811907,595m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4cc90c7658978101:0xd7496d1bcfc7af45!8m2!3d45.3616101!4d-73.4786158!16s%2Fg%2F11cp6jrx86!5m1!1e3?entry=tts&shorturl=1"
                    >Parc Gérard-Laframboise</Link> 🚻 🚰
                  </Heure>
                  <Heure start="13h00">Saint-Philippe -> Parc des Ancêtres (15.0 km)</Heure>
                  <Heure start="13h45">Collation au  <Link
                    href="https://www.google.com/maps/place/Parc+des+Anc%C3%AAtres/@45.3154939,-73.3478655,16.27z/data=!4m6!3m5!1s0x4cc9a176e072e365:0x40b5228d343700a1!8m2!3d45.3153108!4d-73.3461523!16s%2Fg%2F11nnjrxbcn?entry=ttu"
                    >Parc des Ancêtres</Link> 🚻 
                  </Heure>
                  <Heure start="14h15">Parc des Ancêtres -> Saint-Jean-sur-Richelieu (10.01 km)</Heure>
                  <Heure start="15h00">Arrivée au <Link
                    href="https://www.google.com/maps/place/Centre-de-Plein-Air-Ronald-Beauregard/@45.2775076,-73.2778579,13.04z/data=!4m6!3m5!1s0x4cc9a2626f10812d:0x736f99afc17099f2!8m2!3d45.2883523!4d-73.251608!16s%2Fg%2F11b5wkbv7c?entry=tts&shorturl=1"
                    >Centre-de-Plein-Air-Ronald-Beauregard</Link> 🚻 🚰
                  </Heure>
                </Jour>
              
                <Jour
                  link=""
                  date="Dimanche 3 septembre 2023"
                  start="Saint Jean-sur-Richelieu"
                  end="Saint-Joachim-de-Shefford"
                  length="69 ou 117 km"
                >
                  <Heure start="09h00">Saint Jean-sur-Richelieu -> Farnham  (25.0 km)</Heure>
                  <Heure start="10h25">
                    Collation au <Link 
                    href="https://www.google.com/maps/place/Parc+Isra%C3%ABl-Larochelle/@45.2815796,-72.9725536,16.13z/data=!4m6!3m5!1s0x4cc9c091a823b839:0xb2e77fb40b6cfc4!8m2!3d45.2829839!4d-72.9679228!16s%2Fg%2F11clgwfqxq?entry=tts&shorturl=1"
                    >Parc Israël Larochelle</Link> 🚻
                  </Heure>
                  <Heure start="11h00">Farnham -> Granby (24.0 km)</Heure>
                  <Heure start="12h20">Diner à Granby - Parc de l Estriade</Heure>
                  <Heure start="13h30">Parc de l Estriade - Camping de la rivière du passant (20.0 km)</Heure>    
                  <Heure start="14h30">Arrivée à Camping de la rivière du passant</Heure>
                  <Heure start="15h00">Boucle optionnelle: Granby -> Waterloo -> Granby (48.0 km)</Heure>
                  <Heure start="17h00">Boucle optionnelle: Halte au <Link 
                    href="https://www.google.com/maps/place/Park+Caboose/@45.3379842,-72.5363076,17.09z/data=!4m6!3m5!1s0x4cc9d7e81849a8a9:0x348d78fea5bb1a86!8m2!3d45.3379545!4d-72.5336004!16s%2Fg%2F11c1qs2ndk?entry=tts&shorturl=1"
                    >Parc Caboose</Link> 🚻 🚰
                  </Heure>
                  <Heure start="18h00">Boucle optionnelle: Retour au camping</Heure>
                </Jour>

                <Jour
                  link=""
                  date="Lundi 4 septembre 2023"
                  start="Saint-Joachim-de-Shefford"
                  end="Montréal"
                  length="92 km"
                >
                  <Heure start="09h00">Saint-Joachim-de-Shefford -> Granby (20.0 km)</Heure>
                  <Heure start="10h15">
                    Collation au parc de l'<Link
                    href="https://www.google.com/maps/place/Parc+de+l'Estriade/@45.3966838,-72.7135372,15z/data=!4m6!3m5!1s0x4cc9d0f45903dc17:0x4af0c141e83d5785!8m2!3d45.3963598!4d-72.7137732!16s%2Fg%2F11b7ld46q6?entry=ttu"
                    >Estriade</Link> 🚻 🚰
                  </Heure>
                  <Heure start="10h45">Granby -> Saint Césaire (25.0 km)</Heure>
                  <Heure start="12h00">
                    Collation à la halte routière de  <Link 
                    href="https://www.google.com/maps/place/Halte+Routi%C3%A8re+Saint-C%C3%A9saire/@45.4144654,-73.02423,17.13z/data=!4m15!1m8!3m7!1s0x4cc9b9f319a21971:0x5176eff118b82aba!2sSaint-C%C3%A9saire,+QC!3b1!8m2!3d45.410364!4d-73.002159!16s%2Fm%2F05z_cy1!3m5!1s0x4cc9b176ac3986e7:0xb783fb92d16da65f!8m2!3d45.4146903!4d-73.022382!16s%2Fg%2F11frslkvb0?entry=ttu"
                    >Saint-Césaire</Link> 🚻
                      </Heure>
                  <Heure start="12h15">Saint-Césaire -> Chambly (27.0 km)</Heure>
                  <Heure start="13h30">
                    Dîner au <Link
                    href="https://www.google.com/maps/place/Lieu+historique+national+du+Canal-de-Chambly/@45.4471723,-73.2845301,17.99z/data=!4m15!1m8!3m7!1s0x4cc9b9f319a21971:0x5176eff118b82aba!2sSaint-C%C3%A9saire,+QC!3b1!8m2!3d45.410364!4d-73.002159!16s%2Fm%2F05z_cy1!3m5!1s0x4cc9a684e04c85cf:0x70cd386e5bf2e5e2!8m2!3d45.446883!4d-73.283323!16zL20vMDRoYndn?entry=ttu"
                    >Lieu historique national du Canal-de-Chambly</Link> 🚻
                  </Heure>
                  <Heure start="15h00">Chambly -> Longueuil (20.0 km)</Heure>
                  <Heure start="16h00">
                    Collation au <Link
                    href="https://www.google.com/maps/place/Parc+Christ-Roi/@45.5112736,-73.466267,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc904e85f3a6bd1:0x15577735d162c5c8!8m2!3d45.5112699!4d-73.4636921!16s%2Fg%2F1tz95c1x?entry=ttu"
                    >Parc Christ-Roi</Link> 🚻
                  </Heure>
                  <Heure start="16h20">Parc Christ-Roi -> Montréal (9.0 km)</Heure>
                  <Heure start="17h00">
                    Rassemblement pour la masse critique au <Link
                    href="https://www.google.com/maps/place/Parc+des+Faubourgs/@45.5255304,-73.5555144,18.79z/data=!4m10!1m2!2m1!1sparc+des+faubourg!3m6!1s0x4cc91bbbdefcb84f:0x1a18c9444001faf8!8m2!3d45.526805!4d-73.5565299!15sChFwYXJjIGRlcyBmYXVib3VyZ5IBBHBhcmvgAQA!16s%2Fg%2F11c6zwvjnf?entry=ttu"
                    >Parc des Faubourg</Link> à l'entrée du Pont-Jacques-Cartier
                  </Heure>
                </Jour>

              </Timeline>
            </Section>

            <Section id="participer">
              <SectionTitle>Comment participer</SectionTitle>

              <p>Ça vous interpelle?! Joignez-vous à nous!</p>

              <SubTitle>Joindre la cavalcade</SubTitle>
              <p>
                Vous pouvez rejoindre la Cavalcade à n'importe quel point dans son <Link href="#chemin"
                  >parcours</Link
                >. Tout le monde est bienvenu-e, que ce soit pour l'entièreté du chemin ou seulement une
                petite partie. Cependant, si vous désirez vous joindre à nous du début à la fin, soyez
                avertis de la considérable distance à parcourir chaque jour: il serait préférable si
                vous êtes en forme et avez déjà de l'expérience pour ce genre de trajet.
              </p>
              <div class="border bg-green-50 border-green-600 p-5 rounded-lg py-4">
                <strong class="text-green-700"
                  >Il est obligatoire de remplir le formulaire pour participer à la cavalcade.
                </strong> <br />
                Cela nous permet de collecter les fonds pour couvrir les dépenses logistiques et nous assurer que les campings pourront accommoder le nombre de participants. Les profits, si existants, seront offert à une OBNL oeuvrant dans la défense du cyclisme.

                <div class="flex">
                  <a
                    class="block text-xl m-auto my-4 px-5 py-4 border shadow-md rounded-lg  
              bg-white border-green-600 no-underline text-green-700 transition-all hover:translate-y-1 hover:shadow-sm hover:bg-green-700 hover:text-white"
                    href="https://www.zeffy.com/fr-CA/ticketing/5ce6ec36-b690-4c6f-80fe-7fc3d5e4d779"
                    target="_blank">Rejoignez la cavalcade!</a
                  >
                </div>
              </div>
              <dl>
                <dt>Groupe des participants</dt>
                <dd>
                  Rejoignez le <Link
                    href="https://www.facebook.com/groups/461416868754956"
                    >groupe des participants </Link> afin d'échanger avec vos futurs compatriotes et, notamment, organiser un transport jusqu'à Montréal ou emprunter du matériel de plein-air. 
                </dd>
                <dt>Équipement</dt>
                <dd>
                  Prévoir tout son équipement typique pour le vélo-camping: vélo, tente, matelas de sol,
                  produits d'hygiène, vêtements, etc. Voici <Link
                    href="https://www.velo.qc.ca/boites-a-outils/pratique-cycliste/cyclotourisme/"
                    >quelques conseils.</Link
                  >
                </dd>
                <dt>Nourriture</dt>
                <dd>
                  Nous prévoyons des pauses régulières de 30min à une heure l'avant-midi,
                  le midi et l'après-midi tout près des épiceries/restaurants.
                </dd>
                <dl>
                  <dt>Information</dt>
                  <dd>
                    Révisez l'itinéraire sur cette page avant le départ et informez vous sur les
                    conseils pour <Link
                      href="https://boutique.velo2000.qc.ca/blogs/nouvelles/rouler-en-peloton/"
                      >rouler en peloton</Link
                    >.
                  </dd>
                </dl>
              </dl>
              <SubTitle>Encourager la cavalcade</SubTitle>
              <p>
                Même si vous ne pouvez pas participer en personne, il y a une tonne de moyens de nous
                encourager!
              </p>
              <dl>
                <dt><Link href="https://www.facebook.com/cavalcadevelo">Parlez-en!</Link></dt>
                <dd>En personne ou en ligne! Partagez cette page ou l'événement Facebook.</dd>
                <dt>
                  <Link
                    href="https://www.zeffy.com/fr-CA/donation-form/64c31c0e-b5c1-4f10-a959-af283abda885"
                    >Contribuez financièrement</Link
                  >
                </dt>
                <dd>
                  Tous les fonds ramassés seront utilisés pour l'organisation de futures cavalcades!
                </dd>
              </dl>
            </Section>

            <Section id="faq">
              <SectionTitle>Foire aux questions</SectionTitle>

              <h5 class="font-bold">C’est quoi la Cavalcade?</h5>
              <p>
                C’est une manifestive, qui a pour but de promouvoir l’utilisation du vélo et des transports actifs 
                en sensibilisant la population et les pouvoirs publics à la nécessité de mise en place d’infrastructures 
                sécuritaires dans les villes et dans les campagnes.
              </p>

              <h5 class="font-bold">Est-ce que vous fournissez/louez de l’équipement?</h5>
              <p>
                Non, nous ne fournissons aucun équipement que ce soit de vélo ou de camping. Cependant, nous avons mis 
                en place <Link href="https://www.facebook.com/groups/461416868754956">groupe des participants</Link> pour 
                que les participants puissent se prêter ou partager du matériel entre eux.
              </p>

              <h5 class="font-bold">À quelle allure roulez-vous?</h5>
              <p>
                Les participants seront répartis en groupes selon leur allure, en gros de 15 à 29 km/h. Il y 
                en aura pour tous les goûts et il sera bien sûr possible de changer de groupe au cours de la Cavalcade. 
                Il y aura aussi des pauses prévues environ tous les 20 km. Le parcours se veut réellement inclusif, 
                on ne laissera personne derrière!
              </p>

              <h5 class="font-bold">Faut-il obligatoirement s’inscrire?</h5>
              <p>
                Oui! Nous avons négocié des emplacements de camping à Saint-Jean-sur-Richelieu et Granby. Nous 
                devrons les informer de notre nombre pour réserver les emplacements.
              </p>              

              <h5 class="font-bold">Les enfants sont-ils admis?</h5>
              <p>
                Bien sûr! Qu’ils roulent d’eux-mêmes ou comme passagers sur une remorque, en vélo-cargo, sur un 
                siège ou autre. Assurez-vous uniquement qu’ils soient capables de parcourir la distance incluses 
                dans l'<Link href="#chemin">itinéraire</Link> et de maintenir un rythme minimum d’environ 15 km/h.
              </p>              
            
              <h5 class="font-bold">Fournissez-vous une assistance?</h5>
              <p>
                Une voiture d’assistance fournira une assistance mécanique minimale afin de répondre aux imprévus. 
                Il est conseillé d’apporter sa propre trousse à outils. En cas de problème mineur, chaque groupe comportera 
                une personne titulaire d’un brevet de premiers secours mais est, encore une fois, est conseillé d’apporter 
                sa trousse de premiers soins. En cas de problème majeur, contacter le 911 sera nécessaire.
              </p>              
            
            </Section>

            <Section id="contact">
              <SectionTitle>Nous contacter</SectionTitle>

              <p>
                Pour toute question, contacter <Link
                  href="mailto:cavalcadevelo@gmail.com?subject=Question depuis cavalcadevelo.com"
                  >cavalcadevelo@gmail.com</Link
                >
              </p>
              <p>
                Rejoignez la conversation sur <Link href="https://www.facebook.com/cavalcadevelo"
                  >Facebook</Link
                >
              </p>
            </Section>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
