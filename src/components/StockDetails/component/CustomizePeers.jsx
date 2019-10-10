import * as React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { Tag, Button, Icon } from "antd";

export interface Cum

export function CumtomizePeers  = (selectedTags, unSelectedTags)  =>{
  return (
    <div className="CustomizePeers">
      <div>
        <h3>Cutomize Peers</h3>
      </div>
      <div className="Tags">
        {selectedTags.map(tag => (
          <Button
            size="small"
            onClick={this.props.onClickSelectPeers}
            name={tag}
          >
            <Icon type="close" />
            {tag}
          </Button>
        ))}
      </div>
      <div className="Tags">
        {unSelectedTags.map(tag => (
          <Button
            size="small"
            onClick={this.props.onClickSelectPeers}
            name={tag}
          >
            <Icon type="plus" />
            {tag}
          </Button>
        ))}
      </div>
      <div className="Buttons">
        <Button type="primary" onClick={this.props.onClickUpdatePeers}>
          Update peers
        </Button>
        <Button type="primary" onClick={this.props.onClickCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
}

