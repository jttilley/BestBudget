import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddBudgetItem from './AddBudgetItem';
import { personalCategories, businessCategories } from '../utils/allCategories';
import BudgetContext from '../utils/BudgetContext'; 

let budgetItems = [];
console.log("🚀 ~ file: Categories.js ~ line 15 ~ budgetItems", budgetItems)
let local = localStorage.getItem("budgetItems");
if (local) budgetItems = JSON.parse(local);

console.log('🚀 ~ file: Categories.js ~ line 15 ~ localStorage.getItem("budgetItems")', localStorage.getItem("budgetItems"));
console.log("🚀 ~ file: Categories.js ~ line 15 ~ budgetItems", budgetItems)

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
  palette: {
    mode: 'dark',
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

export default function Categories() {
  // const [expanded, setExpanded] = React.useState<"" | false>('panel1');

  // const handleChange =
  //   (panel: "string") => (event: React.SyntheticEvent, newExpanded: boolean) => {
  //     setExpanded(newExpanded ? panel : false);
  //   };

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const addItem = (description,amount,type,category) => {
    // create user object from submission
  var newItem = {
    name: description,
    amount: amount,
    isExpense: type === "Budget" ? false : true,
    categroy: category,
  };

  budgetItems.push(newItem)
  
  // set new submission to local storage 
  localStorage.setItem("budgetItems", JSON.stringify(budgetItems));
  };

  const handleItemChanges = (e) => {

  };

  const handleAmountChanges = (e) => {

  }

  return (
    <div>
      <BudgetContext.Provider value={{
        addItem,
        handleItemChanges,
        handleAmountChanges
      }} >
      {personalCategories.map((category) => (
        <Accordion expanded={expanded === 'panel' + category.id} key={category.id} onChange={handleChange('panel' + category.id)}>
          <AccordionSummary aria-controls="panel' + category.id + 'd-content" id="panel' + category.id + 'd-header">
            <Typography>{category.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AddBudgetItem category={category.name} subCategories={category.subCategories}/>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      </BudgetContext.Provider>
      </div>
  );
}
