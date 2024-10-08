import { useState } from 'react';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  QrCodeIcon,
  CreditCardIcon,
} from '@heroicons/react/20/solid';
import { Roboto_Slab } from 'next/font/google';
import { ModalPix } from '../ModalPix';
import { Select } from '../Select';
import { ModalCard } from '../ModalCard';

const roboto = Roboto_Slab({ subsets: ['latin'] });

const items = [
  {
    name: 'Conjunto Taças de Espumante',
    price: 'R$ 200,00',
    productLink:
      'https://www.amazon.com.br/Conj-Champanhe-Branta-Bohemia-Crystalite/dp/B0C318VSXB/ref=sr_1_32?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2NZSZ32INXGB8&dib=eyJ2IjoiMSJ9.D18N6zMolXYf7XuN229kIdt0EpDnNrKy27pR1ngtIQ6ruQcp1lB4Cn7Kun9DlAh7GqjaHD2UF-XulxQ0ZbbQJDN5P99p1olG9pyFp-p6Ju7QDVl-kcAyELVzOG62cifrA7oPTy9SI561frAEoBalinDnjQMur-Z3A7hYUUeCwcAZe8uyV5hRtUp1JeY_h3SvkAh0RYJL9oyWk9VaX30WK_rDc2RikphhHPee-yKZ3EWakumjvY16kHrDTmTMudi2Kxg49-h4wDoIb3nzG6sb_VZPWUxG38256IY18WwORwQ.sIBXykCbNKLZHq4QqzjliJkQ-OAdy7piT81i0BKxPvE&dib_tag=se&keywords=ta%C3%A7as+espumante+cristal&qid=1721700201&sprefix=ta%C3%A7as+espumante+crista%2Caps%2C197&sr=8-32&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e',
    imageUrl: 'conjunto_taca.png',
    creditCard: 'https://mpago.la/18Suh89',
  },
  {
    name: 'Panela Polishop',
    price: 'R$ 485,00',
    productLink:
      'https://www.polishop.com.br/panelas-polishop-family-24cm-saute-petit-20cm-ultra-azul-tampas-de-vidro/p',
    imageUrl: 'panela_poli.png',
    creditCard: 'https://mpago.la/1gYTGgR',
  },
  {
    name: 'Jogo de Talheres Tramontina',
    price: 'R$ 80,00',
    productLink:
      'https://www.amazon.com.br/Talheres-Faqueiro-Pe%C3%A7as-B%C3%BAzios-Tramontina/dp/B07WGQ64QR/ref=asc_df_B07WGQ64QR/?tag=googleshopp00-20&linkCode=df0&hvadid=379727341882&hvpos=&hvnetw=g&hvrand=609151019838047931&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196585&hvtargid=pla-909132816144&psc=1&mcid=b84d166839ba3cb5a33aee29bb36b817',
    imageUrl: 'jogo_talher.png',
    creditCard: 'https://mpago.la/17QuoXW',
  },
  {
    name: 'Conjunto de Copos',
    price: 'R$ 150,00',
    productLink:
      'https://www.mercadolivre.com.br/kit-6-copos-de-vidro-duplo-350ml-cor-transparente/p/MLB29076949?item_id=MLB4899418560&from=gshop&matt_tool=68506710&matt_word=&matt_source=google&matt_campaign_id=14302215504&matt_ad_group_id=154967597028&matt_match_type=&matt_network=g&matt_device=c&matt_creative=649487315881&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB4899418560&matt_product_partition_id=1497388241163&matt_target_id=pla-1497388241163&gclid=CjwKCAjwhvi0BhA4EiwAX25uj3ekv-mceCw5eZPxDlGTd9TzDjVpOLLLpoVNx1ct5L9Bz6uX1RH11RoCpm4QAvD_BwE',
    imageUrl: 'conjunto_copos.png',
    creditCard: 'https://mpago.la/1BN53Xk',
  },
  {
    name: 'Tábua Mágica',
    price: 'R$ 50,00',
    productLink:
      'https://www.amazon.com.br/Tabua-M%C3%A1gica-Descongelar-Alimentos-Cozinha/dp/B082BG2RYW/ref=asc_df_B082BG2RYW/?tag=googleshopp00-20&linkCode=df0&hvadid=379805758976&hvpos=&hvnetw=g&hvrand=18106954026493973684&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196585&hvtargid=pla-880414054014&psc=1&mcid=1368c813aa293b6bad28dcab1edc6bec',
    imageUrl: 'tabua_magica.png',
    creditCard: 'https://mpago.la/2jQEdem',
  },

  {
    name: 'Jogo de Facas Inox',
    price: 'R$ 140,00',
    productLink:
      'https://www.amazon.com.br/Facas-Hamilton-Beach-Square-Suporte/dp/B0CLYS53NF/ref=sr_1_15?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3JAM3A057DOSZ&dib=eyJ2IjoiMSJ9.2SsWOZjSGQ4x3Jg-lDx7pqtOuyH4GR9F2No3c9UMMmKg9vyrWgBuwyKFpG79sqhgR2gAPeSERjW9kIuKiODPoxNCm7WHmewQ0445NsvmeMtdpskmprLOEQv4qqlR_oXqwqP6Pa_hUsPaZURkX-luEvig07uqHdalBGCmaDcWDiNE-1cXQfFwJVo3W5FoTsrIE64Y3R81s1ttabdWCmGFOhQ9r_VVbJFjaBwRPUFFFv04NIGmHj9UpT9uu96_JhCX3RbJcnuLczUvqOGdECC85VXS67w9q0hnUVgRh9GwUF4.h0JGo26HvOrON3ECePCLqJFHsIaRBW61XrddbmZaSCI&dib_tag=se&keywords=faca&qid=1721700096&sprefix=fa%2Caps%2C325&sr=8-15&ufe=app_do%3Aamzn1.fos.a492fd4a-f54d-4e8d-8c31-35e0a04ce61e',
    imageUrl: 'jogo_faca.png',
    creditCard: 'https://mpago.la/16jgQgV',
  },
  {
    name: 'Parasailing Punta Cana',
    price: 'R$ 250,00',
    productLink:
      'https://www.civitatis.com/br/punta-cana/aventura-aquatica-punta-cana?aid=100&cmp=pt_BR_Nonbrand&cmpint=_Actividades_PuntaCana_RSA_119689&gad_source=1&gclid=CjwKCAjwhvi0BhA4EiwAX25uj6f1Fbg4MA6SJIljCBhxOiNdop3YWk1kjULkdWZZtJQm4uDQ1ffXXBoCBRUQAvD_BwE&gclsrc=aw.ds',
    imageUrl: 'para.png',
    creditCard: 'https://mpago.la/1gEQLKg',
  },
  {
    name: 'Panela Elétrica Para Fondue',
    price: 'R$ 170,00',
    productLink:
      'https://www.fastshop.com.br/web/p/d/OSOFND100CNZ_PRD/panela-el%C3%A9trica-para-fondue-oster---ofnd100?utm_source=google&utm_medium=cpc&utm_term=pmax_1p&utm_campaign=17557564951&gad_source=1&gclid=CjwKCAjwhvi0BhA4EiwAX25uj_hzVPy9yd6TKZO8_elIImjknju6RMAFYvolFZXP4LsLWF7pafu8aRoC0lMQAvD_BwE',
    imageUrl: 'fondue.png',
    creditCard: 'https://mpago.la/2dANeYm',
  },
  {
    name: 'Assadeira de Bolo Elétrica',
    price: 'R$ 75,00',
    productLink:
      'https://www.amazon.com.br/M%C3%A1quina-Fazer-Assadeira-Port%C3%A1til-El%C3%A9trica/dp/B0CQRYJMN1/ref=asc_df_B0CQRYJMN1/?tag=googleshopp00-20&linkCode=df0&hvadid=676045623741&hvpos=&hvnetw=g&hvrand=236756772581872574&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196585&hvtargid=pla-2274173662066&psc=1&mcid=ff5000ec45b13d53820f6a9e6386695e',
    imageUrl: 'boleira.png',
    creditCard: 'https://mpago.la/1E9osgN',
  },
  {
    name: 'Vaso de Plantas',
    price: 'R$ 160,00',
    productLink:
      'https://now.westwing.com.br/suporte-de-plantas-com-vaso-humaita-verde-oliva-138395.html?simple=DEQ24ENT71864-170589&gad_source=4&gclid=Cj0KCQjwz7C2BhDkARIsAA_SZKb3m0GOmkgQGdLtAxUuew6iSnpto3gR5VOjckDgaEYYhfmIe8siom0aAmw4EALw_wcB',
    imageUrl: 'vaso_planta.png',
    creditCard: 'https://mpago.la/2ewWrba',
  },
  {
    name: 'Caixa de Som JBL',
    price: 'R$ 500,00',
    productLink:
      'https://www.amazon.com.br/Caixa-Bluetooth-JBL-Flip-Essential/dp/B0B3XX8P9C/ref=asc_df_B0B3XX8P9C/?tag=googleshopp00-20&linkCode=df0&hvadid=379751789278&hvpos=&hvnetw=g&hvrand=4030027105346820953&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196585&hvtargid=pla-1676993151769&psc=1&mcid=0f05999166243970bdc056a00671c1eb',
    imageUrl: 'jbl.png',
    creditCard: 'https://mpago.la/18ARvyh',
  },
  {
    name: 'Filtro de Água Everest',
    price: 'R$ 1200,00',
    productLink:
      'https://www.compraeverest.com.br/everest-star--prata/p?idsku=4&gad_source=1&gclid=CjwKCAjwhvi0BhA4EiwAX25uj5moe6Mvtt9Kn_V0L-kjtWbn24XIBJ5nXhpj5z5lf0iLkvocm7fXhxoC5boQAvD_BwE',
    imageUrl: 'filtro_everest.png',
    creditCard: 'https://mpago.la/2jgCJ8q',
  },
  {
    name: 'Tábua de Carne',
    price: 'R$ 70,00',
    productLink:
      'https://now.westwing.com.br/tabua-typhoon-efeito-ardosia-67784.html?simple=DEQ23TYP60202-86699&gad_source=1&gclid=CjwKCAjw_ZC2BhAQEiwAXSgCltofZAUqqIMCGlBX_866QRrfcS3pr7_yOZWkUDImKZDZg3QRLbdhsxoCB1kQAvD_BwE',
    imageUrl: 'tabua_carne.png',
    creditCard: 'https://mpago.la/2koYNzr',
  },
  {
    name: 'Edredom',
    price: 'R$ 215,00',
    productLink:
      'https://www.ortobom.com.br/roupa-de-cama/edredom-microfibra-branco/4611?gad_source=1&gclid=Cj0KCQjwi5q3BhCiARIsAJCfuZmtJTYqQsp93z7v9_CzQBbrmg1GUFFUJoQe_nLUdvK6RD790oBwjCcaApoKEALw_wcB',
    imageUrl: 'edredom.png',
    creditCard: 'https://mpago.la/2dX8CN3',
  },
  {
    name: 'Garrafa Termica Stanley 700ml',
    price: 'R$ 220,00',
    productLink:
      'https://www.amazon.com.br/Garrafa-T%C3%A9rmica-Classic-0-95L/dp/B09541H43Z/ref=sr_1_3?crid=32VJ4J6I4GCVG&dib=eyJ2IjoiMSJ9.FldmZFM_kGwFvc8OXmp_i7jz5ngFLzrZp0B2BV4rHGQ0rMYGsSa-l9uXtcHbIs5h3T4m553qiP06qq3ebxiARhdYc3LUq4BDhPFt7wDbfivZ59qtXqPG3Ys36uwEqhjPnbytrBriv0WClKUyEC4iqtOKIC0PYtrNFx9RK0NW0npnei-jvGlHJNUi5FfV53TdqVLKHPmZe9msY9q36yx-brziPAVna1qZ9s7UxRtjhXg.Y9IZRUczktHHwFQFuT_zLxVgGJLxNeFUxHosQqXfVV0&dib_tag=se&keywords=garrafa%2Bstanley&qid=1724202163&s=kitchen&sprefix=garrafa%2Bstanl%2Ckitchen%2C193&sr=1-3&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d&th=1&psc=1',
    imageUrl: 'garrafa_stanley.png',
    creditCard: 'https://mpago.la/2aGkZdL',
  },
  {
    name: 'Panela de Pressão Elétrica',
    price: 'R$ 370,00',
    productLink:
      'https://www.amazon.com.br/Electrolux-capacidade-silenciosa-antitermica-PCE15/dp/B0BZ8WKG61/ref=asc_df_B0BZ8WKG61/?tag=googleshopp00-20&linkCode=df0&hvadid=647436915040&hvpos=&hvnetw=g&hvrand=4805008718060727004&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196585&hvtargid=pla-2201507741736&mcid=af516713bd003757b78d8bfbd9b6dec6&th=1',
    imageUrl: 'panela_eletrica.png',
    creditCard: 'https://mpago.la/132hiMX',
  },
  {
    name: 'Porta Temperos',
    price: 'R$ 70,00',
    productLink:
      'https://www.amazon.com.br/Porta-Temperos-Condimentos-Girat%C3%B3rio-pe%C3%A7as/dp/B0CFWPG11F/ref=asc_df_B0CFWPG11F/?tag=googleshopp00-20&linkCode=df0&hvadid=647436915040&hvpos=&hvnetw=g&hvrand=5717448772585524965&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9196585&hvtargid=pla-2204411156591&psc=1&mcid=519d0d8366a63f309b3c4e726f93aa43',
    imageUrl: 'porta_tempero.png',
    creditCard: 'https://mpago.la/12RbHSM',
  },
  {
    name: 'Jogo de Toalhas',
    price: 'R$ 180,00',
    productLink:
      'https://www.casadatoalha.com.br/jogo-de-toalha-5-pecas-fio-penteado-100-algodao-branca',
    imageUrl: 'jogo_toalha.png',
    creditCard: 'https://mpago.la/2doTFUf',
  },
  {
    name: 'Máquina de Lavar',
    price: 'R$ 2000,00',
    productLink:
      'https://www.magazineluiza.com.br/lavadora-de-roupas-brastemp-inverter-10kg-cesto-inox-15-programas-de-lavagem-titanium-bnf10as/p/237972300/ed/lava/?&seller_id=magazineluiza&utm_source=google&utm_medium=cpc&utm_term=66992&utm_campaign=google_eco_per_ven_pla_ele_apo_1p_ed&utm_content=&partner_id=66992&gclsrc=aw.ds&gclid=CjwKCAjw_ZC2BhAQEiwAXSgClqbZC1Va4TZIq3_AlPYl3AATpQv_xW3ZDC9W3m6LrH7awpT_QJbwrRoCGNEQAvD_BwE',
    imageUrl: 'maquina_lavar.png',
    creditCard: 'https://mpago.la/1Vo4tiS',
  },
  {
    name: 'Porta Copos 4 Unidades',
    price: 'R$ 60,00',
    productLink:
      'https://lojamomo.com.br/products/drycup%C2%AE-porta-copos-momo-lifestyle?variant=43577997099238&currency=BRL&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gad_source=1&gclid=CjwKCAjwqf20BhBwEiwAt7dtdWLDVRumFiAoCiKdXdKMnReQqzZ3F04dBpMsF4kSRcZucwhIIRxuPxoC8k0QAvD_BwE',
    imageUrl: 'porta_copo.png',
    creditCard: 'https://mpago.la/2kCbK2e',
  },
  {
    name: 'Geladeira',
    price: 'R$ 5000,00',
    productLink:
      'https://www.google.com/aclk?sa=l&ai=DChcSEwjZk7KEi7yHAxXlXkgAHdlVIiEYABAWGgJjZQ&co=1&ase=2&gclid=CjwKCAjwhvi0BhA4EiwAX25ujwlC4w1hWJGEn45Ya__0SfwLd83lL762RAnnpIcxl5trNv2bAJ_dwRoCteoQAvD_BwE&sig=AOD64_3Oidz12UDsWJOMaoOkHK7GTQqUXQ&ctype=5&q=&nis=4&ved=2ahUKEwiB-qyEi7yHAxUfqJUCHbUGAhYQ9aACKAB6BAgEEA4&adurl=',
    imageUrl: 'geladeira.png',
    creditCard: 'https://mpago.la/2oxLx6V',
  },
  {
    name: 'Assadeira',
    price: 'R$ 60,00',
    productLink:
      'https://www.amazon.com.br/Tramontina-20051028-Assadeira-Revestimento-Antiaderente/dp/B008R7SPUA/ref=asc_df_B008R7SPUA/?tag=googleshopp00-20&linkCode=df0&hvadid=405655612522&hvpos=&hvnetw=g&hvrand=14554400423036211832&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvtargid=pla-439841107819&mcid=4c32bf3415b83b839f25ddd90b4acb0a&th=1',
    imageUrl: 'assadeira.png',
    creditCard: 'https://mpago.la/1nQ23Af',
  },
  {
    name: 'Grill Frigideira',
    price: 'R$ 170,00',
    productLink:
      'https://www.brinoxshop.com.br/grill-28-cm-2-l-fogao-inducao-revestimento-ceramica-antiaderente-cor-preta-ceramic-life-orion-brinox_4813353/p',
    imageUrl: 'frigideira.png',
    creditCard: 'https://mpago.la/17fRLxo',
  },
];

export default function GiftList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPixModal, setShowPixModal] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedGift, setSelectedGift] = useState(null);
  const itemsPerPage = 6;

  const handleFilterChange = (filterId) => {
    setSelectedFilter(filterId);
  };

  const parsePrice = (price) => {
    return parseFloat(price.replace('R$ ', '').replace(',', '.'));
  };

  const filteredItems = items.sort((a, b) => {
    if (selectedFilter === 'lowPrice') {
      return parsePrice(a.price) - parsePrice(b.price);
    }
    if (selectedFilter === 'highPrice') {
      return parsePrice(b.price) - parsePrice(a.price);
    }
    if (selectedFilter === 'aToZ') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={`lg:space-y-8 px-6 ${roboto.className}`}>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:space-x-8'>
        <div className='lg:w-1/3'>
          <h3 className='text-2xl font-medium text-gray-800'>
            Lista de Presentes
          </h3>
          <p className='mt-4 text-base text-gray-600'>
            Clique nas opções Pix ou Cartão para comprar diretamente pelo nosso
            site. <br />
            Caso prefira adquirir o presente em uma loja externa, como a Amazon,
            clique no título do produto e envie para o nosso endereço abaixo.
          </p>
          <p className='mt-2 text-base font-medium text-gray-800'>
            Avenida Rui Barbosa 538, Apto 306, São Francisco
          </p>
        </div>
        <div className='lg:w-2/3 lg:mx-auto lg:block'>
          <Select
            selectedFilter={selectedFilter}
            onChange={handleFilterChange}
          />
          <ul
            role='list'
            className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'
          >
            {currentItems.map((item, index) => (
              <li
                key={index}
                className='col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
              >
                <img
                  alt={item.name}
                  src={item.imageUrl}
                  className='h-40 w-full object-cover rounded-t-lg'
                />
                <div className='flex flex-1 flex-col p-4'>
                  <a
                    href={item.productLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-lg font-medium text-gray-800 hover:underline hover:underline-offset-2'
                  >
                    {item.name}
                  </a>
                  <p className='mt-2 text-sm text-gray-600'>{item.price}</p>
                </div>
                <div className='flex divide-x divide-gray-200'>
                  <button
                    className='relative flex-1 inline-flex items-center justify-center gap-x-3 border border-transparent py-2 text-sm transition-colors duration-300 font-semibold text-gray-800 rounded-bl-lg hover:bg-gray-200'
                    onClick={() => setShowPixModal(true)}
                  >
                    <QrCodeIcon
                      aria-hidden='true'
                      className='h-5 w-5 text-gray-500'
                    />
                    Pix
                  </button>
                  <button
                    onClick={() => {
                      setShowCardModal(true);
                      setSelectedGift(item);
                    }}
                    className='relative flex-1 inline-flex items-center justify-center gap-x-3 py-2 text-sm font-semibold transition-colors duration-300 text-gray-800 rounded-br-lg hover:bg-gray-200'
                  >
                    <CreditCardIcon
                      aria-hidden='true'
                      className='h-5 w-5 text-gray-500'
                    />
                    Cartão
                  </button>
                </div>
              </li>
            ))}
          </ul>
          {totalPages > 1 && (
            <nav className='flex mt-8 items-center justify-between border-t border-gray-200 px-4 sm:px-0'>
              <div className='-mt-px flex w-0 flex-1'>
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`inline-flex items-center border-t-2 pr-1 pt-4 text-sm font-medium ${
                    currentPage === 1
                      ? 'border-transparent text-gray-300'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  <ArrowLongLeftIcon
                    className='mr-3 h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                  Anterior
                </button>
              </div>
              <div className='hidden md:-mt-px md:flex'>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium ${
                      currentPage === index + 1
                        ? 'border-gray-800 text-gray-800'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div className='-mt-px flex w-0 flex-1 justify-end'>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`inline-flex items-center border-t-2 pl-1 pt-4 text-sm font-medium ${
                    currentPage === totalPages
                      ? 'border-transparent text-gray-300'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Próximo
                  <ArrowLongRightIcon
                    className='ml-3 h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                </button>
              </div>
            </nav>
          )}
        </div>
      </div>
      {showPixModal && (
        <ModalPix open={showPixModal} onClose={() => setShowPixModal(false)} />
      )}
      {showCardModal && (
        <ModalCard
          open={showCardModal}
          onClose={() => setShowCardModal(false)}
          link={selectedGift.creditCard}
          gift={selectedGift.name}
        />
      )}
    </div>
  );
}
