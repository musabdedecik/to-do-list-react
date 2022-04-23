import { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function DefaultAccordion() {
  const [expanded, setExpanded] = useState('panel1');
  const technologies = [
     "Redux Toolkit (State Management)", "ReactJs", "Material UI Kit", "React Hooks + Refs", "Heroku", "Axios for call api", "Formik"
  ];

  const handleChange =
    (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div style={{marginTop:"24px"}}>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Uygulama yapılırken kullanılan teknolojiler</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {technologies.map((technology, i) => (
            <Typography key={i}> {technology} </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Bu uygulamayı ne işe yarıyor?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Dijital Kartvizit Uygulaması, girilen bilgiler ile kullanılabilecek bir kartvizit çıkarır. Bu kartviziti görmesini istediğiniz herkesle açık bir şekilde paylaşabilirsiniz.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Bu uygulama neden yapıldı?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Bu uygulama Kafein Yazılım ile yapılan iş görüşmesi için hazırlanmıştır.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}