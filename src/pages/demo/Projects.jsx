import DemoLayout from './DemoLayout.jsx'
import Badge from '../../components/ui/Badge.jsx'
import Button from '../../components/ui/Button.jsx'
import Avatar from '../../components/ui/Avatar.jsx'
import './demo.css'

const PROJECTS = [
  { name: 'Website Redesign', desc: 'Marketing site refresh', owner: 'Sarah Chen', status: 'In Progress', variant: 'primary', due: 'Jul 12, 2026' },
  { name: 'Q4 Analytics Dashboard', desc: 'Executive reporting views', owner: 'Marcus Webb', status: 'In Review', variant: 'warning', due: 'Jul 5, 2026' },
  { name: 'Mobile App Launch', desc: 'iOS + Android release', owner: 'Priya Patel', status: 'On Track', variant: 'success', due: 'Aug 1, 2026' },
  { name: 'Billing Migration', desc: 'Move to new payments provider', owner: 'James Okafor', status: 'Blocked', variant: 'error', due: 'Jun 30, 2026' },
  { name: 'Onboarding Flow', desc: 'New-user setup experience', owner: 'Sarah Chen', status: 'Done', variant: 'success', due: 'Jun 20, 2026' },
]

export default function Projects() {
  return (
    <DemoLayout activeItem="Projects">
      <div className="demo-page">
        <div className="demo-page-header">
          <div>
            <h1 className="demo-page-title">Projects</h1>
            <p className="demo-page-subtitle">Track active work across your team.</p>
          </div>
          <Button variant="primary" size="md">New Project</Button>
        </div>

        <div className="demo-card">
          <div className="demo-card-header">
            <h2 className="demo-card-title">All projects</h2>
            <span className="demo-card-meta">{PROJECTS.length} total</span>
          </div>
          <div className="demo-table-wrap">
            <table className="demo-table">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Owner</th>
                  <th>Status</th>
                  <th>Due date</th>
                </tr>
              </thead>
              <tbody>
                {PROJECTS.map(p => (
                  <tr key={p.name}>
                    <td>
                      <div className="demo-project-cell">
                        <span className="demo-project-name">{p.name}</span>
                        <span className="demo-project-desc">{p.desc}</span>
                      </div>
                    </td>
                    <td>
                      <div className="demo-owner-cell">
                        <Avatar name={p.owner} size="sm" />
                        <span>{p.owner}</span>
                      </div>
                    </td>
                    <td><Badge variant={p.variant} size="sm">{p.status}</Badge></td>
                    <td className="demo-due">{p.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DemoLayout>
  )
}
