import { shallowMount } from "@vue/test-utils";

import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  it("renders props.message when passed", () => {
    const message = {
      text: "Hello from App!",
      color: "blue"
    };
    const wrapper = shallowMount(Header, {
      props: { message } as object
    });
    expect(wrapper.text()).toMatch(message.text);
  });
});
