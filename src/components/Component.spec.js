import { render } from "@testing-library/vue";
import Component from "@/components/Component.vue";
import {config} from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("Component", () => {


    it("renders", () => {

        const comp = render(Component/*, {
            global: {
                components: { HelloWorld }
            },
        }*/);
        const { getByText } = comp;
        getByText("HELLO WORLD!!!")
    });
});