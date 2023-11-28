import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Часто задаваемые вопросы" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Что такое Газпромнефть?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          По объему добычи и переработки нефти «Газпром нефть» входит в тройку крупнейших компаний России. 
          Ключевой акционер «Газпром нефти» — ПАО «Газпром» (95,68%). остальные акции находятся в свободном обращении.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Что такое Dashboard?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Дашборд простыми словами — это интерактивная аналитическая панель, графический интерфейс. 
          Смысл в том, что на одном экране расположены все ключевые метрики, показатели цели или процессов. 
          С помощью этих метрик можно выявить и проанализировать тренды и изменения..
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Разведка и добыча
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          «Газпром нефть» ведет работу в крупнейших российских нефтегазоносных регионах: Ханты-Мансийском и Ямало-Ненецком автономных округах,
          Томской, Омской, Оренбургской областях, республике Саха. 
          Кроме того, компания реализует проекты в сфере добычи за пределами России. 
          По состоянию на 31 декабря 2021 года суммарные запасы углеводородов «Газпром нефти» 
          (с учетом доли в совместных предприятиях) категорий «доказанные» и «вероятные» (рrоvеd+рrоbаblе — 2P) международного стандарта SРЕ-РRМS
           составили 4,1 млрд тонн н.э.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Переработка и продажа нефтепродуктов
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Компания демонстрирует одно из лучших в российской отрасли соотношение добычи и переработки. 
          Основные перерабатывающие мощности компании находятся в Омске, Москве и Ярославле, а также в сербском городе Панчево.
          «Газпром нефть» реализует масштабную программу технологической и экологической модернизации своих НПЗ, направленную на 
          повышение эффективности нефтепереработки и снижение воздействия предприятий на окружающую среду.
          Сеть автозаправочных станций под управлением «Газпром нефти» насчитывает порядка 2,4 тысяч АЗС в России и за рубежом. 
          Компания также заправляет своим топливом самолеты, морской и речной транспорт, производит высокотехнологичные масла для 
          промышленной и автомобильной техники, битум для строительства качественных дорог, развивает проекты альтернативной энергетики.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Стратегия развития до 2030 года
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Стратегия «Газпром нефти» ориентирована на рыночное позиционирование компании, повышение ее гибкости по отношению к внешним
          изменениям и трансформацию всех ключевых бизнес-процессов. Задачи «Газпром нефти» до 2030 года — выстроить компанию нового 
          поколения, стать ориентиром для других компаний отрасли по эффективности, безопасности и технологичности. «Газпром нефть» планирует 
          укрепить позиции в десятке крупнейших в мире публичных нефтегазовых компаний по объемам добычи жидких углеводородов, наращивая добычу 
          темпами выше рынка и максимизируя создаваемую стоимость каждого добытого барреля. Компания продолжит повышать эффективность управления
          цепочкой создания стоимости за счет увеличения глубины переработки и выхода светлых нефтепродуктов, развития направления нефтехимии, 
          сохранения лидирующих позиций и наращивания доли на существующих и новых продуктовых рынках сбыта.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;