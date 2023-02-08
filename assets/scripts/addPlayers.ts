import { _decorator, Component, Node, Prefab, instantiate, ScrollView, Label } from 'cc';
const { ccclass, property } = _decorator;

import data from './players'

@ccclass('addPlayers')
export class addPlayers extends Component {
    @property({type:Prefab})
    p:Prefab = null;

    onLoad(){
        let cont = this.node.getComponent(ScrollView).content
        for(let i=0;i<data.length;i++){
            const prefabInstance = instantiate(this.p)
            let r = prefabInstance.getChildByName("Row")

            let l1 = r.getChildByName("Label1")
            let l2 = r.getChildByName("Label2")
            let l3 = r.getChildByName("Label3")

            l1.getComponent(Label).string = data[i].id
            l2.getComponent(Label).string = data[i].first_name
            l3.getComponent(Label).string = data[i].score
            // adding it to content
            cont.addChild(prefabInstance)
        }
    }

    start() {
        
    }

    update(deltaTime: number) {
        
    }
}

