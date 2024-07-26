'use client'
import React, { useState } from "react"
import logoCapitalOne from '@/images/logos/capitalone.svg'
import logoAmpcus from '@/images/logos/ampcus.svg'
import Image from 'next/image'

export function ResumeList () {
  let resume = [
    {
      company: 'Capital One',
      title: 'Software Engineer',
      logo: logoCapitalOne,
      start: 'August 2021',
      end: 'October 2023',
      experience: [
        {
          team: 'Chariot',
          points: [
            'Contributed to the software development lifecycle by designing and implementing features for the Nuxeo platform, delivering clean and scalable code in Python, with AWS, Jenkins and Terraform.',
            'Collaborated within a pluridisciplinary team including internal teams in the Enterprise Consumer Product org and external customers like JCPenny, and identified functional & system requirements, researched adequate technologies, and selected design patterns.',
            'Engineered and maintained a scalable infrastructure using ECS, Redis, and RDS to host the Nuxeo platform, supporting over 200 customers.',
            'Designed and implemented an automatic failover system across east and west regions, leveraging Route53, SNS, CloudWatch Alarms, and Lambda, resulting in a maximum of 3 minutes of downtime.',
            "Architected and deployed AWS infrastructure using Terraform templates and Jenkins pipelines. Developed Python scripts for automated provisioning, rehydration, and testing of deployments in AWS, while also remediating vulnerabilities across the team's infrastructure.",
            "Design and implement efficient tests using PyTest, achieving a 100% test coverage and minimizing bug escape rate.",
            "Offered insightful guidance to a group of interns, thereby clarifying the complex inner workings of the company and the effective use of specific company technologies, an effort that led to a notably faster integration into the workplace."
          ]
        },
        {
          team: 'Voice',
          points: [
            "Redesigned UI with JavaScript, Typescript, Vue.js, HTML, and CSS, enhancing voice application usability.",
            "Improved back-end performance by migrating from Restify to Fastify and converting from AWS ECS to AWS Lambda, achieving 50% faster requests and meeting the company's serverless goal.",
            "Implemented testing frameworks including Cypress, Jest, Mocha Chai, Sinon, and Vue Test Utils, and led a group on data structures and algorithms to foster team skill development."
          ]
        },
      ]
    }, {
      company: 'Capital One',
      title: 'Software Engineer in Training',
      logo: logoCapitalOne,
      start: 'February 2021',
      end: 'August 2021',
      experience: [{
        team: 'CloudHydra',
        points: [
          "Developed a full-stack application using JavaScript, React.js, HTML, CSS, and AWS to distribute sandbox accounts to Capital One employees, streamlining internal workflows. Designed and implemented cloud architecture on AWS, enhancing the management and cleansing of accounts, while collaborating within an agile development team."
        ]
      }]
    }, {
      company: 'Ampcus Inc.',
      title: 'Finance Intern',
      logo: logoAmpcus,
      start: 'June 2019',
      end: 'August 2019',
      experience: [{
        points: [
          "Analyzed financial data in income statements and balance sheets using Microsoft Excel to evaluate company’s past and current performances; developed trend analysis, projected results, and gave recommendations to the Ampcus President",
          "Charted successful course for Socash (www.socash.io)"
        ]
      }]
    }
  ]

  return (
    <ol className="mt-6 space-y-4">
      {resume.map((role, roleIndex) => (
        <ResumeListItem key={roleIndex} role={role} />
      ))}
    </ol>
  )
}

function ResumeListItem({role}) {
  const [showList, setShowList] = useState(false)

  const toggleShowList = () => {
    setShowList(!showList)
  }

  return (
    <div>
      <div className='flex items-center'>
        <button onClick={toggleShowList} type="button" className="mr-2 h-fit rounded-full bg-indigo-200 dark:bg-indigo-800 hover:dark:bg-indigo-500 p-1 text-zinc-900 dark:text-zinc-100 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          {!showList?
            (<svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>)
            :
            (<svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" id="minus" data-name="Flat Color">
              <path id="primary" d="M19,13H5a1,1,0,0,1,0-2H19a1,1,0,0,1,0,2Z"></path>
            </svg>)
          }
        </button>
        <Role role={role} />
      </div>
      <ul className={showList?'':'hidden'}>
        {role.experience.map((exp, index) => (
          <div key={index} className="py-2">
            <h2 className='text-base text-zinc-900 dark:text-zinc-100'>{exp.team}</h2>
            {exp.points.map((point, index) => (
              <li key={index} className='list-disc text-xs text-zinc-500 dark:text-zinc-400'>{point}</li>
            ))}
          </div>
        ))}
      </ul>
    </div>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex items-center gap-4 w-full">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2 w-full">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <div className='flex justify-between w-full'>
          <dt className="sr-only">Role</dt>
          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
            {role.title}
          </dd>
          <dt className="sr-only">Date</dt>
          <dd
            className="text-xs text-zinc-400 dark:text-zinc-500"
            aria-label={`${startLabel} until ${endLabel}`}
          >
            <time dateTime={startDate}>{startLabel}</time>{' '}
            <span aria-hidden="true">—</span>{' '}
            <time dateTime={endDate}>{endLabel}</time>
          </dd>
        </div>
      </dl>
    </li>
  )
}