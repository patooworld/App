import React, { PureComponent } from 'react';
import { Spinner } from 'react-bootstrap';

class SearchStatus extends PureComponent<ISearchStatusProps> {
  render() {
    if (this.props.searching) {
      return (
        <span>
          <span>Searching for matching applications...</span>{' '}
          <Spinner animation="border" size="sm" variant="secondary" />
        </span>
      );
    } else if (this.props.resultsCount) {
      return (
        <span>
          Found {this.props.resultsCount} applications
          {this.props.query && (
            <span>
              {' '}
              for '<strong>{this.props.query}</strong>'
            </span>
          )}
          .
        </span>
      );
    } else {
      return (
        <span>
          No result found for '<strong>{this.props.query}</strong>'
        </span>
      );
    }
  }
}

interface ISearchStatusProps {
  query?: string;
  resultsCount: number;
  searching: boolean;
  type: string;
}

export default SearchStatus;
