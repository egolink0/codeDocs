import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";

export default function SimpleAccordion() {
  const routes = [
    {
      link: "posts",
      name: "posts",
      children: [
        {
          link: "hello",
          name: "hello",
        },
      ],
    },
    {
      link: "git",
      name: "git",
    },
  ];
  return (
    <div>
      {routes.map((r) => {
        if (r?.children?.length > 0) {
          const baseLink = `/${r.link}`;
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>
                  <Link href={baseLink}>{r.link}</Link>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {r.children.map((c) => {
                  return (
                    <Typography>
                      <Link href={`${baseLink}/${c.link}/`}>{c.link}</Link>
                    </Typography>
                  );
                })}
              </AccordionDetails>
            </Accordion>
          );
        } else {
          return (
            <Typography>
              <Link href={`/${r.link}/`}>{r.link}</Link>
            </Typography>
          );
        }
      })}
    </div>
  );
}
