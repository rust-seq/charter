<template>
  <div class="mx-auto mt-20">
    <main>
      <h1>👋 Hi there!</h1>
      <p>
        Welcome to <code>rust-seq</code>—a project that endeavors to rewrite the
        foundations of the omics ecosystem in Rust. We're achieving that mission
        through the following ways.
      </p>

      <div class="get-involved">
        <FrontPageCard :step="1" title="Organizing and indexing what needs building." description="Though our RFC process, we nominate crates to be created
          and decide who will build them." url="https://example.com" :overlay="{
            title: 'Learn how we do it!',
            description: 'Click here to learn about our RFC process.',
          }">
        </FrontPageCard>
        <FrontPageCard :step="2" title="Bringing the community together on Zulip." description="Foo bar baz quux qil."
          url="https://rustseq.zulipchat.com/join/coxb7c7b3bbahlfx7poeqqrd" :overlay="{
            title: 'Join us!',
            description: 'Click here to join the Zulip server.',
          }"></FrontPageCard>
      </div>
    </main>
  </div>
</template>

<script lang="ts"></script>

<style scoped lang="postcss">
main {
  @apply cursor-pointer;
  @apply prose dark:prose-invert;
  @apply max-w-3xl;
  @apply m-auto;

  .get-involved {
    @apply flex flex-col space-y-8 justify-center;
    @apply py-6 my-2;
    @apply border-t border-slate-100 dark:border-slate-800;
  }
}
</style>
