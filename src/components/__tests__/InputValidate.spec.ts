import { describe, it, expect } from "vitest";

import { shallowMount } from "@vue/test-utils";
import InputMail from "../InputMail.vue";

describe("ValidateInput", () => {
  const wrapper = shallowMount(InputMail);
  const input = wrapper.find("#mailInput");

  it("valid mail", () => {
    input.setValue("valid@email.com");
    input.trigger("keyup");
    expect(wrapper.vm.isEmailValid).toBe("ok!");
  });

  it("invalid mail", () => {
    input.setValue("in$valid@email.c#com");
    input.trigger("keyup");
    expect(wrapper.vm.isEmailValid).toBe("false");
  });
});
