import React, { Component } from "react";
import { Card , Button} from 'semantic-ui-react';
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from '../routes';

class CampaignIndex extends Component {
  //proper with react.js but not with next.js (not executed on server componentDidMount)
  //
  //async componentDidMount() {
  //  const campaigns = await factory.methods.getDeployedCampaigns().call();
  //  console.log(campaigns);
  //}
  
  //static define a class function
  //allows to not create instances

  static async getInitialProps(){
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    //return an object provided as props in our component
    return { campaigns };
  }

  renderCampaigns() {
    //array object that has a list of campaigns
    const items = this.props.campaigns.map(address => {
        return {
            header: address,
            description: (
              <Link route={`/campaigns/${address}`}>
                <a>
                  View Campaing
                </a>
              </Link>
            ),
            fluid: true
        };
    });

    return <Card.Group items={items} />

  }

  render() {
    return (
        <Layout>
            <div>
            
            <h3>Open Campaigns</h3>

            <Link route="/campaigns/new">
              <a>
                <Button
                  floated="right"
                  content="Create Campaign"
                  icon="add circle"
                  primary
                />
              </a>
            </Link>

            {this.renderCampaigns()}
            </div>
        </Layout>
    )
  }
}

export default CampaignIndex;