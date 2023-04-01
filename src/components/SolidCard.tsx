/** @jsxImportSource solid-js */

export type Props = {
  title: string;
  body: string;
  href: string;
};

export default function SolidCard(props: Props) {
  return (
    <li class="rounded-lg bg-white from-violet-600/25 to-pink-500/25 p-6 text-neutral-700 shadow-md hover:bg-gradient-to-tr hover:text-violet-600">
      <a href={props.href}>
        <h2>
          {props.title}
          <span>&rarr;</span>
        </h2>
        <p class="text-neutral-500 hover:text-neutral-600">{props.body}</p>
      </a>
    </li>
  );
}
