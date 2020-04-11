import {
  Construct,
} from "monocdk-experiment";

interface RegionalAssetsProps {}

export class RegionalAssets extends Construct {
  constructor(parent: Construct, id: string, props: RegionalAssetsProps) {
    super(parent, id);
    
    console.log(props);
  }
}
