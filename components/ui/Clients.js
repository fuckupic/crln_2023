import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState, SyntheticEvent } from 'react'
import Image from 'next/image'
import Typography from '@mui/material/Typography'

const Clients = () => {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const ExpandIcon = () => {
    return (
      <div className="flex items-center justify-center bg-black rounded-full p-1">
        <ExpandMoreIcon sx={{ fill: 'white' }} />
      </div>
    )
  }

  return (
    <div className="flex flex-col !bg-none">
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
        className="!border-b-2 !border-black !flex !flex-col !justify-between shadow-none w-[100%] !bg-none !font-degular"
        sx={{ bgcolor: 'transparent' }}
      >
        <AccordionSummary
          expandIcon={<ExpandIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className="!justify-between !h-20 !flex !flex-row !gap-0 !w-[100%] !bg-none !border-none !font-degular"
        >
          <div className=" !bg-none flex flex-row justify-between w-[100%] !items-center mr-5">
            <Image
              src="/clients/2jcp_logo.png"
              alt="client's logo"
              width={150}
              height={100}
            />
            <Typography className=" font-degular font-bold text-3xl right-0 ">
              Powering a better world
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className="flex !justify-end !items-end !flex-col gap-5">
          <Typography
            sx={{
              fontFamily: 'Barlow Semi Condensed',
              textAlign: 'right',
              maxWidth: '50%',
            }}
          >
            Úplný rebrand zavedené firmy je jedna z nejtěžších marketingových
            disciplín. Proč? Protože se lidem pod rukama změní úplně všechno.
          </Typography>
          <Typography
            sx={{
              textAlign: 'right',
            }}
            className="font-degular font-bold "
          >
            more...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        className="!border-b-2 !border-black !flex !flex-col !justify-between shadow-none w-[100%] !bg-none !font-degular"
        sx={{ bgcolor: 'transparent' }}
      >
        <AccordionSummary
          expandIcon={<ExpandIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className="!justify-between !h-20 !flex !flex-row !gap-0 !w-[100%] !bg-none !border-none !font-degular"
        >
          <div className=" !bg-none flex flex-row justify-between w-[100%] !items-center mr-5">
            <Image
              src="/clients/2jcp_logo.png"
              alt="client's logo"
              width={150}
              height={100}
            />
            <Typography className=" font-degular font-bold text-3xl right-0 ">
              Powering a better world
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className="flex !justify-end !items-end !flex-col gap-5">
          <Typography
            sx={{
              fontFamily: 'Barlow Semi Condensed',
              textAlign: 'right',
              maxWidth: '50%',
            }}
          >
            Úplný rebrand zavedené firmy je jedna z nejtěžších marketingových
            disciplín. Proč? Protože se lidem pod rukama změní úplně všechno.
          </Typography>
          <Typography
            sx={{
              textAlign: 'right',
            }}
            className="font-degular font-bold "
          >
            more...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        className="!border-b-2 !border-black !flex !flex-col !justify-between shadow-none w-[100%] !bg-none !font-degular"
        sx={{ bgcolor: 'transparent' }}
      >
        <AccordionSummary
          expandIcon={<ExpandIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          className="!justify-between !h-20 !flex !flex-row !gap-0 !w-[100%] !bg-none !border-none !font-degular"
        >
          <div className=" !bg-none flex flex-row justify-between w-[100%] !items-center mr-5">
            <Image
              src="/clients/2jcp_logo.png"
              alt="client's logo"
              width={150}
              height={100}
            />
            <Typography className=" font-degular font-bold text-3xl right-0 ">
              Powering a better world
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className="flex !justify-end !items-end !flex-col gap-5">
          <Typography
            sx={{
              fontFamily: 'Barlow Semi Condensed',
              textAlign: 'right',
              maxWidth: '50%',
            }}
          >
            Úplný rebrand zavedené firmy je jedna z nejtěžších marketingových
            disciplín. Proč? Protože se lidem pod rukama změní úplně všechno.
          </Typography>
          <Typography
            sx={{
              textAlign: 'right',
            }}
            className="font-degular font-bold "
          >
            more...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
        className="!border-b-2 !border-black !flex !flex-col !justify-between shadow-none w-[100%] !bg-none !font-degular"
        sx={{ bgcolor: 'transparent' }}
      >
        <AccordionSummary
          expandIcon={<ExpandIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
          className="!justify-between !h-20 !flex !flex-row !gap-0 !w-[100%] !bg-none !border-none !font-degular"
        >
          <div className=" !bg-none flex flex-row justify-between w-[100%] !items-center mr-5">
            <Image
              src="/clients/2jcp_logo.png"
              alt="client's logo"
              width={150}
              height={100}
            />
            <Typography className=" font-degular font-bold text-3xl right-0 ">
              Powering a better world
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className="flex !justify-end !items-end !flex-col gap-5">
          <Typography
            sx={{
              fontFamily: 'Barlow Semi Condensed',
              textAlign: 'right',
              maxWidth: '50%',
            }}
          >
            Úplný rebrand zavedené firmy je jedna z nejtěžších marketingových
            disciplín. Proč? Protože se lidem pod rukama změní úplně všechno.
          </Typography>
          <Typography
            sx={{
              textAlign: 'right',
            }}
            className="font-degular font-bold "
          >
            more...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
        className="!border-b-2 !border-black !flex !flex-col !justify-between shadow-none w-[100%] !bg-none !font-degular"
        sx={{ bgcolor: 'transparent' }}
      >
        <AccordionSummary
          expandIcon={<ExpandIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
          className="!justify-between !h-20 !flex !flex-row !gap-0 !w-[100%] !bg-none !border-none !font-degular"
        >
          <div className=" !bg-none flex flex-row justify-between w-[100%] !items-center mr-5">
            <Image
              src="/clients/2jcp_logo.png"
              alt="client's logo"
              width={150}
              height={100}
            />
            <Typography className=" font-degular font-bold text-3xl right-0 ">
              Powering a better world
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className="flex !justify-end !items-end !flex-col gap-5">
          <Typography
            sx={{
              fontFamily: 'Barlow Semi Condensed',
              textAlign: 'right',
              maxWidth: '50%',
            }}
          >
            Úplný rebrand zavedené firmy je jedna z nejtěžších marketingových
            disciplín. Proč? Protože se lidem pod rukama změní úplně všechno.
          </Typography>
          <Typography
            sx={{
              textAlign: 'right',
            }}
            className="font-degular font-bold "
          >
            more...
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel6'}
        onChange={handleChange('panel6')}
        className="!border-b-2 !border-black !flex !flex-col !justify-between shadow-none w-[100%] !bg-none !font-degular"
        sx={{ bgcolor: 'transparent' }}
      >
        <AccordionSummary
          expandIcon={<ExpandIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
          className="!justify-between !h-20 !flex !flex-row !gap-0 !w-[100%] !bg-none !border-none !font-degular"
        >
          <div className=" !bg-none flex flex-row justify-between w-[100%] !items-center mr-5">
            <Image
              src="/clients/2jcp_logo.png"
              alt="client's logo"
              width={150}
              height={100}
            />
            <Typography className=" font-degular font-bold text-3xl right-0 ">
              Powering a better world
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className="flex !justify-end !items-end !flex-col gap-5">
          <Typography
            sx={{
              fontFamily: 'Barlow Semi Condensed',
              textAlign: 'right',
              maxWidth: '50%',
            }}
          >
            Úplný rebrand zavedené firmy je jedna z nejtěžších marketingových
            disciplín. Proč? Protože se lidem pod rukama změní úplně všechno.
          </Typography>
          <Typography
            sx={{
              textAlign: 'right',
            }}
            className="font-degular font-bold "
          >
            more...
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Clients
