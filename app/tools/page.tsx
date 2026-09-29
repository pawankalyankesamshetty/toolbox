import Link from 'next/link';
import {tools} from '@/lib/tools';
export const metadata={title:'All Free Online Tools',description:'Browse all free online tools from ToolBox.'};
export default function Tools(){return <div className="container section"><h1>All Tools</h1><p className="sectionlead">Browse our growing collection of free online utilities.</p><div className="grid">{tools.map(t=><Link className="card" href={`/tools/${t.slug}`} key={t.slug}><div className="icon">{t.icon}</div><h3>{t.name}</h3><p>{t.description}</p></Link>)}</div></div>}
