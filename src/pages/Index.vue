<template>
  <Layout>
    <div class="pt-8 md:pt-16">
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center mb-2 text-ui-primary">
          <Logo :width="80" />
          <h2 class="text-3xl text-6xl font-black tracking-tighter border-none">
            Suridocz
          </h2>
        </div>
        <p class="text-xl font-medium text-center">
          Minha documentação, onde posso me encontrar e fazer revisões do que estudo e
          escrevo.
        </p>

        <div class="flex justify-center mt-2">
          <g-link
            to="/summary"
            class="
              flex
              items-center
              px-6
              py-4
              ml-auto
              text-2xl
              font-bold
              leading-none
              text-white
              border
              rounded-lg
              shadow-lg
              bg-ui-primary
              border-ui-primary
              transition-all
              duration-200
              ease-out
              transform
              hover:shadow-xl hover:-translate-y-1
            "
          >
            Ler resumos
            <ArrowRightCircleIcon class="ml-4" size="1x" />
          </g-link>
        </div>

        <div class="flex justify-center mt-2">
          <g-link
            to="/summary"
            class="
              flex
              items-center
              px-6
              py-4
              ml-auto
              text-2xl
              font-bold
              leading-none
              text-white
              border
              rounded-lg
              shadow-lg
              bg-ui-primary
              border-ui-primary
              transition-all
              duration-200
              ease-out
              transform
              hover:shadow-xl hover:-translate-y-1
            "
          >
            Ler aprendendo
            <ArrowRightCircleIcon class="ml-4" size="1x" />
          </g-link>
        </div>

        <p class="mt-8 text-center">
          Você pode ver meu site principal
          <a
            class="border-b border-dashed border-ui-primary text-ui-primary"
            href="https://felipesuri.com"
            target="_blank"
          >
            aqui
          </a>
        </p>
      </div>

      <div
        class="
          pt-8
          mx-auto
          mt-8
          border-t
          md:mt-16 md:pt-16
          border-top border-ui-border
          max-w-screen-sm
        "
      />

      <div class="flex flex-wrap justify-center -mx-4">
        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <SearchIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Pesquisa instantânea
          </h3>
        </div>

        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <MoonIcon size="3x" class="mb-6 text-ui-primary" />
          <h3 class="font-bold tracking-wide uppercase text-ui-primary">
            Luzes apagadas
          </h3>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Logo from '@/components/Logo'
import {
  ArrowRightCircleIcon,
  ZapIcon,
  CodeIcon,
  MoonIcon,
  SearchIcon,
} from 'vue-feather-icons'

export default {
  components: {
    Logo,
    ArrowRightCircleIcon,
    ZapIcon,
    CodeIcon,
    MoonIcon,
    SearchIcon,
  },

  metaInfo() {
    const title = 'Suridocz'
    const description =
      'Minha documentação, onde posso me encontrar e fazer revisões do que estudo e escrevo. '

    return {
      title: title,
      meta: [
        {
          name: 'description',
          content: description,
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: description,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: description,
        },
      ],
    }
  },
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
