import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { ResumeList } from '@/components/ResumeList'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}


function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function SocialLinkExtended({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}



function Resume() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ResumeList />
      <Button href="/resume.pdf" target="_blank" rel="noopener noreferrer" download variant="secondary" className="group mt-6 w-full">
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Skills() {
  let list = [
    {
      category: 'Programming Languages',
      skills: ['JavaScript, Python, Typescript, HTML, CSS, Tailwind'],
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['Vue.js, React.js, Next.js']
    },
    {
      category: 'Databases',
      skills: ['Postgres, DynamoDB'],
    },
    {
      category: 'Dev Tools',
      skills: ['Git, Jenkins']
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS, Terraform, Docker']
    },
    {
      category: 'Certifications',
      skills: ['AWS Solutions Architect Associate']
    }
  ]
  return (
    <div className="p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Skills</span>
      </h2>
      <ul className='mt-2 divide-y dark:divide-zinc-700/40'>
        {list.map((cat, index) => (
            <div className='px-4 py-2 sm:gap-4 sm:px-0' key={index}>
              <span className='text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100'>{cat.category}</span>: 
              <span className='mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400 sm:col-span-2 sm:mt-0 '> {cat.skills}</span>
            </div>
          )
        )}
      </ul>
    </div>
  )
}

export default async function Home() {

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software Engineer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Alex, a software engineer currently based in Northern Virginia.
            I specialize in full-stack app development in the financial sector and crypto space.
          </p>
          <div className="mt-6 flex gap-6 mb-8 border-b border-zinc-100 pb-8 dark:border-zinc-700/40">
            <SocialLink
              href="https://github.com/alexdziarn"
              target="_blank"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/alexdziarnowski/"
              target="_blank"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
              
            />
            
          </div>
          <SocialLinkExtended
              href="mailto:alexdziarn@gmail.com"
              icon={MailIcon}
            >
              alexdziarn@gmail.com
            </SocialLinkExtended>
        </div>
      </Container>
      <Container className="mt-6 md:mt-6">
        <div className="flex items-start grid max-w-xl grid-cols-1 gap-y-5 lg:max-w-none lg:grid-cols-2">
          <Resume />
          <Skills />            
        </div>
      </Container>
    </>
  )
}
