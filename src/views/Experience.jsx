import React from 'react'

import Page from 'components/Page'

export default function Experience(props)
{
	return (
		<Page title='Experience'>
			<dl>
				<dt>Intern, Aptera</dt>
				<dh>
					Front-end developer, utilizing React and ASP.NET to create the front end
					for a custom in-house ticketing system.
				</dh>
				<dt>Student Software Developer, Indiana Tech</dt>
				<dh>
					Worked with the Indiana Tech IT department to create tools for automating
					student management tasks. Created a .NET library for interacting with the
					Blackboard CMS's REST API.
				</dh>
				<dt>Workstation Support Technician, Indiana Tech</dt>
				<dh>
					Supported Indiana Tech faculty, staff, and students by troubleshooting
					connection problems and Microsoft Office licensing assignments, performing
					password resets, and deploying laptops and desktops.
				</dh>
			</dl>
		</Page>
	)
}
