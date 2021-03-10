import { shallowMount } from "@vue/test-utils";

import Message from "@/components/Message.vue";

describe("Message.vue", () => {
  it("renders props.message when passed", () => {
    const message = {
      text: "Hello from App!",
      color: "blue"
    };
    const wrapper = shallowMount(Message, {
      props: { message } as object
    });
    expect(wrapper.text()).toMatch(message.text);
  });
});
