export type Props = {
  title: string;
  body: string;
  href: string;
};

export default function ReactCard({ href, title, body }: Props) {
  return (
    <li className="rounded-lg bg-white from-violet-600/25 to-pink-500/25 p-6 text-neutral-700 shadow-md hover:bg-gradient-to-tr hover:text-violet-600">
      <a href={href}>
        <h2>
          {title}
          <span>&rarr;</span>
        </h2>
        <p className="text-neutral-500 hover:text-neutral-600">{body}</p>
      </a>
    </li>
  );
}
