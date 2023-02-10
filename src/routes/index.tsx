import {component$, $} from "@builder.io/qwik";
import {HelloMessage} from "~/components/hello-message/hello-message";

export default component$(() => {
    const sayHello = $(() => {
        alert('Hello world');
    })
    return (
        <>
            <HelloMessage message="hello world" courseVersion={4}/>
            <button onClick$={sayHello}>Say Hello</button>
        </>
    )
});


