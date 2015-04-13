require 'erb'

elements = []
body = ''
body_erb = ERB.new(DATA.read, nil, '-')
File.open('app/three-canvas.html') do |file|
  file.each_line do |line|
    next unless line =~ /^<polymer-element (.*)>/
    info = Hash[*($1.split(' ').map{|kv| kv.split('=').tap{|a| a[1] = a[1].gsub('"', '')}}).flatten]
    name = info['name']
    elements << name
    extends = info['extends']
    attributes = info['attributes'] ? info['attributes'].gsub(/\s/, '').split(',') : nil
    object = info['object']
    body += body_erb.result(binding)
  end
end
html = <<-EOS
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <style>
    section {
      border-top: 1px solid gray;
    }
    dt {
      margin-top: 10px;
    }
    ul {
      margin-top: 0;
    }
    </style>
  </head>
  <body>
    <aside>
      <ul>
      #{elements.map{|e| "<li><a href='##{e}'>#{e}</a></li>"}.join}
      </ul>
    </aside>
    <article>
      #{body}
    </article>
  </body>
</html>
EOS
puts html
__END__
<a name="<%= name %>" />
<section>
  <h2><%= name %></h2>
  <dl>
  <%- if extends -%>
    <dt>Parent</dt><dd><a href="#<%= extends %>"><%= extends %></a></dd>
  <%- end -%>
  <%- if object -%>
    <dt>Three.js Object</dt><dd><%= object %></dd>
  <%- end -%>
  <%- if attributes -%>
    <dt>Attributes</dt>
    <dd>
      <ul>
      <%- attributes.each do |attribute| -%>
        <li><%= attribute %></li>
      <%- end -%>
      </ul>
    </dd>
  <%- end -%>
<!--
  <%- if extends -%>
  <div>
    Parent: <a href="#<%= extends %>"><%= extends %></a>
  </div>
  <%- end -%>
  <%- if object -%>
  <div>
    Three.js Object: <%= object %>
  </div>
  <%- end -%>
  <%- if attributes -%>
  <div>
    Attributes:
    <ul>
    <%- attributes.each do |attribute| -%>
      <li><%= attribute %></li>
    <%- end -%>
    </ul>
  </div>
  <%- end -%>
-->
</section>
