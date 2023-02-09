import {component$} from "@builder.io/qwik";

export const HelloMessage = component$(() => {
    const message = ' Welcome to this Qwik Course!'
    const version = 4;
    return (
        <div class='container'>
            <>{
                <h1>
                    {message}: version - {version}
                </h1>}   </>
        </div>
    )
});
