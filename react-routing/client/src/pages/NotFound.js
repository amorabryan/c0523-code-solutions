import './NotFound.css';
import { Link } from 'react-router-dom';
import Catalog from './Catalog.js';

export default function NotFound() {
  return (
    <div className="Header-content">
      <div className="row">
        <div className="col text-center mb-5">
          <h3>Uh oh, we could not find the page you were looking for!</h3>
          {/* TODO: Make this a link to the Catalog, with className "text-muted" */}
          <Link to={<Catalog />} className="text-muted">
            Return to the catalog
          </Link>
        </div>
      </div>
    </div>
  );
}
