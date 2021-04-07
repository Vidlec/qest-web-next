import React from 'react'
import styled from 'styled-components'
import { Col } from 'components/Col'
import { Row } from 'components/Row'
import { Line } from 'components/Line'

const AboutUs: React.FC = () => {
	return (
		<>
			<Wrapper>
				{/*<Navigation />*/}
				<HeroContainer>
					<HeroHeadline>
						<span>THERE IS MORE</span>
						<HeroLineWrapper>
							<Line />
						</HeroLineWrapper>
						<span>UNDER THE SURFACE</span>
					</HeroHeadline>

					<HeroDescription>
						Qest je dobrodružství. Kódování je umění, jehož krása{' '}
						<YellowText>leží pod povrchem.</YellowText> Jsme
						badatelé v nekonečném světě oceánu aplikací a
						informačních systémů. Noříme se{' '}
						<RedText>do hlubin</RedText>, abychom každému z našich
						klientů přinesli výjimečné řešení.
						<BlueText> Náš kód</BlueText> má nezaměnitelný rukopis:
						je precizní, vyladěný, založený na vzájemném porozumění.
						Elegantním, intuitivním a perfektně fungujícím softwarem
						poskytujeme uživateli jedinečný zážitek. S hrdostí
						vytváříme krásu a dokonalost pod hladinou.{' '}
						<GreenText>
							Co je důležité, je očím neviditelné
						</GreenText>
						.
					</HeroDescription>

					<LogoLineWrapper>
						<Line />

						<LogoPicture>
							{/* TODO get transparent bg logo*/}
							<PictureImg
								src={
									'/assets/images/logo-psychedelic-negative.png'
								}
								alt={'Qest psychedelic logo'}
							/>
						</LogoPicture>
					</LogoLineWrapper>

					<ArrowLinkWrapper>
						<ArrowLink href={'#'}>
							<ArrowIcon />
							<span>ponořit se hlouběji</span>
						</ArrowLink>
					</ArrowLinkWrapper>
				</HeroContainer>

				<Container>
					<Headline>JSME QEST</Headline>

					<WeAreRow>
						<Col mobile={12} desktop={7}>
							<WeAreDescription>
								Nejsme jen dodavatel{' '}
								<YellowText>softwarových řešení.</YellowText>{' '}
								Vztahy v týmu i s klienty zakládáme na důvěře a
								partnerství. Pro své klienty, ať už ambiciózní
								české startupy, či korporáty, vyvíjíme skvělé{' '}
								<RedText>aplikace</RedText>,{' '}
								<BlueText>weby</BlueText>,{' '}
								<PinkText>informační systémy</PinkText> a třeba
								i <GreenText>chytré domy</GreenText>. Každý den
								na sobě pracujeme a posouváme se vpřed. Úspěch
								klienta je náš největší závazek.
							</WeAreDescription>
						</Col>

						<CloudCol mobile={12} desktop={5}>
							<CloudPicture>
								<PictureImg
									src={'/assets/images/cloud-smaller.png'}
									alt={'Brain'}
								/>
							</CloudPicture>
							<CloudLine />
						</CloudCol>
					</WeAreRow>

					<ArrowLinkWrapper>
						<ArrowLink href={'#'}>
							<ArrowIcon />
							<span>co umíme</span>
						</ArrowLink>
					</ArrowLinkWrapper>
				</Container>

				<Container>
					<Headline>CO UMÍME</Headline>

					<SkillsRow>
						<Col mobile={12} desktop={7}>
							{/*TODO*/}
							<p>TODO</p>

							<SkillsList>
								<SkillsListItem>
									<SkillHeadline>
										<BlueText>
											Backendové a cloudové aplikace
										</BlueText>
									</SkillHeadline>
									<SkillDescription>
										dodáváme serverová a cloudová řešení
									</SkillDescription>
								</SkillsListItem>

								<SkillsListItem>
									<SkillHeadline>
										<YellowText>Weby</YellowText>
									</SkillHeadline>
									<SkillDescription>
										Navrhujeme a implementujeme webové
										aplikace
									</SkillDescription>
								</SkillsListItem>
							</SkillsList>
						</Col>

						<Col mobile={12} desktop={5}>
							<TechnologiesCard>
								<TechnologiesPicture>
									<PictureImg
										src={'/assets/images/ruka-zavrena.png'}
									/>
								</TechnologiesPicture>

								<TechnologiesDescription>
									<strong>Programovací jazyky: </strong>
									C#, javascript, typescript, html, css
								</TechnologiesDescription>

								<TechnologiesDescription>
									<strong>Používáme technologie: </strong>
									graphql, rest api frontend: React (16+),
									Typescript, Redux (Redux-saga)/Apollo,
									Styled components
								</TechnologiesDescription>

								<TechnologiesDescription>
									<strong>backend (javascript): </strong>
									Node.js, Typescript MongoDB, Docker,
									Elasticsearch, MariaDB, AWS, Azure, Google
									Cloud, Serverless, Redis, Kubernetes,
									OpenStack, Express.js, Apollo Graphql
								</TechnologiesDescription>

								<TechnologiesDescription>
									<strong>C#: </strong>ASP.NET Core (latest),
									C# (latest), SignalR/WebSockets, MongoDB, MS
									SQL, RabbitMQ, Redis, Docker, Kubernetes
									(Azure)
								</TechnologiesDescription>
							</TechnologiesCard>
						</Col>
					</SkillsRow>
				</Container>

				<Container>
					<ValuesHeadline>HODNOTY</ValuesHeadline>

					<ValuesWrapper>
						<ValueItem
							number={'1'}
							headline={'Human\nCentered\nDesign'}
							imageSrc={'/assets/images/srdce.png'}
							imageAlt={'Heart'}
							description={
								'Ke každému produktu přistupujeme individuálně. Naším cílem je vytvořit návrh, který je funkční a řeší reálný problém. Navrhujeme a vyvíjíme intuitivní a krásné produkty.'
							}
						/>

						<ValueItem
							number={'2'}
							headline={'Kreativita\na\nInovace'}
							imageSrc={'/assets/images/hlava.png'}
							imageAlt={'Heart'}
							description={
								'Uvažujeme jinak, experimentujeme a nebojíme se nových postupů a řešení. Inovativní myšlení a kreativita nás spojují a ženou kupředu. Naše tvůrčí koncepty dotahujeme do posledního detailu.'
							}
						/>

						<ValueItem
							number={'3'}
							headline={'Týmová\npráce'}
							imageSrc={'/assets/images/koule.png'}
							imageAlt={'Heart'}
							description={
								'Máme za sebou čtyři roky práce a 40+ úspěšných projektů. Náš tým se rychle rozrůstá, stejně jako rostou i naše ambice. Zaměstnáváme lidi, kteří mají schopnost učit se a inovovat, věří v týmovou práci a společný růst a hlavně: milují to, co dělají.'
							}
						/>

						<ValueItem
							number={'4'}
							headline={'Efektivita\nje\nzáklad'}
							imageSrc={'/assets/images/schody.png'}
							imageAlt={'Heart'}
							description={
								'Poskytujeme nákladově efektivní služby a klademe velký důraz na zájmy klienta. Týmy skládáme vždy podle potřeb projektu a naše procesy zajišťují vysokou kvalitu komunikace. Nominovaný team-leader má za úkol zaručit maximální zefektivnění práce.'
							}
						/>
					</ValuesWrapper>
				</Container>

				<Container>
					<Headline>NÁŠ TEAM</Headline>
				</Container>

				<Container>
					<Headline>QEST HQ</Headline>

					<HQDescription>
						V Qestu se rádi a často pyšníme tím, kde pracujeme.
						Součástí kanceláří je terasa s posezením, grilem a
						inspirativním výhledem, relaxační zóna, stolní tenis,
						Xbox, kuchyňka s kávovarem, chladničkou a dostatečným
						množstvím občerstvení jako je cola, káva, voda, čaj.
						<br />
						<br />
						Proč Karlín? V Karlíně to žije a stává se tech centrem
						hlavního města Prahy. Sdružuje se zde silná IT komunita.
						Zcela přirozeně se z Karlína stalo startupové centrum,
						malé pražské Silicon Valley.
					</HQDescription>

					{/*	TODO grid component*/}
				</Container>

				<Container>
					<Headline>KARIÉRA</Headline>

					<CareerDescription>
						Chceš se těšit na pondělí jako my? Spoj se s Qestem.
						Svou práci děláme rádi a na špičkové úrovni. Hledáme
						skvělé lidi, kteří se chtějí učit, rozvíjet a pracovat
						na projektech s nejnovějšími technologiemi. Dnes je nás
						přes 30 a stále rosteme, takže u nás opravdu je, od koho
						se učit. Jsme mladý tým, ale věk je jenom číslo.
						Oceňujeme zkušenost, zodpovědnost a vášeň pro
						dokonalost. Pátráme po lidech s tím pravým přístupem,
						všechno ostatní je možné se naučit. Velmi si zakládáme
						na mezilidských vztazích, ať už jde o vztahy mezi
						zaměstnanci, nebo vůči klientům. Nabízíme práci v
						moderním prostředí a uvolněné atmosféře se zázemím
						stabilní společnosti. Naším produktem je „Team As a
						Service“ a jako tým spolu také dost často fungujeme i
						mimo práci. #qestlife Nehrajeme si ale jen na svém
						písečku a o know-how se rádi podělíme v rámci našich
						veřejných akcí – Qeetup či Q-TON. Vydáváme také náš
						vlastní podcast Qcast o moderních technologiích a
						programování.
					</CareerDescription>

					<CareerCTA>
						<span>KOHO HLEDÁME</span>
						<img src={'/assets/images/otaznik.png'} alt={''} />
					</CareerCTA>
				</Container>

				<Container>
					<Headline>BLOG</Headline>
					{/*	TODO load from api*/}
				</Container>
			</Wrapper>
		</>
	)
}

export default AboutUs

export const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
`

export const Container = styled.section`
	width: 100%;
	margin: 0 auto 13.875rem auto;
	padding: 0 1rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.mobileLarge}) {
		max-width: ${({ theme }) => theme.mediaQueries.mobileLarge};
	}
	@media (min-width: ${({ theme }) => theme.mediaQueries.ipad}) {
		max-width: ${({ theme }) => theme.mediaQueries.ipad};
	}
	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopSmall}) {
		max-width: ${({ theme }) => theme.mediaQueries.desktopSmall};
	}
	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		max-width: ${({ theme }) => theme.mediaQueries.desktop};
	}
	@media (min-width: ${({ theme }) => theme.mediaQueries.desktopLarge}) {
		max-width: ${({ theme }) => theme.mediaQueries.desktopLarge};
	}
`

const Headline = styled.h1`
	color: #cccccc;
	font-size: 4.375rem; // 70px;
	font-weight: bold;
	letter-spacing: 0;
	//margin: 24rem 0 calc(1.5625rem - 0.45rem); // 384px (25px - line margin top);
	line-height: 1;
	margin-bottom: 3.6875rem; // 59px;
	margin-top: 0;
`

//TODO rename color names to more accurate name
export const YellowText = styled.span`
	font-size: inherit;
	color: ${({ theme }) => theme.colors.yellow};
`
export const RedText = styled.span`
	font-size: inherit;
	color: ${({ theme }) => theme.colors.red};
`
export const BlueText = styled.span`
	font-size: inherit;
	color: ${({ theme }) => theme.colors.blue};
`
export const GreenText = styled.span`
	font-size: inherit;
	color: ${({ theme }) => theme.colors.green};
`

const PinkText = styled.span`
	font-size: inherit;
	color: ${({ theme }) => theme.colors.pink};
`

export const LogoLineWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	width: 100%;
	margin-bottom: 3rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		order: 1;
		justify-content: start;
		margin-bottom: 0;
	}
`

const LogoPicture = styled.picture`
	display: block;
	align-self: end;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		max-width: 19.5625rem; //calc(var(--containerWidth) - var(--marginLeft));
		position: absolute;
		transform: translateY(-45%);
	}
`

const PictureImg = styled.img`
	width: 100%;
`

const HeroContainer = styled(Container)`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`

const HeroHeadline = styled(Headline)`
	font-size: 3.5625rem; // 57px;
	max-width: 52.5625rem; // 841px;
	margin: 1rem 0 calc(1.5625rem - 0.45rem); // 384px (25px - line margin top);

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		margin-top: 24rem;
	}
`

const HeroLineWrapper = styled.div`
	height: 1rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		display: none;
	}
`

const HeroDescription = styled.p`
	max-width: 56.5625rem; // 905px;
	margin-top: calc(1.5625rem + 0.25rem + 0.45rem);
	margin-bottom: 3rem;
`

const ArrowLinkWrapper = styled.div`
	margin: auto;
`

const ArrowLink = styled.a`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const ArrowIcon = styled.img`
	height: 49px;
`

const WeAreDescription = styled.p`
	font-size: 2.1875rem; // 35px;
	letter-spacing: 0;
	line-height: 2.75rem; //44px;
	margin: 0;
`

const WeAreRow = styled(Row)`
	justify-content: space-between;
	margin-bottom: 9rem;
`

const CloudCol = styled(Col)`
	//width: 27.6875rem; // 443px;
	//height: 21.875rem; // 350px;
	//display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`

const CloudPicture = styled.picture`
	width: 21.6875rem; // 347px;
`

const CloudLine = styled(Line)`
	top: calc(48% - 0.45rem);
`

const SkillsRow = styled(Row)`
	justify-content: space-between;
	margin-bottom: 9rem;
`

const SkillsList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`

const SkillsListItem = styled.li`
	margin-bottom: 2rem; // TODO use value from design
`

const SkillHeadline = styled.h2`
	font-size: 2rem;
	margin: 0;
	line-height: 1;
`
const SkillDescription = styled.p`
	margin: 0;
`

const TechnologiesCard = styled.div`
	background-color: black;
	padding: 2rem 4rem 2rem 2rem;
	position: relative;
`

const TechnologiesPicture = styled.picture`
	position: absolute;
	right: 0;
	top: calc(100% - 1rem);

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		transform: rotate(180deg);
		bottom: calc(100% - 1rem);
		top: unset;
	}
`

const TechnologiesDescription = styled.p`
	margin: 0 0 2rem;
	color: ${({ theme }) => theme.colors.green};
	font-family: 'sourceCodeVariable';
	font-size: 1.25rem; //20px;
`

const ValuesHeadline = styled(Headline)`
	margin-bottom: 11.25rem;
`

const ValuesWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	flex-wrap: wrap;
`

const ValuesColumn = styled.div`
	width: 100%;
	margin-bottom: 3rem;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		width: 17.5rem; // 280px;
	}
`
const ValueDescription = styled.p`
	text-align: center;
`
const ValueHeadlineWrapper = styled.div`
	margin-bottom: 1.875rem;
	position: relative;
	display: flex;
`
const ValueNumber = styled.div`
	color: ${({ theme }) => theme.colors.black};
	font-size: 13rem;
	line-height: 1;
	font-weight: bold;
`
const ValueHeadline = styled.div`
	letter-spacing: 0;
	font-weight: bold;
	font-size: 2.1875rem; //35px;
	line-height: 2.375rem; // 38px;
	text-align: center;
	white-space: pre-wrap;
	z-index: 1;
	padding-top: 0.875rem; // TODO use value from design
	width: 100%;
	position: absolute;
`
const ValuePicture = styled.picture`
	position: absolute;
	right: 0;
`

interface IValueItem {
	number: string
	headline: string
	imageSrc: string
	imageAlt: string
	description: string
}

export function ValueItem(props: IValueItem) {
	return (
		<ValuesColumn>
			<ValueHeadlineWrapper>
				<ValueNumber>{props.number}</ValueNumber>

				<ValueHeadline>{props.headline}</ValueHeadline>

				<ValuePicture>
					{/*TODO use img with correctly sized img*/}
					<PictureImg src={props.imageSrc} alt={props.imageAlt} />
				</ValuePicture>
			</ValueHeadlineWrapper>

			<ValueDescription>{props.description}</ValueDescription>
		</ValuesColumn>
	)
}

const HQDescription = styled.p`
	margin-bottom: 3rem;
`

const CareerDescription = styled.p`
	margin-bottom: 3rem;
`

const CareerCTA = styled.a`
	display: flex;
	align-items: center;
	flex-direction: column;

	@media (min-width: ${({ theme }) => theme.mediaQueries.desktop}) {
		flex-direction: row;
	}

	span {
		font-size: 2.1875rem;
		font-weight: bold;
		color: ${({ theme }) => theme.colors.red};
		text-decoration: underline;
	}
`
